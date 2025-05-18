import React, { useState } from 'react'
import TailButton from '../UI/TailButton'
import Ball from './Ball';

export default function Lotto() {

    const [tags, setTags] = useState()

    const handleOk = () => {
 
        let arr = [];

        while(arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
    
            if(!arr.includes(n)) arr.push(n);
        }
    
        let bonus = arr.splice(-1);
        arr.sort((a, b) => (a-b));
    
        console.log(arr, bonus);
    
        let tm = arr.concat(bonus);
        tm = tm.map((items, idx) => {
            return <Ball n={items} key={idx}/>
        });
    
        setTags(tm);
    }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div>
            {tags}
        </div>
        <div>
            <TailButton caption='로또번호생성' bcolor={'orange'} handleClick={handleOk}/>
        </div>
    </div>
  )
}
