import '../navbar/navbar.css';

function Navbar(){
    return <div className="navbar" >
        <div className='navItem'><img src="logo.png"></img><span>Group-7 Ltd.</span></div>
        <div className='navItem'><img src="user.png"></img><span>Mr. Temp user</span></div>
    </div>
}

export default Navbar;