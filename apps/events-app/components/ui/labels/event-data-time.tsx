import { HiClock } from "react-icons/hi";

interface IEventData {
  startTime: string;
  endTime: string;
}

export default function EventData(props: IEventData) {
  const { startTime, endTime } = props;
  return (
    <div className="flex gap-2 items-center bg-trackItemHover py-2 px-3 rounded-xl font-bold opacity-80">
      <HiClock /><span>{startTime} - {endTime}</span>
    </div>
  )
}