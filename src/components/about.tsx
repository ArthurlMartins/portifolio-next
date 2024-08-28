"use client"

import { useState } from 'react';
import Image from 'next/image';
import Arrow from './arrow';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
        {
            image: '/images/cat1.jpeg',
            subtitle: 'Quem eu sou?',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi, quas accusantium blanditiis ipsam, nulla nihil cum corrupti incidunt necessitatibus animi eos iusto minus architecto voluptatem voluptatibus dignissimos doloribus quia!',
        },
        {
            image: '/images/cat2.jpeg',
            subtitle: 'Olá mundo!',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, natus. Officia saepe esse ipsum provident in sunt culpa aliquam nesciunt animi repellendus repellat ad nisi minus laudantium, quis molestiae ab?',
        },
        {
            image: '/images/cat3.jpg',
            subtitle: 'De onde eu vim?',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ad officia dolorum velit minima incidunt consequuntur, at iure placeat harum itaque ipsam eius iusto aliquid voluptate reprehenderit? Odio, voluptatibus saepe.',
        },
    ];

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsAnimating(false);
        }, 300); // Duração da animação
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAnimating(false);
        }, 300); // Duração da animação
    };

    return (
        <section className="">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black items-center gap-24 flex justify-center container pb-32 mb-32 pt-32 md:pb-20 md:pt-60">
                        <div className="relative md:container items-center item lg:flex-row flex-col flex rounded-lg md:h-96">
                            <div className={`lg:w-1/2 h-full transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                                <Image
                                    width={350}
                                    height={400}
                                    src={slides[currentSlide].image}
                                    className="h-full object-cover rounded-lg"
                                    alt={`Slide ${currentSlide + 1}`}
                                />
                            </div>
                            <div className='flex mt-8'>
                                <button
                                    type="button"
                                    className="md:absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group"
                                    onClick={handlePrev}
                                >
                                    <Arrow direction="left" />
                                </button>
                                <button
                                    type="button"
                                    className="md:absolute ml-40 md:ml-0 top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group"
                                    onClick={handleNext}
                                >
                                    <Arrow direction="right" />
                                </button>
                            </div>  
                            <div className={`lg:w-1/2 text-left lg:text-left lg:pt-0 pt-6 px-6 flex-col transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                                <div>
                                    <p className='text-7xl font-bold'>About Me</p>
                                    <p className='text-xl'>{slides[currentSlide].subtitle}</p>
                                </div>
                                <div className="">
                                    <p className="text-lg text-gray-700 pt-8">
                                        {slides[currentSlide].text}
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}
