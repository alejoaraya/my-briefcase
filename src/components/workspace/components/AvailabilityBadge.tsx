export const AvailabilityBadge = ({ badgeName }: { badgeName: string }) => (
    <div className="flex items-center h-full gap-2 sm:gap-3 mt-3 sm:mt-0 mx-auto ">
        <div className="inline-grid *:[grid-area:1/1]">
            <div className="w-3 h-3 sm:w-3 sm:h-3 status status-primary animate-ping"></div>
            <div className="w-3 h-3 sm:w-3 sm:h-3 status status-primary"></div>
        </div>
        <div className="px-4 py-3  badge badge-primary min-w-52">
            <p className='text-base lato-bold'>
                {badgeName}
            </p>
        </div>
    </div>
);