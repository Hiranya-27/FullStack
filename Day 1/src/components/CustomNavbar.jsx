import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from "react-router-dom";
import '../assets/css/CustomNavbar.css';
const CustomNavbar=()=>{
    return(
        <Navbar>
        <Navbar.Brand href="#">LEARNUP</Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />}><Link to={`/home`}>Home</Link></Nav.Item>
          <Nav.Item><Link to={`/ab`}>About</Link></Nav.Item>
          <Nav.Item><Link to={`/contact`}>Contact</Link></Nav.Item>
          
          <Nav pullRight className="cus">
            <Nav.Item><Link to='/login' >Logout</Link></Nav.Item>
          </Nav>
          {/* <Nav.Item><Link to={`/login`}>Login</Link></Nav.Item> */}
          {/* <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
        {/* <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav> */}
      </Navbar>
    )
}
export default CustomNavbar