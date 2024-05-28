import React from 'react'
import img from "../Assests/img/fkheaderlogo_exploreplus-44005d.svg"
import { LuUserCircle2 } from "react-icons/lu";


export default function Navbar() {
    return (
        <div>
            <header className='py-4'>
                <div style={{ width: "1320px" }} className='mx-auto'>
                    <div className='flex justify-between items-center'>

                        <a href="javascript:void(0)">
                            <img src={img} alt="logo" />
                        </a>
                        <div className='w-3/5'>
                            <input type="text" placeholder='Search for Products, Brands and More' className='py-3 ps-8 w-full rounded bg-blue-50' />
                        </div>

                        <ul className='flex'>

                            <li className='ms-6'>
                                <a href="javascript:void(0)"><LuUserCircle2 />Login</a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)">Cart</a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)">Become a Seller</a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)">|</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
