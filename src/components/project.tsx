import Image from "next/image"

export default function Project({ nome, image, apps, desc }: any) {

    
    return(
        <div className="shadow-sm shadow-gray bg-gradient-to-t from-slate-800 to-slate-700 flex flex-col bg-[#FF873D] p-2 rounded-2xl w-60 h-72">
            <div className="p-5 flex h-full flex-col justify-between">
                <div className="text-white max-w-32">
                    <p className="text-5xl font-bold">{nome}</p>
                    {/* <p className="text-sm mt-2">{desc}</p> */}
                </div>
                <div className="flex flex-row justify-left">
                {apps.includes('github') ? 
                    <button className="rounded-full mr-1 w-6 h-6 bg-white">A</button>
                : ''}
                {apps.includes('figma') ? 
                    <button className="rounded-full mr-1 w-6 h-6 bg-white">B</button>
                : ''}
                {apps.includes('website') ? 
                    <button className="rounded-full mr-1 w-6 h-6 bg-white">C</button>
                : ''}
                </div>
            </div>
        </div>
    )
}