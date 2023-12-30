// import React, {  } from 'react';
// import {useState} from 'react';
import React, { useEffect,useState, useRef } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";

  function Adduser() {
    const [form, setForm] = useState({});
    const formRef = useRef(); // Add a ref to the form element

    const handleForm = (e) => {
        console.log(e.target.value, e.target.name);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/adduser", {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);

        // Reset the form using the ref
        formRef.current.reset();
    }  
  
    const getUsers = async () => {
        const response = await fetch("http://127.0.0.1:5000/getuser", {
            method: 'GET',
        });
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        getUsers();
    },[])

    




    return (
    <>
    <Col lg="12" md="4" className="d-flex align-items-center justify-content-center vh-100" style={{ backgroundColor: '#1171ef' }}>
        <Card className="bg-secondary shadow border-0 custom-card" style={{ backgroundColor: 'blue', width: '500px',maxWidth: '500px' }}>

          
            
          <CardBody className="px-lg-5 py-lg-5">
            {/* <p>{JSON.stringify(form)}</p> */}
              

            <form ref={formRef} onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Designation" type="text" name="designation" onChange={handleForm}/>
                </InputGroup>
              </FormGroup>
              
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" name="name" onChange={handleForm}/>
                </InputGroup>
              </FormGroup>
              
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Wallet Address" type="text" name="walletaddress" onChange={handleForm} />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  wallet address starts with :{" "}
                  <span className="text-success font-weight-700">0x90a...</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Add User
                </Button>
                
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>    
    </>
  )
}

export default Adduser