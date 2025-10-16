export type FilterType = "All-Time" | "This Week" | "Today";

export type LeaderboardFilterProps = {
    activeFilter: string;
    onChange: (filter: FilterType) => void;
};
