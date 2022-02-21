import React from 'react'

import Sidebar from './Sidebar'

const Home = () => {
    return (
        <div className="grid grid-cols-9 grid-rows-1">
            <div>
                <Sidebar />
            </div>
            <div className="col-span-8 grid grid-cols-2 grid-rows-1 bg-red-200">
                <div className="bg-neutral-900 pl-16 pt-28">
                    <div className='flex'>
                        <div className='H'><span className="text-white text-7xl font-bold tracking-tighter">H</span></div>
                        <div className='i'><span className="text-white text-7xl font-bold tracking-tighter">i</span></div>
                        <div className='c'><span className="text-white text-7xl font-bold tracking-tighter">,</span></div>
                    </div>
                    <div className='flex'>
                        <div className='I'><span className="text-white text-7xl font-bold tracking-tighter">I</span></div>
                        <div className='apos'><span className="text-white text-7xl font-bold tracking-tighter">'</span></div>
                        <div className='m'><span className="text-white text-7xl font-bold tracking-tighter">m</span></div>
                        <div className='A'><span className="text-white text-7xl font-bold tracking-tighter pl-5">A</span></div>
                        <div className='r'><span className="text-white text-7xl font-bold tracking-tighter">r</span></div>
                        <div className='g'><span className="text-white text-7xl font-bold tracking-tighter">g</span></div>
                        <div className='i_1'><span className="text-white text-7xl font-bold tracking-tighter">i</span></div>
                        <div className='e'><span className="text-white text-7xl font-bold tracking-tighter">e</span></div>
                        
                    </div>

                    <div className='flex'>
                        <div className='w'><span className="text-white text-7xl font-bold tracking-tighter">w</span></div>
                        <div className='e_1'><span className="text-white text-7xl font-bold tracking-tighter">e</span></div>
                        <div className='b'><span className="text-white text-7xl font-bold tracking-tighter">b</span></div>
                        <div className='d'><span className="text-white text-7xl font-bold tracking-tighter pl-5">d</span></div>
                        <div className='e_2'><span className="text-white text-7xl font-bold tracking-tighter">e</span></div>
                        <div className='v'><span className="text-white text-7xl font-bold tracking-tighter">v</span></div>
                        <div className='e_3'><span className="text-white text-7xl font-bold tracking-tighter">e</span></div>
                        <div className='l'><span className="text-white text-7xl font-bold tracking-tighter">l</span></div>
                        <div className='o'><span className="text-white text-7xl font-bold tracking-tighter">o</span></div>
                        <div className='p'><span className="text-white text-7xl font-bold tracking-tighter">p</span></div>
                        <div className='e_4'><span className="text-white text-7xl font-bold tracking-tighter">e</span></div>
                        <div className='r_1'><span className="text-white text-7xl font-bold tracking-tighter">r</span></div>
                        
                    </div>
                    
                    <div className="flex gap-2 text-white pt-6">
                        <p>Front End Developer</p>
                            <span>/</span>
                        <p>Back End Developer</p>
                    </div> <br />
                    <div>
                        <a href="#_" class="relative px-10 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
                            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Contact me!</span>
                        </a>
                    </div>
                    
                    
                </div>
                <div className="bg-neutral-900 flex justify-center items-center">
                    <p className="text-white">Hello There!</p>
                </div>
            </div>
        </div>
    )
}

export default Home