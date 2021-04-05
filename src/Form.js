import React , {useState} from "react";
import Bar from './Bar';
import {Link} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';

const Form = () => {
    const[object, setFormData] = useState({})

    const saveData = () =>{console.log(object)

        // function handleClick() {
        //     history.push("/Homepage");
        // }
} 

    return(
        <> 
        <Bar object={object}/>
            <h2>Fill your details over here</h2>

            <form onSubmit={ (e) =>e.preventDefault()}>

                <input type = "text" value={object.firstname} placeholder = "Name" onChange= {(e) =>setFormData({...object, firstname : e.target.value}) } ></input><br/>

                <input type = "text" value={object.lastname}  placeholder = "Lastname" onChange= {(e) =>setFormData({...object, lastname : e.target.value}) } ></input><br/>

                <input type = "text" value={object.email}  placeholder = "Email" onChange= {(e) =>setFormData({...object, email : e.target.value}) } ></input><br/>

                <button onClick= { () =>saveData() }>SubmitDetails</button>
                    
                    
                {/* <button type = "button" onClick={handleClick}>Push</button> */}

            </form>
            
        </>
    )
}

export default Form;