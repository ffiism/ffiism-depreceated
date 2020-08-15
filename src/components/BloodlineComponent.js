import React, {Component} from 'react'
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Row, Col, CardHeader, Card, CardBody, CardDeck, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';


import DATA from "../orgData";

const CarouselPage = () => {
    return (
      <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        //className="z-depth-0"
        interval={1300}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                alt="Third slide"
              />
            <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Slight Mast</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
    );
 }

class Bloodline extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }
    render(){

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

      const journey = DATA.BLOODLINE.JOURNEY.map((value) =>
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

        return(
            <div className="container">
                <h1>.</h1>
                <br/>
                <CarouselPage/>
                <br/>
                <CardDeck className="card-deck">
                    <Card style={{boxShadow:"3px 3px 10px 5px #888888"}}>
                      <CardHeader style={{background:'red', width:'100%'}} className="text-white text-center">Blood Donation Camps</CardHeader>
                      <CardBody>We collaborate with colleges, corporates, RWAs to organize innovative and engaging blood donation camps end to end.</CardBody>
                      <Button id="deckBloodlineCard">Organize a Camp</Button>
                    <br/>
                    </Card>
                    <Card style={{boxShadow:"3px 3px 10px 5px #888888"}}>
                      <CardHeader style={{background:'red', width:'100%'}} className="text-white text-center">Handling Helpline</CardHeader>
                      <CardBody>Through helpline requests, we help address immediate blood requirements by patients. Fill this form and we will find a donor.</CardBody>
                      <Button id="deckBloodlineCard">Raise a Request</Button>
                    <br/>
                    </Card>
                    <Card style={{boxShadow:"3px 3px 10px 5px #888888"}}>
                      <CardHeader style={{background:'red', width:'100%'}} className="text-white text-center">Awareness Session</CardHeader>
                      <CardBody>Street plays, competitions, and sessions - targeted at inspiring people, especially the first timers, to come out and donate blood.</CardBody>
                      <Button id="deckBloodlineCard">Learn More</Button>
                    <br/>
                    </Card>
                </CardDeck>
                <br /><br />
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
            </div>
        )
    }
}

export default Bloodline;