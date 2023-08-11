export const Button = ({val, classname, fn})=>{
    const clicked = ()=>{
        fn(val);
        console.log('Clicked', val);
    }
    return(<button onClick = {clicked} className = {classname}>{val}</button>)
}