import { BsFillTicketFill } from 'react-icons/bs';
import { HiArrowRight, HiCalendar } from 'react-icons/hi';
import Button from '../ui/buttons/Button';
import router from 'next/router';

interface IProps {
  trackTitle: string;
}

export default function TrackItem(props: IProps) {
  const { trackTitle } = props;

  const handleEnterTrack = async () => {
    try {
      router.push({
        pathname: `/dashboard/events/space/tracks/`,
        // query: { eventId: eventId },
      });
    } catch (error) {
      console.error('Error fetching space details', error);
    }
  };

  return (
    <div className="flex py-3 px-3.5 items-center self-stretch border rounded-2xl border-white/20 bg-componentPrimary hover:cursor-pointer hover:bg-trackItemHover duration-200">
      <div className="flex items-start gap-[10px]">
        <div className="w-[130px] h-[100px] rounded-[10px] border border-[#FFFFFF10] bg-[#222]"></div>
        <div className="flex flex-col w-[382px] justify-center items-start gap-[14px] self-stretch">
          <span className="text-lg font-semibold leading-[1.2]">{trackTitle}</span>
          <div className="flex flex-col justify-center items-start gap-[14px] self-stretch">
            <span className="rounded-full flex px-4 py-1 items-center gap-1 opacity-60 bg-[#FFFFFF10]">
              <HiCalendar /> October 8 - October 23
            </span>
            <span className="flex items-center gap-1 self-stretch opacity-60">
              <BsFillTicketFill /> Schedules 3
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full">
          <Button variant="dark" className="bg-white/20 text-white/70 rounded-full" leftIcon={HiArrowRight}>
            Update Track
          </Button>
        </div>
      </div>
    </div>
  );
}
