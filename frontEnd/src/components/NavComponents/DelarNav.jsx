import Navbar from "../Navbar"



const DelarNav = () => {
    const listItems = [
        {
            linkName:"DashBoard",
            link:"/delar/"
        },
        {
            linkName:"Kyc",
            link:"/delar/kyc"
        },
        {
            linkName:"Aadhar",
            link:"/delar/aadhar"
        },
        {
            linkName:"Sign Up",
            link:"/delar/delarsign"
        },
    ]

    return(
        <>
            <Navbar listItems={listItems}/>
        </>
    )
}

export default  DelarNav