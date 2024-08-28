import Image from "next/image"

export default function Forms() {

    return (
        <div className="bg-orange-500 shadow-slate-800 shadow-square mb-32 flex flex-col justify-between w-80 h-410 rounded-2xl">
            <div>
                <p className="text-center text-2xl font-bold text-white pt-4 pb-4">Contact</p>  
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
                            className="form-input w-64 p-2 rounded-xl py-2"
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
                            className="form-input w-64 p-2 rounded-xl py-2"
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
                            className="form-input w-64 p-2 rounded-xl py-2"
                            placeholder="Gustavo Guanabara"
                            required
                            style={{}}
                            />
                        </div>
                    </div>
                </div>          
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-white rounded-full w-32 h-12 mb-4">Send</button>    
            </div>  
            
        </div>
    )
}