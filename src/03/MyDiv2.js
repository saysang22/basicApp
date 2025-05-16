import MyDiv3 from "./MyDiv3";

export default function MyDiv2(props) {
    return (
        <div className='flex flex-col p-5 m-10 w-3/4 h-3/4 bg-lime-700 text-white'>
            <div>
                {`${props.dn1} > ${props.dn2}`}
            </div>
            <MyDiv3 dn1 = {props.dn1} dn2 = {props.dn2} dn3 = {props.dn3}/>
        </div>
    )
}
