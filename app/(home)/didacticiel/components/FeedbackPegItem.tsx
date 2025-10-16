// components/FeedbackPegItem.tsx
interface FeedbackPegItemProps {
    icon: 'white' | 'empty';
    title: string;
    description: string;
}

export default function FeedbackPegItem({ icon, title, description }: FeedbackPegItemProps) {
    return (
        <div className="flex items-start gap-3">
            <div
                className={`w-5 h-5 rounded-full mt-1 flex-shrink-0 ${icon === 'white' ? 'bg-white' : 'bg-zinc-600 border-2 border-white'
                    }`}
            />
            <div>
                <p className="text-white font-semibold">{title}</p>
                <p className="text-white/80 text-sm">{description}</p>
            </div>
        </div>
    );
}