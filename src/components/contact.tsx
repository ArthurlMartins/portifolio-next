import Image from "next/image"
import Forms from "./forms"

export default function Contact() {

    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black items-center gap-24 flex flex-col md:flex-row justify-center container pb-12 pt-40 md:pb-20 md:pt-60">
                    <div className="flex flex-col md:flex-row items-center">
                        <div>
                            <p className="text-5xl text-center md:mr-10 leading-snug font-bold">If you like what you saw, you can <span className="text-[#FF873D]">contact</span> me :)</p>
                            <div className="flex flex-row md:mr-10 mt-16 gap-x-8 mb-16 justify-center">
                                <div className="bg-[#FF873D] w-12 rounded-full h-12"></div>
                                <div className="bg-[#FF873D] w-12 rounded-full h-12"></div>
                                <div className="bg-[#FF873D] w-12 rounded-full h-12"></div>
                            </div>
                        </div>
                        <div>
                            <Forms />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}