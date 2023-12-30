import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

function Profile() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: '',
    city: '',
    address: '',
    aboutMe: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFormData({ ...formData, image: selectedFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username); // Correctly access username from formData
      formDataToSend.append('email', formData.email);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('aboutMe', formData.aboutMe);
      formDataToSend.append('image', formData.image);

      const res = await axios.post('http://localhost:5000/users', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.warn(formDataToSend);
      if (res.data) {
        toast.success('User details saved', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      toast.error('User details failed', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.warn(error.response.data);
    }
  }

  // fetch data user

  const [users, setusers] = useState([]);

  const getProfile = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/getprofile");
      const data = response.data; // Use response.data directly, no need to call .json() for Axios responses
      setusers(data); // Update state with the fetched data
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);


  return (
    <>
      <UserHeader />
      <ToastContainer />
      {/* Page content */}
      <Container  className="mt--7" fluid>
        <Row  >
  <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        {users.map((user, index) => (
    <Card className="card-profile shadow">
      <Row  key={index} className="justify-content-center">
        <Col className="order-lg-2" lg="3">
          <div className="card-profile-image">
          {user.image && (
            <img
            alt="hi"
            className="rounded-circle"
            src={user.image}
            />
            )}

            
          </div>
        </Col>
      </Row>
        

      <CardBody className="pt-0 pt-md-4">
        <Row>
          <div className="col">
            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
              <div>
                <span className="heading">22</span>
                <span className="description">Friends</span>
              </div>
              <div>
                <span className="heading">10</span>
                <span className="description">
                 
                </span>
              </div>
              <div>
                <span className="heading">89</span>
                <span className="description">Comments</span>
              </div>
            </div>
          </div>
        </Row>
        <div className="text-center">
          <h3>
            {user.username}
             
          </h3>
          <div className="h5 font-weight-300">
            <i className="ni location_pin mr-2" />
            {user.email}
          </div>
          <div className="h5 mt-4">
            <i className="ni business_briefcase-24 mr-2" />
            {user.address}
          </div>
          <div>
            <i className="ni education_hat mr-2" />
            {user.country}
          </div>
          <hr className="my-4" />
          <p>
            {user.aboutMe}
          </p>
          <a href="#pablo" onClick={(e) => e.preventDefault()}>
            Show more
          </a>
        </div>
      </CardBody>
    </Card>
       ))}
  </Col>


          {/*  from here  */}


          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

                <form onSubmit={handleSubmit} method="post">
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Username"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Country"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}

                  <FormGroup>
                    <label>About Me</label>
                    <Input
                      type="text"
                      name="aboutMe"
                      value={formData.aboutMe}
                      onChange={handleInputChange}
                      placeholder="About Me"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Profile Pic</label>
                    <Input type="file" name="image" onChange={handleImageUpload} />
                  </FormGroup>
                  <Button className="mr-4" color="info" type="submit" size="sm">
                    Save Details
                  </Button>

                </form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;