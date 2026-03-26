import Navbar from "../Navbar"



const AdminNav = () => {
const listItems = [
        {
            linkName:"DashBoard",
            link:"/admin/"
        },
        {
            linkName:"User List",
            link:"/admin/user"
        },
        {
            linkName:"Orders",
            link:"/admin/orders"
        },
        {
            linkName:"Cart",
            link:"/admin/cart"
        },
        {
            linkName:"Sign Up",
            link:"/admin/adminsign"
        },
    ]

    return(
        <>
            <Navbar listItems= {listItems}/>
        </>
    )
}

export default  AdminNav