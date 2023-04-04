import{useState} from "react";


function ListGroup({heading}){
    let[counter,setCounter] = useState(0)
    const arr = ['First','Second','Third','Fourth','Fifth','Six'];

    return(
        <div>
            <h3>List of elements</h3>
            <h3>Counter = {counter}</h3>
            <button onClick={()=> {
                setCounter(++counter);
                console.log(counter);

                }}
                >Click me!</button>
            {arr.length === 0 &&<h6>No data Found</h6>}
            <ul class="list-group">
                {arr.map((ele,index)=>{
                    return <li key={index} className="list-group-item" onClick={(e)=> console.log(ele)}>{ele}</li>
                })}
            </ul>
        </div>
    
    );
}
export default ListGroup;