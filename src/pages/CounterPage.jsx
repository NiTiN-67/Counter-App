import { useState } from "react";
import { Button } from "../components/Button"
import { Message } from "../components/Message"
export const CounterPage = ()=>{
    //Hook (state)
    const [count, setCount] = useState(0);
    // let count = 0;
    const updateCount = (val)=>{
        if(val === '+'){
            setCount(count+1);
        }
        else{
            setCount(count-1);
        }
        console.log('Count is ', count);
    }
    return(<div className="container">
        <Message classname = 'alert alert-danger' msg = "Counter App"/>
        <Message value = {count} classname = 'alert alert-success' msg = "Counter Value is"/>
        <Button fn = {updateCount} val = '+' classname = 'btn btn-success me-2'/>
        <Message msg = {count}/>
        <Button fn = {updateCount} val = '-' classname = 'btn btn-danger me-2'/>
    </div>)
}
