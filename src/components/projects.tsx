'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import PageIllustration from "./page-illustration";
import Arrow from "./arrow";
import Link from "next/link";

export default function Projects() {

    return (
        <section id="projects" className="mx-auto max-w-6xl">
          <div className="pt-32 px-4 md:pt-64 lg:pt-48">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-7xl font-bold tracking-tighter sm:text-7xl">Featured Projects</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects that showcase my skills and expertise.
                </p>
              </div>
            </div>

            <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">

              <div className="flex flex-col justify-center space-y-4">
                <img
                  src="/images/padaria.png"
                  width="550"
                  height="310"
                  alt="Project 1"
                  className="aspect-video mt-4 overflow-hidden rounded-xl object-cover object-top sm:w-full lg:order-last"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Padaria</h3>
                  <p className="text-muted-foreground">
                    A web application that helps users manage their tasks and to-do lists. Built with React, Node.js,
                    and MongoDB.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <img
                  src="/images/barbearia.png"
                  width="550"
                  height="310"
                  alt="Project 2"
                  className="mx-auto mt-4 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                    A mobile app that helps users track their fitness goals and activities. Built with React Native and
                    Firebase.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <img
                  src="/images/padaria.png"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto mt-4 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A web-based e-commerce platform for selling handmade products. Built with Next.js, Prisma, and
                    PostgreSQL.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <img
                  src="/images/padaria.png"
                  width="550"
                  height="310"
                  alt="Project 3"
                  className="mx-auto mt-4 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A web-based e-commerce platform for selling handmade products. Built with Next.js, Prisma, and
                    PostgreSQL.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
