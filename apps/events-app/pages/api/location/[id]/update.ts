import { NextApiRequest, NextApiResponse } from "next";
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import withSession from "../..//middlewares/withSession";
import { Database } from "@/database.types";
import { logToFile } from "@/utils/logger";
import { validateLocationUpdate, validateUUID } from "@/validators";  // Ensure this path is correct
import { QueryWithID } from "@/types";

const updateLocationHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const supabase = createPagesServerClient<Database>({ req, res });

    const { id } = req.query as QueryWithID


    // validate uuid
    const errors = validateUUID(id);
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    // Validate location data for update
    const [validation_result, validatedData] = validateLocationUpdate(req.body);
    if (validation_result.error) {
        logToFile("user error", validation_result.error.details[0].message, 400, req.body.user.email);
        return res.status(400).json({ error: validation_result.error.details[0].message });
    }

    const { name, description, is_main_location, address, capacity, image_urls, event_space_id } = validatedData;

    const result = await supabase
        .from('eventspacelocation').update({
            name,
            description,
            is_main_location: is_main_location || false,
            address,
            capacity,
            image_urls,
            event_space_id
        }).eq('id', id).select("*");

    if (result.error) {
        logToFile("server error", result.error.message, result.error.code, req.body.user.email);
        return res.status(500).send("Internal server error");
    }

    return res.status(result.status).json({ message: "Location updated", data: result.data });
}

export default withSession(updateLocationHandler);
