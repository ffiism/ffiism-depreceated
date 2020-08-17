import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Badge, UncontrolledCarousel, Card, CardHeader, CardBody, Button, ListGroup, ListGroupItem} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactCardFlip from 'react-card-flip';
import 'react-vertical-timeline-component/style.min.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bgimage from '../components/bgjumbo.jpg';
import DATA from '../orgData.js';

import "./EscapeComponent.css";

class Escape extends Component {
    constructor(props) {
        super(props);
          this.state = {
        };
      }
    render(){

        const carouselItems = [
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 1',
                caption: 'Slide 1',
                header: 'Slide 1 Header',
                key: '1'
              },
              {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 2',
                caption: 'Slide 2',
                header: 'Slide 2 Header',
                key: '2'
              },
              {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 3',
                caption: 'Slide 3',
                header: 'Slide 3 Header',
                key: '3'
              }
        ];

        const working = DATA.ESCAPE.WORKING.map((value)=>
            <p style={{textAlign: "justify", fontFamily:"candara", color: "#180636"}}>{value}</p>
        );

        const about = DATA.ESCAPE.ABOUT.map((value)=>
            <p style={{textAlign: "justify", fontFamily:"candara", color: "#180636"}}>{value}</p>
        );

        const establishment = DATA.ESCAPE.ESTABLISHMENT.map((value)=>
            <p style={{textAlign: "justify", fontFamily:"candara", color: "#180636"}}>{value}</p>
        );
        const achievements = DATA.ESCAPE.ACHIEVEMENTS.map((value)=>
            <ListGroupItem style={{textAlign: "justify", fontFamily:"candara", color: "#180636"}}>{value}</ListGroupItem>
        );

        return (
            <div id="escape" className="text-center">
                
                <h1><br /></h1>
                <br />
                <Container>
                    <div id="yy">
                        <UncontrolledCarousel items={carouselItems} />
                    </div>
                </Container>
                <br />


                <Container>
                    <Jumbotron>
                        <h1 style={{fontSize: "72px", color: "#1a404f"}}>ESCAPE</h1>
                        <h3 style={{color: "#2f6378"}}>{DATA.ESCAPE.FULL_FORM}</h3>
                        <hr />
                        <p style={{fontSize: "20px", fontFamily:"candara", color: "#180636"}}>{DATA.ESCAPE.VISION}</p>
                    </Jumbotron>
                    <br />
                    <Row lg="2" sm="1">
                        <Col lg="6" sm="12" style={{padding: "15px"}}>
                            <Card style={{boxShadow:"2px 2px 8px 5px #888888", height: "100%"}}>
                                <CardHeader style={{background:'#34b9ed', width:'100%'}} className="text-white text-center">
                                    <h2 style={{ color:"white", fontFamily:"candara"}}><strong>ABOUT</strong></h2>
                                </CardHeader>
                                <CardBody>{about}</CardBody>
                                <br/>
                            </Card>
                        </Col>
                        <Col lg="6" sm="12" style={{padding: "15px"}}>
                            <Card style={{boxShadow:"2px 2px 8px 5px #888888", height: "100%"}}>
                                <CardHeader style={{background:'#34b9ed', width:'100%'}} className="text-white text-center">
                                    <h2 style={{ color:"white", fontFamily:"candara"}}><strong>ESTABLISHMENT</strong></h2>
                                </CardHeader>
                                <CardBody>{establishment}</CardBody>
                                <br/>
                            </Card>
                        </Col>
                        <Col lg="6" sm="12" style={{padding: "15px"}}>
                            <Card style={{boxShadow:"2px 2px 8px 5px #888888", height: "100%"}}>
                                <CardHeader style={{background:'#34b9ed', width:'100%'}} className="text-white text-center">
                                    <h2 style={{ color:"white", fontFamily:"candara"}}><strong>WORKING</strong></h2>
                                </CardHeader>
                                <CardBody>{working}</CardBody>
                                <br/>
                            </Card>
                        </Col>
                        <Col lg="6" sm="12" style={{padding: "15px"}}>
                            <Card style={{boxShadow:"2px 2px 8px 5px #888888", height: "100%"}}>
                                <CardHeader style={{background:'#34b9ed', width:'100%'}} className="text-white text-center">
                                    <h2 style={{ color:"white", fontFamily:"candara"}}><strong>ACHIEVEMENTS</strong></h2>
                                </CardHeader>
                                <CardBody>
                                    <ListGroup>
                                        {achievements}
                                    </ListGroup>
                                </CardBody>
                                <br/>
                            </Card>
                        </Col>
                        
                    </Row>
                    
                </Container>


                {/* <div className="container">
                    <div className="row row-header justify-content-center">
                            <div className="col-12 mt-3">
                                <h2 style={{ marginTop:"50px", fontFamily:"Montserrat;"}}>ABOUT US</h2>
                            </div>
                    </div>
                    <div className="row row-header justify-content-center">
                            <div className="col-12 col-sm-6 ">
                                <p className="sub_text">Brief into our organization ...</p>
                            </div>
                    </div>
                    <div className="row row-header">
                            <div className="col-sm-12 justify-content-center">
                                <p style={{marginBottom: "50px", fontFamily:"Montserrat"}}>{DATA.HOMEPAGE.ABOUT_US}</p>
                            </div>
                    </div>
                    <div className="row row-header">
                            <div className="col-12 mt-3 justify-content-center">
                                <h2 style={{ fontFamily:"Montserrat;"}}>INITIATIVES</h2>
                            </div>
                    </div>
                    <div className="row row-header justify-content-center">
                            <div className="col-12 col-sm-10 mb-5">
                                <p className="sub_text">The sectors we have been working in ...</p>
                            </div> 
                    </div>
                    
                    <div className="row justify-text-center" style={{marginBottom: "20px"}}>
                        {sectors}
                    </div>

                    <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-3 mt-5 mb-5">
                            <h2 style={{ fontFamily:"Montserrat;"}}>OUR JOURNEY</h2>
                        </div>
                    </div>
                    <div className="timeline_bg" >
                        <VerticalTimeline>
                            {journey}
                        </VerticalTimeline>
                    </div>
                    <div className="row row-header justify-content-center">
                            <div className="col-12 col-sm-3 mt-3">
                                <h2 style={{ fontFamily:"Montserrat;", marginTop:"10px"}}>OUR WORK</h2>
                            </div>
                    </div>
                    <div className="row row-header justify-content-center">
                        <img src="assets/images/ffi_wordart.png" style={{height: "auto", width: "100%", verticalAlign: "center", background:""}}/>
                    </div>
                    <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-3 mt-5 mb-5">
                            <h2 style={{ fontFamily:"Montserrat;"}}>Testimonials</h2>
                        </div>
                    </div>
                    <div className="row row-header justify-content-center">
                        {testimonials}
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Escape;