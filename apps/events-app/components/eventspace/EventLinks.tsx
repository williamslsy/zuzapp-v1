import IconButton from "../ui/buttons/IconButton";
import SwitchButton from "../ui/buttons/SwitchButton";
import EventDeatilsDescription1 from "../ui/labels/event-details-description-1";
import EventSpaceLabel from "../ui/labels/event-space-label";
import InputFieldLabel from "../ui/labels/input-field-label";
import { GoPlus } from "react-icons/go";
import ArrowLink from "../ui/links/ArrowLink";
import MediaLink from "../ui/MediaLink";
import Button from "../ui/buttons/Button";
import { useState } from "react";

export default function EventLinks() {
  const [isLink, setIsLink] = useState(false);
  return (
    <div className="flex flex-col gap-[34px]">
      <div className="flex flex-col gap-[10px]">
        <EventSpaceLabel name="Event Links" />
        <EventDeatilsDescription1 name="Links include social media and other links related to your event" />
      </div>
      <div className="flex gap-5">
        <SwitchButton />
        <InputFieldLabel name="Add Links" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <InputFieldLabel name="Social Media" />
          <IconButton icon={GoPlus} className="rounded-[40px] py-2.5 px-3.5 bg-[#F1F1F1] bg-opacity-20 border-none" />
        </div>
        <div>
          <MediaLink linkType={""} />
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>

      <button className="flex gap-5" onClick={() => setIsLink(!isLink)}>
        {/* <SwitchButton /> */}
        <EventSpaceLabel1 name="Add Links" />
      </button>
      {
        isLink && (
          <div className="flex flex-col gap-5">
            <MediaLink linkType={"Social Media"} />
            <MediaLink linkType={"Extra Links"} />
          </div>
        )
      }
    </div>
  )
}