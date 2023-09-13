"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/CartIcon";


const links = [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "Contact", url: "/"},
];

function Menu(props) {
    const [menuShow, setMenuShow] = useState(true)
    const user =false
    return (
        <div>
            {menuShow ? <Image src="/close.png"
                               className='md:hidden'
                               alt=""
                               width={20}
                               height={20}
                               onClick={() => setMenuShow(false)}/>
                : <Image src="/open.png"
                         className='md:hidden'
                         alt=""
                         width={20}
                         height={20} onClick={() => {
                    setMenuShow(true)
                }}/>}
            {menuShow &&
                <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
                    {links.map(item => <Link href={item.url} key={item.id} onClick={()=>{setMenuShow(false)}}>{item.title}</Link>)}
                    <Link
                        href={user ? "/orders" : "login"}
                        onClick={() => setMenuShow(false)}
                    >
                        {user ? "Orders" : "Login"}
                    </Link>
                    <Link href="/cart" onClick={() => setMenuShow(false)}>
                        <CartIcon />
                    </Link>
                </div>}
        </div>
    );
}

export default Menu;