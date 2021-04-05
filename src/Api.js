// import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";


const Child = (props) =>{

    useEffect( () => {

        //api calling

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => {

            saveUserData(data)

         
        })
        .catch(err=> console.log(err));

    } , [])

    const [object , setFormData ] = useState({});
    const [ allUserData , saveUserData ] = useState([]) 

    const saveData = () =>{
        console.log(object)
    }

    return(
        <>
            {/* <Header object={object} /> */}
            <table>
                <th>
                    <td>Name</td>
                </th>
                <tbody>
                    {
                        allUserData.map( (value,index)=>{

                            return(
                                <tr> {value.name} </tr>
                            )

                        } )



                    }


                </tbody>
            </table>

           <h2>Hey Diva, You There.</h2>
            <form onSubmit={ (e) => e.preventDefault() }>
                
                <input type="text" value={object.firstname} onChange= { (e) => setFormData({ ...object,  firstname : e.target.value }) }  />

                <input type="text" value={object.lastname} onChange= { (e) => setFormData({ ...object,  lastname : e.target.value }) }  />
                
                <input type="text" value={object.email} onChange= { (e) => setFormData({ ...object,  email : e.target.value }) }  />

                
                <button onClick={ () => saveData() }>submit</button>
            </form>
           
        </>
    )
}

export default Child;
