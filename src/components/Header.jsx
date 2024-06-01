import React from 'react'
import halfpizza from '../images/halfpizza.jpg'
import Search from './Search'

const Header = () => {
    return (
        <div className="bg-black flex text-white">
            <div className="flex flex-col justify-center items-center px-20 gap-5">
                <h1 className="text-5xl leading-[1.3] font-[myFont] uppercase">Discover Your New Favorite Dish with Our <span className="text-[color:#7dd956]">Tasty Recipes!</span></h1>
                <Search isCenter={false}/>
            </div>
            <img src={halfpizza} alt="" className="w-[300px]" />
        </div>
    )
}

export default Header
