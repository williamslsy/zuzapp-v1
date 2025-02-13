import UserFacingTrack from "./UserFacingTrack";

export default function TrackScheduleSection() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="p-2.5 font-bold">Monday, October 30</h2>
      <div className="flex flex-col gap-2.5 ">
        {
          <UserFacingTrack onClick={function (): void { throw new Error("Function not implemented."); }} />
        }
      </div>
    </div>
  )
}