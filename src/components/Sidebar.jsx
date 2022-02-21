import React from 'react'

import {NavLink} from 'react-router-dom'
import Rg from '../img/Rg.svg'
import {Facebook, Gmail, Git} from './Svg'

import { motion } from 'framer-motion'


const Sidebar = () => {
    return (
        // <div className='app-main grid grid-rows-1 grid-cols-9'>
            <div className="sidenav min-h-screen flex flex-row bg-gray-100">
                <div className="flex flex-col h-screen w-36 bg-white overflow-hidden fixed">
                    <div className="flex flex-col items-center justify-center h-40 shadow-md p-1">
                        <img src={Rg} alt="React Logo" className='initial w-14'/><br />
                        <p className="text-xs font-bold">Web developer</p>
                        
                    </div>
                    <ul className="flex flex-col py-4 bg-black h-full">
                        <br /><br />
                        <li>
                            <NavLink to="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white">
                            
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i className="bx bx-home"></i></span>
                                <motion.span
                                    initial={{ opacity:0, marginLeft: "-15px" }}
                                    animate={{ opacity:1, marginLeft: '0px' }}
                                    transition={{ type: "spring", duration:1, delay:0.5 }}
                                className="text-sm font-medium">Home</motion.span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i className="bx bx-music"></i></span>
                                <motion.span 
                                    initial={{ opacity:0, marginLeft: "-15px" }}
                                    animate={{ opacity:1, marginLeft: '0px' }}
                                    transition={{ type: "spring", duration:1, delay:0.6 }}
                                className="text-sm font-medium">About</motion.span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i className="bx bx-drink"></i></span>
                                <motion.span 
                                    initial={{ opacity:0, marginLeft: "-15px" }}
                                    animate={{ opacity:1, marginLeft: '0px' }}
                                    transition={{ type: "spring", duration:1, delay:0.7 }}
                                className="text-sm font-medium">Project</motion.span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/comment" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-white">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white"><i className="bx bx-shopping-bag"></i></span>
                                <motion.span 
                                    initial={{ opacity:0, marginLeft: "-15px" }}
                                    animate={{ opacity:1, marginLeft: '0px' }}
                                    transition={{ type: "spring", duration:1, delay:0.8 }}
                                className="text-sm font-medium">Comment</motion.span>
                            </NavLink>
                        </li>
                        <br /><br /><br />
                        <motion.li 
                            initial={{ opacity:0, marginTop: "-15px" }}
                            animate={{ opacity:1, marginTop: "0px" }}
                            transition={{ type: "spring", duration:1, delay:0.9 }}

                            className="flex gap-2" style={{ marginLeft: '1.5rem' }}>
                            <NavLink
                            target="_blank" to={{ pathname: "https://www.facebook.com/aia.argie/" }}>
                                <Facebook className="icon-1 cursor-pointer" width={25} height={25} />
                            </NavLink>

                            <NavLink target="_blank" to={{ pathname: "mailto:barcenaargie@gmail.com" }}>
                                <Gmail className="icon-1 cursor-pointer" width={25} height={25} />
                            </NavLink>     

                            <NavLink target="_blank" to={{ pathname: "https://github.com/Zhi0105" }}>
                                <Git className="icon-1 cursor-pointer" width={25} height={25} />
                            </NavLink>     
                            
                        </motion.li>
                        
                    </ul>
                </div>
            </div>
    // </div>  
    )
}

export default Sidebar