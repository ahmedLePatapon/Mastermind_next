import React from "react";

type ColorSelectorProps = { colors: string[]; selected: string; onSelect: (color: string) => void };

export default function ColorSelector({ colors, selected, onSelect }: ColorSelectorProps) {
    return (
        <div className="bg-[#1a1a3a] p-6 rounded-xl">
            <h3 className="text-white text-xl font-bold mb-4 text-center">Select Color</h3>
            <div className="flex flex-wrap gap-5 justify-center p-4">
                {colors.map((color) => (
                    <label
                        key={color}
                        className={`size-12 rounded-full border border-[#343465] cursor-pointer ${selected === color ? "border-3 border-[#111122] ring" : ""
                            }`}
                        style={{ backgroundColor: color }}
                    >
                        <input
                            className="invisible"
                            type="radio"
                            name="color-select"
                            checked={selected === color}
                            onChange={() => onSelect(color)}
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}
