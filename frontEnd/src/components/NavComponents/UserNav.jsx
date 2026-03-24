import Navbar from "../Navbar"



const UserNav = () => {
    const listItems = [
        {
            linkName:"Home",
            link:"/"
        },
        {
            linkName:"About",
            link:"/about"
        },
        {
            linkName:"Contact",
            link:"/contact"
        },
        {
            linkName:"Sign Up",
            link:"/signup"
        },
    ]

    return(
        <>
            <Navbar listItems = {listItems}/>
        </>
    )
}

export default  UserNav