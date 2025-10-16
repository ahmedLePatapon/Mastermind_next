"use client";

import React, { useState } from "react";
import { COULEURS, COULEURS_MAP } from "@/lib/variables";

interface ColorSelectorProps {
    onSelectColor?: (color: string) => void;
}

const COLORS = Object.values(COULEURS_MAP);

export default function ColorSelector({ onSelectColor }: ColorSelectorProps) {
    const [selectedColor, setSelectedColor] = useState<string>(COULEURS[0]);

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
