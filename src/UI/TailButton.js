import React from 'react'

export default function TailButton({caption, bcolor, handleClick}) {
  
    const colorB = {
        'blue' : 'bg-blue-600',
        'orange' : 'bg-orange-600'
    }

    const colorHover = {
        'blue' : 'hover:bg-blue-800',
        'orange' : 'hover:bg-orange-800'
    }
  
    return (
    <button onClick={handleClick} className={`inline-flex px-5 py-3 rounded-md mx-2 justify-center items-center text-white font-bold ${colorB[bcolor]} ${colorHover[bcolor]}`}>
        {caption}
    </button>
  )
}
