import { useState } from "react"

export default function Count(){
   
    const [count,setcount] = useState(0);
   
     const handleAdd = ()=>{
        const newnumber = count + 1;
        setcount(newnumber)
     }

     const handleremove = ()=>{
        const newnumber = count - 1;
        setcount(newnumber)
     }

    return (
        
<div style={{border:'1px solid yellow'}}>
    <h2>count{count}</h2>
    <button onClick={handleAdd}>crease + </button>
    <button onClick={handleremove}>decrease - </button>
</div>        
    

    )
}