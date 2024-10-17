import { useEffect, useState } from "react";
import Use from "./show";


export default function Team(){
    const [man,mancount] = useState([]);
    
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res)=> res.json())
            .then((data)=>mancount(data))
    })

return (
    <div>user name {man.length}
    
{
man.map(ma => <Use calldata={ma}></Use>)

}
    
    </div>
  
)

}