import React from 'react'

interface PegProps {
    color: string | '#6b7280'
    width?: number
    height?: number
    key: number
    isEmpty?: boolean
    dashed?: boolean
}

export default function Peg({ color, isEmpty = false, dashed = false, key, width = 10, height = 10 }: PegProps) {
    if (isEmpty) return <div className={`w-${width} h-${height} rounded-full bg-gray-400`}></div>;
    if (dashed) return <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-500"></div>;
    const bg = color === '#6b7280' ? 'bg-gray-400' : `${color}`
    return (
        <div key={key} className={`h-10 w-10 rounded-full ${bg} shadow-lg`} />
    )
}
