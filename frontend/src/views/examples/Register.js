
import React, { useState, createContext } from "react";
import axios from 'axios';
import './stylesheet/style.css'
import { Card, CardBody, Col } from "reactstrap";
import AdminNavbar from "components/Navbars/AdminNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [contract, setContract] = useState("");
  const [Wallet, setWallet] = useState("");
  const[metaWallet,setMetaWallet] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post('http://localhost:5000/register', { name, email, password,phone,contract,Wallet,metaWallet });
      console.log(res);

      if (res.data) {
        toast.success('Register details saved', {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.replace('/auth/login');
      }
    } catch (error) {
      setError(true);
      console.warn(error.response.data);
    }
  };

  return (
    <>
      

      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-3">
            <form onSubmit={handleSubmit} className="form">
              <h2>Register up</h2>
              <label htmlFor="name" className="label">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="email" className="label">Email</label>
              <input
                className="input"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="email error"></div>

              <label htmlFor="password" className="label">Password</label>
              <input
                type="password"
                id="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <label htmlFor="text" className="label">Phone No.</label>
              <input
                type="number"
                id="password"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
               <label htmlFor="Contract" className="label">Smart Contract Address</label>
              <input
                type="text"
                id="password"
                className="input"
                value={contract}
                onChange={(e) => setContract(e.target.value)}
              />
               <label htmlFor="text" className="label">Wallet address.</label>
               <input
                type="text"
                id="password"
                className="input"
                value={Wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
              <label htmlFor="text" className="label">MetaMask Wallet Address</label>
               <input
                type="text"
                id="password"
                className="input"
                value={metaWallet}
                onChange={(e) => setMetaWallet(e.target.value)}
              />

              <div className="password error"></div>
              <button type="submit">Register</button>
              {error && <span style={{ color: "red" }}>Something went wrong!</span>}
            </form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
