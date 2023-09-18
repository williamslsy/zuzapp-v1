import { BsFillTicketFill } from "react-icons/bs";
import { scheduleNavBarDetails } from "@/constant/addschedulenavbar";

export default function DetailsBar() {
  return (
    <div className="rounded-s-xl opacity-70 w-[230px]">
      <div className="p-3.5 flex gap-2.5 ">
        <BsFillTicketFill className="w-5 h-5" /> Schedule
      </div>
      <div className="flex flex-col gap-2">
        {
          scheduleNavBarDetails.map((item, index) => (
            <div>
              <h2 key={index} className="px-3.5 hover: cursor-pointer font-bold">{item.name}</h2>
              <h3 key={index} className="px-3.5 hover: cursor-pointer text-xs font-light opacity-60">{item.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}