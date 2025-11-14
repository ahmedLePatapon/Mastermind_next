import React from 'react'
import type { PegProps } from '@/types'


export default function Peg({ color, isEmpty = false, dashed = false, isSelected, key, width = 10, height = 10 }: PegProps) {
    if (isEmpty) return <div className={`w-${width} h-${height} rounded-full bg-gray-400`}></div>;
    if (dashed) return <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-500"></div>;
    // if (isSelected) {
    //     return (
    //         <div key={key} className={`h-10 w-10 rounded-full border-4 border-yellow-400 shadow-lg`} />
    //     )
    // }

    const bg = color === '#6b7280' ? 'bg-gray-400' : `${color}`
    return (
        <div key={key} className={`h-10 w-10 rounded-full ${bg} shadow-lg ${isSelected ? "border-[3px] border-[#ff0000] ring-3" : ""}`} />
    )
}
