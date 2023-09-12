import EventBasics from "./EventBasics";
import EventCategoriesLabs from "./EventCategoriesLabs";
import EventEditionButtons from "./EventEditionButtons";
import EventFormat from "./EventFormat";
import EventLinks from "./EventLinks";
import EventLocation from "./EventLocation";

export default function EventSpaceDeatils() {
  return (
    <div className="w-full rounded-2xl border py-5 px-4 gap-[34px] border-opacity-10 border-[#FFFFFF] bg-[#2E3131] bg-opacity-10">
      <div className="flex flex-col gap-[34px]">
        <div className="text-[25px] font-normal leading-7.5">Event Space Details</div>
        <EventBasics />
        <EventFormat />
        <EventLinks />
        <EventCategoriesLabs />
        <EventEditionButtons />
        <EventLocation />
      </div>
    </div>
  )
}