import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import EventTimeline from "variables/Event";
import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const eventsData = [
    {
      date: "Today",
      title: "Meeting",
      description: "01003	-> Meerut vs Ghaziabad Police Department",
    },
    {
      date: "September 02, 2023",
      title: "Conference Call with SDO Ghaziabad",
      description: "01003	-> Meerut vs Ghaziabad Police Department",
    },
    {
      date: "September 04, 2023",
      title:"Filing Date",
      description: "01003	-> Meerut vs Ghaziabad Police Department",
    },
    {
      date: "September 04, 2023",
      title:"Date the Client File was Received",
      description: "00014 -> Unit 1298 - Employee A2B",
    },
    {
      date: "September 04, 2023",
      title:"Hearing For Abhishek Kant",
      description: "01003	-> Meerut vs Ghaziabad Police Department",
    },
    // Add more events here
  ];

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Invoices
                    </h6>
                    <h2 className="text-white mb-0">Transactions</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Total Meetings</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Matters / Leads</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr><th scope="col">Case No.</th>
                    <th scope="col">Matter</th>
                    
                    <th scope="col">Total Leads</th>
                    <th scope="col">Case Resolution Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>00017</td>
                    <th scope="row">Ross Estate Planning - test rrr</th>
                    
                    <td>9</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr><td>01003</td>
                    <th scope="row">Meerut vs Ghaziabad Police Department</th>
                    
                    <td>3</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr><td>00032</td>
                    <th scope="row">Insurance Defence - Rajveer vs. Kaushiks</th>
                    
                    <td>2</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr><td>01004</td>
                    <th scope="row">Rohit Gupta-Closing - Apartment 2B Incident</th>
                    
                    <td>7</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr><td>00014</td>
                    <th scope="row">Unit 1298 - Employee A2B</th>
                    
                    <td>0</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">My Tasks</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tasks</th>
                    <th scope="col">Related To</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Prepare Depositions</th>
                    <td>NA</td>
                    <td>
                      {/* <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Review BMNS Contract</th>
                    <td>01020</td>
                    <td>
                      {/* <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Meerut vs Ghaziabad Police...</th>
                    <td>01004</td>
                    <td>
                      
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Send Paperwork</th>
                    <td>01018</td>
                    <td>
                      {/* <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div> */}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Prepare Depositions</th>
                    <td>NA</td>
                    <td>
                      {/* <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div> */}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          {/* <Col className="mt-5 mb-5 mb-xl-0" xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Upcoming Events</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
                <EventTimeline events={eventsData} />
              </CardHeader>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Index;