
import React ,{useState, useEffect} from 'react';
 
 const Homepage = (props) => {

    useEffect( () =>{

    }, []);
    const [object , setFormData ] = useState({});

    const saveData = () =>{

        props.history.push({

            pathname : "/About",

            data : object
 
        });
    }
    return(

        
        <div>
        <h1>Homepage</h1>
         <img src ="https://media.istockphoto.com/photos/green-leaf-with-dew-on-dark-nature-background-picture-id1050634172?k=6&m=1050634172&s=612x612&w=0&h=C6CWho9b4RDhCqvaivYOLV2LK6FzygYpAyLPBlF1i2c=" alt="pro" />
        
        </div>



    )
      
 ;     
}
    

export default Homepage;