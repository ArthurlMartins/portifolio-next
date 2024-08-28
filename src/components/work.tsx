import Image from "next/image"

export default function Work() {

    return (
        <section className="relative text-[#FF873D] bg-slate-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black lg:items-center gap-24 flex flex-col lg:flex-row justify-center container pb-32 pt-32 md:pb-32 md:pt-32">
                    <div className="flex flex-col gap-y-20 lg:flex-row gap-x-40">
                        <div className="flex flex-col">
                            <div className="flex lg:justify-center">
                                <Image alt="work 1" src={'/images/cat2.jpeg'} width={150} height={150} className="w-36 h-36 rounded-full" />
                            </div>
                            <p className="text-orange-400 text-left lg:text-center font-bold text-2xl mt-2.5 mb-7">Ola mundo</p>
                            <p className="text-left lg:text-left text-white lg:max-w-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam vitae nobis nulla
                            </p>
                        </div>
                        <div>
                            <div className="lg:justify-center flex justify-end">
                                <Image alt="work 2" src={'/images/cat1.jpeg'} width={150} height={150} className="w-36 h-36 rounded-full" />
                            </div>
                            <p className="text-orange-400 text-right lg:text-center font-bold text-2xl mt-2.5 mb-7">Ola mundo</p>
                            <p className="text-right lg:text-left text-white lg:max-w-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam vitae nobis nulla
                            </p>
                        </div>
                        <div>
                            <div className="flex lg:justify-center">
                                <Image alt="work 3" src={'/images/cat3.jpg'} width={150} height={150} className="w-36 h-36 rounded-full" />
                            </div>
                            <p className="text-orange-400 text-left lg:text-center font-bold text-2xl mt-2.5 mb-7">Ola mundo</p>
                            <p className="text-left lg:text-left text-white lg:max-w-60">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam vitae nobis nulla
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}