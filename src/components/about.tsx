"use client"

import { useState } from 'react';
import Image from 'next/image';
import Arrow from './arrow';

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
        {
            image: '/images/me.jpeg',
            subtitle: 'Quem eu sou?',
            text: 'Olá, eu sou o Arthur, um desenvolvedor front-end apaixonado por tecnologia e inovação. Minha jornada começou com Java e desenvolvimento de jogos, e desde então, me encontrei no desenvolvimento web.',
        },
        {
            image: '/images/cat2.jpeg',
            subtitle: 'Objetivo',
            text: 'Atualmente, trabalho principalmente com React.js, que é a minha especialidade, e estou explorando o universo do Next.js para expandir minhas habilidades. Sou técnico em informática para internet certificado pelo SENAC RS, o que reforça meu comprometimento com a qualidade e o aprendizado contínuo.',
        },
        {
            image: '/images/cat3.jpg',
            subtitle: 'Motivação',
            text: 'Gosto de trabalhar em projetos desafiadores, onde posso colaborar com equipes criativas e aprender continuamente. O que mais me motiva é a sensação de completar algo em que dediquei bastante tempo e esforço, vendo o resultado final ganhar vida na tela.',
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
        <section id='about' className="pt-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black items-center gap-24 flex justify-center container">
                        <div className="relative md:container items-center item lg:flex-row flex-col flex rounded-lg md:h-96">
                            <div className={`lg:w-1/2 h-full lg:order-last transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
                                <Image
                                    width="550"
                                    height="400"
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
                                    className="md:absolute ml-80 md:ml-0 top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group"
                                    onClick={handleNext}
                                >
                                    <Arrow direction="right" />
                                </button>
                            </div> 
                            <div className={`lg:w-1/2 text-left lg:text-left lg:pt-0 pt-6 px-6 flex-col transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                                <div>
                                    <p className='text-7xl tracking-tighter font-bold'>About Me</p>
                                    <p className='text-xl'>{slides[currentSlide].subtitle}</p>
                                </div>
                                <div className="">
                                    <p className="text-base text-muted-foreground text-gray-700 pt-8">
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
