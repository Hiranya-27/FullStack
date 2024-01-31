import { Form } from "rsuite"
import '../assets/css/Login.css'
import { Link } from "react-router-dom"

const Login=()=>{
    return(
      
      <div className="log">
        
        <div className="loginBox">
  {" "}
  <img
    className="user"
    src="https://i.ibb.co/yVGxFPR/2.png"
    height="100px"
    width="100px"
  />
  {/* <h3>Sign in here</h3> */}
  <form action="login.php" method="post">
    <div className="inputBox">
      {" "}
      <input
        id="uname"
        type="text"
        name="Username"
        placeholder="Username"
      />{" "}
      <input id="pass" type="password" name="Password" placeholder="Password" />{" "}
    </div>{" "}
    {/* <input type="submit" name="" defaultValue="Login" /> */}
    <div>
    <button style={{padding:5,marginLeft:100}}><Link to={`/home`}>Login</Link></button>
    </div>
    <br></br>
    <div className="but">
    <button style={{padding:5,marginLeft:100}}><Link to={`/about`}> Admin</Link></button>
    </div>
  </form>
  <div className="text-center">
    {/* <p style={{ color: "#59238F" }}>Sign-Up</p>
     */}
     <Form.Group controlId="signup">
      <Form.ControlLabel>Dont have an account -  <Link to ='/signup'>Signup</Link></Form.ControlLabel>
      {/* <Form.Control name="signup" type="text"/>
      <Form.HelpText tooltip>Dont have an account,Signup</Form.HelpText> */}
    </Form.Group>
  </div>
</div>
  </div>
    )
}
export default Login;