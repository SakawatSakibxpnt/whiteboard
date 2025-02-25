"use client"
import data from '@/data/dataAccord.js'
import { useState } from 'react'

const Accordion = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }

    
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
        <div>
             {data.map((item,i)=>(
                <div key={item.id} 
                    className='bg-gray-200 p-4 m-2 cursor-pointer w-[400px]'
                    onClick={()=>toggle(i)}
                >
                    <h1 className='mb-2 text-xl font-bold'>{item.title}</h1>
                    <p className={`${selected == i ? "":"hidden"}`}>{item.content}</p>
                </div>
             ))}
        </div>
    </div>
  )
}

export default Accordion