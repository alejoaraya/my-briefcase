export const AvailabilityBadge = ({ compact = false }) => (
    <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-0">
        <div className="inline-grid *:[grid-area:1/1]">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 status status-primary animate-ping"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 status status-primary"></div>
        </div>
        <p
            className={`px-4 ${compact ? "py-2 text-xs sm:text-sm md:text-base" : "py-3 text-xs sm:text-sm"} font-bold badge badge-primary`}
        >
            Disponible para trabajar
        </p>
    </div>
);