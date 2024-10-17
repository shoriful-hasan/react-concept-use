
export default function Use({calldata}){
    
    const {name,email} = calldata;

console.log(name,email);

    
    return(
       <div style={{border:'1px solid yellow'}}>
        <h2>name {name}</h2>
        <h2>email {email}</h2>
       </div>
    )
}