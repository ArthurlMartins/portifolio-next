'use client'

import PageIllustration from "./page-illustration";
import Link from "next/link";
import Typewriter from 'typewriter-effect';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export default function Hero() {

    
    return (
        <section id="hero" className="relative bg-slate-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-white items-center flex flex-col container pb-32 pt-60 md:pb-32 md:pt-60">
                    <div className="gap-8 flex flex-col">
                        <div className="">
                            <h1 className="text-7xl tracking-tighter font-bold text-left">ARTHUR</h1>
                            <h1 className="text-7xl tracking-tighter font-bold text-left text-[#FF873D]">MARTINS</h1>
                            <h2 className="text-lg text-left">as a</h2>
                            <h2 className="text-3xl font-light text-left">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('WEB DEVELOPER.')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('DESIGNER.')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString('PROGRAMMER.')
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start()
                                }}
                                options={{
                                    loop: true,
                                    delay: 50
                                }}
                                />
                            </h2>
                        </div>
                        <div className="flex gap-3">
                            <Link
                            href=""
                            className="h-9 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                            >
                            See more
                            </Link>
                            <Link
                            href="https://github.com/ArthurlMartins"
                            className="text-black inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                            >
                            GitHub
                            </Link> 
                        </div>
                        <div className="flex gap-3">
                            <Link href="https://github.com/ArthurlMartins" className="text-3xl" prefetch={false}>
                            <span><IoLogoGithub /></span>
                            </Link> 
                            <Link href="https://www.linkedin.com/in/arthurl-martins/" className="text-3xl" prefetch={false}>
                            <span><IoLogoLinkedin /></span>
                            </Link> 
                            <Link href="https://www.instagram.com/arthurlmartinss/" className="text-3xl" prefetch={false}>
                            <span><IoLogoInstagram /></span>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}