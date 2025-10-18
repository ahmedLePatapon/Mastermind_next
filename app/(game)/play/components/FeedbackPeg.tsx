import { FeedbackPegProps } from "@/types";

export default function FeedbackPeg({ color = "#6b7280" }: FeedbackPegProps) {
    return <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>;
}