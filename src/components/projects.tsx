'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import Arrow from "./arrow";
import Project from "./project";

export default function Projects() {

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [projectsPerPage, setProjectsPerPage] = useState(3); // Inicializa para desktop

    const categories = ['All', 'React', 'Html', 'Node', 'Native', 'Next'];

    const projects = [
        { id: 1, nome: 'Padaria davila', desc: 'Lorem ipsum...', image: '/images/padaria.png', apps: ['github', 'website'], category: 'React' },
        { id: 2, nome: 'Duartes Barbearia', desc: 'ipsum optio...', image: '/images/barbearia.png', apps: ['github', 'figma', 'website'], category: 'Design' },
        { id: 3, nome: 'Fredericos', desc: 'iusto rerum...', image: '/images/fredericos.png', apps: ['github', 'figma'], category: 'Node' },
        { id: 4, nome: 'Fredericos', desc: ' ipsum...', image: '/images/fredericos.png', apps: ['github', 'figma'], category: 'Node' },
        { id: 5, nome: 'Fredericos', desc: 'Lorem ipsum...', image: '/images/fredericos.png', apps: ['github', 'figma'], category: 'Native' },
    ];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const projectsLength = filteredProjects.length;
    const [currentProjects, setCurrentProjects] = useState(filteredProjects.slice(0, projectsPerPage));

    // Atualiza a quantidade de projetos exibidos com base no tamanho da tela
    useEffect(() => {
        const updateProjectsPerPage = () => {
            if (window.innerWidth < 768) {
                setProjectsPerPage(1); // Apenas 1 projeto em telas pequenas
            }
            else if (window.innerWidth < 1024) {
                setProjectsPerPage(2); // 3 projetos em telas grandes
            } else {
                setProjectsPerPage(3); // 3 projetos em telas grandes
            }
        };

        // Chama a função na montagem
        updateProjectsPerPage();

        // Adiciona um listener para mudanças de tamanho de janela
        window.addEventListener('resize', updateProjectsPerPage);

        // Limpa o listener ao desmontar o componente
        return () => window.removeEventListener('resize', updateProjectsPerPage);
    }, []);

    // Atualiza os projetos atuais sempre que a categoria selecionada ou o número de projetos por página muda
    useEffect(() => {
        setCurrentPage(0); // Reseta a página ao mudar de categoria
        setCurrentProjects(filteredProjects.slice(0, projectsPerPage));
    }, [selectedCategory, projectsPerPage]); // Adiciona `projectsPerPage` como dependência

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentProjects((prevProjects) => {
                const nextIndex = (currentPage + projectsPerPage) % projectsLength;
                const newProject = filteredProjects[nextIndex];

                return [...prevProjects.slice(1), newProject];
            });

            setCurrentPage((prev) => (prev + 1) % projectsLength);
            setIsAnimating(false);
        }, 0); // Duração da animação
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentProjects((prevProjects) => {
                const prevIndex = (currentPage - 1 + projectsLength) % projectsLength;
                const newProject = filteredProjects[prevIndex];

                return [newProject, ...prevProjects.slice(0, projectsPerPage - 1)];
            });

            setCurrentPage((prev) => (prev - 1 + projectsLength) % projectsLength);
            setIsAnimating(false);
        }, 0); // Duração da animação
    };

    return (
        <section className="">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-black items-center gap-24 flex flex-col md:flex-row justify-center container pb-12 md:pb-20 ">
                    <div>
                        <div className="mb-12">
                            <h1 className="text-7xl font-bold text-center">My Latest Projects</h1>
                            
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex gap-8">
                                    {categories.slice(0,3).map((category) => (
                                        <button 
                                            key={category} 
                                            onClick={() => setSelectedCategory(category)} 
                                            className={`${selectedCategory === category ? 'bg-[#FF873D] text-black' : 'bg-slate-800'} w-28 rounded-lg text-white text-xs h-10`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-8">
                                    {categories.slice(-3).map((category) => (
                                        <button 
                                            key={category} 
                                            onClick={() => setSelectedCategory(category)} 
                                            className={`${selectedCategory === category ? 'bg-[#FF873D] text-black' : 'bg-slate-800'} w-28 rounded-lg text-white text-xs h-10`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>  
                            </div>
                            <div className="relative flex align-center justify-between w-full mt-6">

                                {/* Botão Esquerdo */}
                                <button type="button" onClick={handlePrev}>
                                    <Arrow direction="left" />
                                </button>

                                {/* Carrossel */}
                                <div className="flex mt-24 mr-10 ml-10 gap-x-16 gap-y-8 mb-11">
                                    {currentProjects.map((project) => (
                                        <div key={project.id}>
                                           <Project 
                                               image={project.image} 
                                               nome={project.nome} 
                                               apps={project.apps} 
                                               desc={project.desc} 
                                           />
                                        </div>
                                    ))}
                                </div>

                                {/* Botão Direito */}
                                <button type="button" onClick={handleNext}>
                                    <Arrow direction="right" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-16">
                            <p className="text-2xl text-center">See the front code in <a className="text-[#FF873D]" href="/">www.github.com/ArthurLMartins</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
