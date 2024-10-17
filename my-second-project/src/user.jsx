import { useEffect, useState } from "react"

export default function (){
const [user,setuser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
         .then((res)=> res.json())
            .then((data) => setuser(data))
    })

    return(
        <div>total user {user.length}</div>
    )
}