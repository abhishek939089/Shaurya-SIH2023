 
import {  Button,  Card,  CardHeader,  CardBody,  FormGroup,  Form,  Input,  InputGroupAddon,  InputGroupText,  InputGroup,  Row,  Col,} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUserContext } from '../../context/UserContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {updateUser}= useUserContext();
  const navigate = useNavigate();


  const loginhandle = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      setErrorMessage("Please provide both name and password.");
      return;
    }

    try {

      const response = await axios.post('http://localhost:5000/login', { name, password });
     updateUser(name)
      if (response && response.data) {
        console.log(response.data);
        
        navigate('/');
        toast.success('Login Sucssfully!!!', {
        position: toast.POSITION.TOP_CENTER,
      });
      } else {
        setErrorMessage("Login failed: Response did not contain data.");
      }
    } catch (error) {
      console.warn("An error occurred:", error);

      if (error.response && error.response.data) {
        console.warn(error.response.data);
        setErrorMessage("Please Enter Correct password !!!");
      } else {
        console.warn("Unknown error occurred.");
        setErrorMessage("An unknown error occurred.");
      }
    }
  };
 
  
  

  return (
    <>
    <ToastContainer/>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small> Login in with credentials</small>
            </div>
            <form onSubmit={loginhandle} className="form">
  <h2>Login</h2>
  <div className="form-group">
    <label htmlFor="name" className="label">
      Name
    </label>
    <input
      className="input"
      type="text"
      id="name"
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  <div className="form-group">
    <label htmlFor="password" className="label">
      Password
    </label>
    <input
      type="password"
      id="password"
      className="input"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>

  <div className="password error">{errorMessage}</div>

  <div className="form-group">
    <button type="submit" className="btn btn-primary">
      Login
    </button>
  </div>
</form>

</CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small><Link className="link" to='/auth/register'> Create new account</Link></small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
