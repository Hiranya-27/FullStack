import {  Form } from "rsuite"
import '../assets/css/Login.css'

const AddEnq=()=>{
    return(
      <div className="log">
          <div className="loginBox">
    {" "}
    {/* <img
      className="user"
      src="https://i.ibb.co/yVGxFPR/2.png"
      height="100px"
      width="100px"
    /> */}
    <form action="login.php" method="post">
      <div className="inputBox">
        {" "}
        {/* <h1>Enquiry Date</h1> */}
        <input
          id="uname"
          type="date"
          name="enq"
          placeholder="Enquiry Date"
        />{" "}
        <input id="pass" type="text" name="course" placeholder="CourseName" />{" "}
      </div>{" "}
      {/* <input type="submit" name="" defaultValue="Login" /> */}
    </form>
    <form action="login.php" method="post">
      <div className="inputBox">
        {" "}
        <input
          id="uname"
          type="text"
          name="desc"
          placeholder="Description"
        />{" "}
        <input
          id="confirm"
          type="text"
          name="Email"
          placeholder="Email"
        />{" "}
        {/* <input id="pass" type="text" name="mobile" placeholder="Mobile number" />{" "} */}
      </div>{" "}
      <div className="inputBox">
        {" "}
        {/* <input id="pass" type="text" name="mobile" placeholder="Mobile number" />{" "} */}
      </div>{" "}
      <div></div>
      <br></br>
      <br></br>
      <input type="submit" name="" defaultValue="Login" />
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
export default AddEnq;