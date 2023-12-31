import React from 'react';
import {menu} from "@/app/data";
import Link from "next/link";

function MenuPage(props) {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
        {/*<div className='h-[calc(50vh-6rem)] md:h-[calc(53vh-9rem)] border-4 border-rose-600 m-40 flex md:flex-row items-center'>*/}
            {
                menu.map(item =>
                    <Link href={`/menu/${item.slug}`} key={item.id}
                          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
                          style={{ backgroundImage: `url(${item.img})` }}>
                        <div className="  w-full h-full bg-cover p-8 ">
                            <h1  className="uppercase font-bold text-3xl">{item.title}</h1>
                            <p className="text-sm font-bold my-8">{item.desc}</p>
                            <button className={`hidden 2xl:block bg-${item.color} text-${item.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
                        </div>
                    </Link>
                        )
            }
        </div>
    );
}

export default MenuPage;