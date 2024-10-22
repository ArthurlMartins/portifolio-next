import Image from "next/image"
import Link from "next/link"


export default function Forms() {

    return (
        <div className="bg-slate-800 flex flex-col justify-between w-80 h-410 rounded-xl">
            <div>
                <p className="text-center text-2xl font-bold text-white pt-6 pb-4">Contact</p>  
                <div>
                    <div className="flex flex-col mb-4 items-center">
                        <div>
                            <label
                            className="mb-1 block text-sm font-bold text-white "
                            htmlFor="name"
                            >
                            Full name
                            </label>
                            <input
                            id="name"
                            className="form-input w-64 p-3 rounded-xl py-2"
                            type="text"
                            placeholder="Gustavo Guanabara"
                            required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4 items-center">
                        <div>
                            <label
                            className="mb-1 block text-sm font-bold text-white "
                            htmlFor="name"
                            >
                            Email
                            </label>
                            <input
                            id="name"
                            className="form-input w-64 p-3 rounded-xl py-2"
                            type="text"
                            placeholder="gustavo@gmail.com"
                            required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <label
                            className="mb-1 block text-sm font-bold text-white "
                            htmlFor="name"
                            >
                            Observation
                            </label>
                            <textarea
                            id="name"
                            className="form-input w-64 p-3 rounded-xl py-2"
                            placeholder="Gustavo Guanabara"
                            required
                            style={{}}
                            />
                        </div>
                    </div>
                </div>          
            </div>
            <div className="w-full flex justify-center">
            <Link
            href="#"
            className="h-9 mb-6 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
            >
            See more
            </Link>   
            </div>  
            
        </div>
    )
}