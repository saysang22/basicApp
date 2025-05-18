import { useState } from "react"

export default function MyListItem({title, content}) {
  
  const [cnt, setCnt] = useState(0);

  const handlClick = () => {
    setCnt((prev) => {
      return prev + 1;
    })
  }
  
  return (
    <div className="flex w-full h-full justify-center items-start p-2 border border-slate-400">
        <div className="flex w-1/3 m-2"></div>
        <div className="flex w-2/3 h-full flex-col justify-between p-2 m-2">
            <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{content}</p>
            </div>
            <div className="flex justify-end items-center">
                <span className="cursor-pointer" onClick={handlClick}>❤️</span>
                <span className="inline-flex mx-2 font-bold">좋아요</span>
                <span className="font-bold text-xl">{cnt}</span>
            </div>
            <div></div>
        </div>
    </div>
  )
}
