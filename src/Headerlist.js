function Headerlist(props){
    return(
        <>
           {console.log(props)}
           <p>user name:{props.name}</p>
           <p>Age:{props.age}</p>
           <p>login:{props.islogin.status}</p>
        </>
    )
}

export default Headerlist;