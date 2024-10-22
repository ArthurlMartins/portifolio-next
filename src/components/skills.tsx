import Image from "next/image"
import Badge from "./badge"

export default function Skills() {

    return (
        <section id="skills" className="w-full mt-32 bg-slate-800 py-12 md:py-24 lg:py-32">
          <div className="container text-white px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground_white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of skills that I've developed through my experience as a software developer.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Front-end</h3>
                  <p className="text-muted-foreground_white">
                    Proficient in HTML, CSS, JavaScript, and some front-end frameworks like React.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge text={"HTML"}/>
                    <Badge text={"CSS"}/>
                    <Badge text={"JavaScript"}/>
                    <Badge text={"React"}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Back-end</h3>
                  <p className="text-muted-foreground_white">
                    Experienced in building scalable and secure back-end systems using Node.js, Python, and various
                    databases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge text={"Node.js"}/>
                    <Badge text={"Express"}/>
                    <Badge text={"MongoDB"}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Mobile</h3>
                  <p className="text-muted-foreground_white">
                    Experienced in building mobile apps for Android using React Native.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge text="React Native"/>
                    <Badge text="Android"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}