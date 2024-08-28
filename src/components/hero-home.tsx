import PageIllustration from "./page-illustration";
import Square from "./square";

export default function Hero() {

    return (
        <section className="relative">
            <PageIllustration />
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black items-center gap-24 flex flex-col md:flex-row justify-center container pb-12 pt-40 md:pb-20 md:pt-60">
                    <div>
                        <h1 className="text-7xl font-bold text-left">ARTHUR</h1>
                        <h1 className="text-7xl font-bold text-left text-[#FF873D]">MARTINS</h1>
                        <h2 className="text-lg text-left">as an</h2>
                        <h2 className="text-3xl font-light text-left">WEB DEVELOPER.</h2>
                    </div>
                    <div>
                        <Square />
                    </div>
                </div>
            </div>
        </section>
    )
}