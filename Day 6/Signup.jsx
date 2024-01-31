import { Form, SelectPicker } from "rsuite"
import '../assets/css/Signup.css'
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom"
const data = ['User', 'Admin'].map(
  item => ({ label: item, value: item })
);
const Signup=()=>{
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
    <form action="login.php" method="post">
      <div className="inputBox">
        {" "}
        <input
          id="uname"
          type="text"
          name="Username"
          placeholder="Username"
        />{" "}
        <input id="pass" type="text" name="mail" placeholder="Email" />{" "}
      </div>{" "}
      {/* <input type="submit" name="" defaultValue="Login" /> */}
    </form>
    <form action="login.php" method="post">
      <div className="inputBox">
        {" "}
        <input
          id="uname"
          type="password"
          name="password"
          placeholder="Password"
        />{" "}
        <input
          id="confirm"
          type="password"
          name="Confirm Password"
          placeholder="Confirm Password"
        />{" "}
        <input id="pass" type="text" name="mobile" placeholder="Mobile number" />{" "}
      </div>{" "}
      <div className="inputBox">
        {" "}
        <SelectPicker
      data={data}
      searchable={false}
      placeholder="Role"
      style={{ width: 300 }}
      
    />{" "}
        {/* <input id="pass" type="text" name="mobile" placeholder="Mobile number" />{" "} */}
      </div>{" "}
      <div></div>
      <br></br>
      <br></br>
      {/* <input type="submit" name="" defaultValue="Login" /> */}
      <div className="but">
    <button style={{padding:5,marginLeft:100}}><Link to={`/login`}>Signup</Link></button>
    </div>
    </form>
    <div className="text-center">
      {/* <p style={{ color: "#59238F" }}>Sign-Up</p>
       */}
       <Form.Group controlId="signup">
        {/* <Form.ControlLabel>Dont have an account -  <Link to ='/signup'>Signup</Link></Form.ControlLabel> */}
        {/* <Form.Control name="signup" type="text"/>
        <Form.HelpText tooltip>Dont have an account,Signup</Form.HelpText> */}
      </Form.Group>
    </div>
  </div>
    </div>
    )
}
export default Signup;