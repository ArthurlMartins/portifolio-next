import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export default function Arrow({ direction }: any) {

    return (
        <div>
            <span className="inline-flex items-center justify-center w-10 h-10 text-2xl font-black rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                {direction === 'left' ? <GoArrowLeft /> : <GoArrowRight />}
            <span className="sr-only">{direction === 'left' ? 'Previous' : 'Next'}</span>
            </span>
        </div>
    )
}