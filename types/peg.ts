export interface PegProps {
    color: string | '#6b7280' | null
    width?: number
    height?: number
    key: number
    isEmpty?: boolean
    dashed?: boolean
    isSelected?: boolean
    onMouseDown?: (e: React.MouseEvent) => void
    onMouseUp?: (e: React.MouseEvent) => void
    onMouseScroll?: (e: React.MouseEvent) => void
    onWheel?: (e: React.WheelEvent) => void
    onClick?: () => void
};
export interface FeedbackPegProps {
    color?: string
};
