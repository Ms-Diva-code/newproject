const Header = (props)=> {
    console.log(props)

    return(
        <div>

            Firstname: {props.object.firstname}<br/>

            Lastname: {props.object.lastname}<br/>

            Email: {props.object.email}<br/>
        </div>
    )
} 
export default Header;