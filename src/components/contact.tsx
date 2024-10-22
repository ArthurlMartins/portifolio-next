import Image from "next/image"
import Forms from "./forms"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import Link from "next/link";

export default function Contact() {

    return (
        <section id="contact" className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-32 pt-32 md:pb-20 md:pt-60">
                <div className="text-black items-center flex flex-col md:flex-row justify-center container">
                    <div className="flex flex-col gap-8 md:gap-24 md:flex-row items-center">
                        <div>
                            <p className="text-5xl text-center leading-snug tracking-tighter font-bold">If you liked what you saw, you can <span className="text-[#FF873D]">contact</span> me &#128513;</p>
                            <div className="flex flex-row mt-12 gap-x-8 mb-16 justify-center">
                                <Link href="#" className="text-3xl" prefetch={false}>
                                    <span><IoLogoGithub /></span>
                                </Link> 
                                <Link href="#" className="text-3xl" prefetch={false}>
                                    <span><IoLogoLinkedin /></span>
                                </Link> 
                                <Link href="#" className="text-3xl" prefetch={false}>
                                    <span><IoLogoInstagram /></span>
                                </Link> 
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