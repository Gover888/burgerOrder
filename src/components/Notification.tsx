"use client"
import React, {useState} from 'react';

function Notification(props) {
    const [noteShow,setNoteShow]=useState(true)
    return (
        <>
            {noteShow &&
            <div className='h-12
        bg-red-500
        text-white
        px-4 flex items-center
        justify-center text-center text-sm md:text-base cursor-pointer'
        >
            Free delivery for all orders over $50. Order your food now!
                <button onClick={()=>{setNoteShow(false)}}>X</button>
        </div>

            }
        </>

    );
}

export default Notification;