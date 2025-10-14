import Peg from "./Peg"

const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-white',
]

export default function PegsDisplay() {
    return (
        <div className="my-8 flex justify-center gap-4">
            {colors.map((bg, i) => (
                <Peg key={i} color={bg} />
            ))}
            {/* <div key={i} className={`h-10 w-10 rounded-full ${bg} shadow-lg`} />
            ))} */}
        </div>
    )
}
