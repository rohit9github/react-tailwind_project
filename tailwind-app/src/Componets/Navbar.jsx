import React from 'react'
import img from "../Assests/img/Flipkart-Logo.svg"


export default function Navbar() {
    return (
        <div className='bg-white'>
            <header className='py-4'>
                <div style={{ width: "1320px" }} className='mx-auto'>
                    <div className='flex justify-between items-center'>

                        <a href="javascript:void(0)">
                            <img src={img} alt="logo" />
                        </a>
                        <div className='w-1/2'>
                            <input type="text" placeholder='Search for Products, Brands and More' className='py-3 ps-8 w-full rounded bg-blue-50' />
                        </div>

                        <ul className='flex'>

                            <li className='ms-6'>
                                <a href="javascript:void(0)" className='text-lg mr-3'><i class="fa-regular fa-user mr-3 "></i>Login<i class="fa-solid fa-chevron-down ms-2 text-sm"></i></a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)" className='text-lg mr-3'><i class="fa-solid fa-cart-shopping mr-3"></i>Cart</a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)" className='text-lg mr-3'><i class="fa-solid fa-store mr-3"></i>Become a Seller</a>
                            </li>
                            <li className='ms-6'>
                                <a href="javascript:void(0)" className='text-lg ms-4'><i class="fa-solid fa-ellipsis-vertical"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}
