import Headerlist from "./Headerlist";

function Header(){

return (
    <>
       <p>this is Header component</p>
       <Headerlist name="kishore" age={24} islogin={false}></Headerlist>

   </>
)

}

export default Header;