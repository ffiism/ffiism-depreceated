import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Badge} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactCardFlip from 'react-card-flip';
import 'react-vertical-timeline-component/style.min.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bgimage from '../components/bgjumbo.jpg';
import DATA from '../orgData.js';

class Home extends Component {
    constructor(props) {
        super(props);
          this.state = {
        };
      }
    render(){

        const sectors = DATA.HOMEPAGE.SECTORS.map((sector) =>
            <div className="col-12 col-md-3">
                <a href= {sector.HREF} className="blood_font">
                    <span className="fa-stack fa-2x">
                        <i className="fa fa-circle fa-stack-2x" style={{color: "#eda20c"}}></i>
                        <i className={sector.FA}></i>
                    </span>
                    <br></br>
                    <span style={{color: "#eda20c"}}>{sector.NAME}</span>
                </a>
            </div>
        );



        const getInfoDiv = (value) =>
            <div className="col-md-8">
                <h3 className="vertical-timeline-element-title">{value.YEAR}</h3>
                <p>{value.DESC}</p>
            </div>
        ;
        const getImageDiv = (value) =>
            <div className="col-md-4">
                <img src={value.IMG_URL} style={value.IMG_STYLE} />
            </div>
        ;

        function getDiv(value)
        {
            if(value.FLAG === 'LEFT') return (
                <div className="row">
                    {getImageDiv(value)}
                    {getInfoDiv(value)}
                </div>
            );
            else return (
                <div className="row">
                    {getInfoDiv(value)}
                    {getImageDiv(value)}
                </div>
            );
        }

        const journey = DATA.HOMEPAGE.JOURNEY.map((value) =>
            <VerticalTimelineElement
                className={value.CLASS_NAME}
                contentStyle={value.CONTENT_STYLE}
                contentArrowStyle={value.CONTENT_ARROW_STYLE}
                iconStyle={value.ICON_STYLE}
                // icon={<span className="fa fa-question fa-3x" style={{marginTop: "7px", marginRight: '2px'}}></span>}
            >
                {getDiv(value)}
            </VerticalTimelineElement>
        );


        const testimonials = DATA.HOMEPAGE.TESTIMONIALS.map((value) =>
            <div className="col-12 col-md-3 mb-3 mt-3 justify-content-center">
                <Flippy
                    flipOnHover={true} // default false
                    // flipOnClick={true} // default false
                    flipDirection="horizontal" // horizontal or vertical
                    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    // style={{ width: '250px', height: '300px' }} /// these are optional style, it is not necessary
                >
                    <FrontSide
                        style={{
                            backgroundColor: '#343a40',
                        }}
                        >
                        <div className="row justify-content-center mb-5 mt-3">
                            <img src="assets/images/raju.jpg" style={{widtth:"150px", height:"150px", borderRadius: "50%"}}/>
                        </div>
                        <div className="row justify-content-center">
                            <h4 style={{color: "white"}}>{value.AUTHOR}</h4>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <p style={{color: "white"}} className="text-muted">{value.DESIGNATION}</p>
                        </div>
                    </FrontSide>
                    <BackSide style={{ backgroundColor: '#f016a0'}}>
                        {value.MSSG}
                    </BackSide>
                </Flippy>
            </div>
        );

        return (
            <div className="text-center">
                <h1>.</h1>
                <Jumbotron fluid id="home-jumbotron">
                    <div className="container text-center">
                        <div className="row row-header justify-content-center">
                            <div className="col-lg-12">
                                <h1>{DATA.HOMEPAGE.MOTTO}</h1>
                                <p>{DATA.HOMEPAGE.DESC}</p>

                            </div>
                        </div>
                        <div className="row row-header justify-content-center">
                            <Badge className="pill_donate" href="donate" color="danger" pill>
                                <h2 className="justify-text-centre">BECOME A MEMBER</h2>
                            </Badge>
                        </div>
                        <div className="row row-header justify-content-center">
                            <div className="col-12 col-sm-6 mb-3">
                                <a className="fa fa-play-circle fa-4x umeed_play" style={{color: "#ffffff"}}/>
                            </div>
                        </div>
                        <div className="row row-header justify-content-center mt-1">
                            <div className="col-12 col-sm-6">
                                <p disabled>Watch a glimpse of our doings</p>
                                </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container">
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
                </div>
            </div>
        );
    }
}

export default Home;