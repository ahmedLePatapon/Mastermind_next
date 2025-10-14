"use client";

import React, { useState } from "react";

interface ColorSelectorProps {
    onSelectColor?: (color: string) => void;
}

const COLORS = [
    "rgb(255, 0, 0)",      // rouge
    "rgb(0, 0, 255)",      // bleu
    "rgb(0, 255, 0)",      // vert
    "rgb(255, 255, 0)",    // jaune
    "rgb(128, 0, 128)",    // violet
    "rgb(255, 165, 0)",    // orange
];

export default function ColorSelector({ onSelectColor }: ColorSelectorProps) {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        if (onSelectColor) onSelectColor(color);
    };

    return (
        <div className="bg-[#1a1a3a] p-6 rounded-xl">
            <h3 className="text-white text-xl font-bold mb-4 text-center">
                Select Color
            </h3>
            <div className="flex flex-wrap gap-5 justify-center p-4">
                {COLORS.map((color) => (
                    <label
                        key={color}
                        className={`size-12 rounded-full border border-[#343465] ring-[color-mix(in_srgb,#ffffff_50%,_transparent)]  cursor-pointer transition-all ${selectedColor === color ? "border-[3px] border-[#111122] ring-3" : ""} `}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                    >
                        <input
                            type="radio"
                            name="color-select"
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                            className="invisible"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}
