import React,{useState, useEffect} from 'react';
import '../App.css';
import {Toast,ToastBody,ToastHeader,Badge,Tooltip} from 'reactstrap';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import Background from './camp.jpeg';
import {FadeTransform} from 'react-animation-components';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CarouselPage = () => {
    return (
      <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
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
              <h3 className="h3-responsive">Jagriti</h3>
              <p>We provides computer education to underpriviledged children in order to build secure career for them</p>
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

 

  

 function Jagriti(){
    const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

    
        return(
            <div className="container">
                <br/>
                <CarouselPage/>
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                
                <div className="row mt-5" id="vision">
                
                    <div className="col-12 col-sm-4 mt-4 mb-4">
                        <img src="assets/images/jagriti.jpeg" alt="books" height="250px" className="rounded-circle z-depth-5" width="250px" />
                    </div>
                   
                    <div className="col-12 col-sm-5 mt-4">
                        <h2>Vision</h2>
                        <br></br>
                        <p>We provides computer education to underpriviledged children in order to build secure career for them.
                          we,at jagriti try to eliminate these types of barrier so that students 
                          can attain basic knowledge of computers.</p>
                    </div>
                </div>
                </FadeTransform>
                 <div className="row m-4 justify-content-center align-items-center" ><h1 style={{backgroundImage: `url(${Background})`,height:"100px",width:"250px",textAlign:"center",padding:"30px"}}>Campaign</h1></div>
                
                
                   
                  
                   
              
                <div className="row" style={{backgroundColor:"#bce9b8"}}>
                    <div className="col-12 col-sm-5 m-5">
                      <div data-aos="zoom-in">
                    <h1>School Jagriti</h1>
                    <h6>Under this Campaign,we take classes in different places of dhanbad and teach around 80+ students on saturdays and sundays.
                    </h6>
                  </div>
                </div>
                <div className="col-12 col-sm-5 ofset-6 m-3" data-aos="zoom-in">
                  <h1 className="ml-5">Centres</h1>
                <ul className="list-group list-group-flush border-5" style={{backgroundColor:"#f5f6f7"}}>
                <li className="list-group-item" style={{backgroundColor:"#bce9b8"}}>&#9702; Middle School,Saraidhela</li>
                <li className="list-group-item" style={{backgroundColor:"#bce9b8"}}>&#9702; Variye Buniyadi School,Jagjeevan Nagar</li>
                <li className="list-group-item" style={{backgroundColor:"#bce9b8"}}>&#9702; Abhoya Sundari Orphanage</li>
                
                </ul>

                </div>
                    
                </div>
                
                
                <div className="row mt-5 justify-content-center align-items-center">
                    <h1>Main Teaching Centre</h1>
                    </div>
                    <div className="row justify-content-center align-items-center">    
                    <h5><i className="fa fa-map-marker fa-lg" id="location"></i> Near lahbani dhaiya</h5><br></br>
                    </div>
                    <div className="row justify-content-center align-items-center"> 
                    <div className="col-12 col-sm-10"> 
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action list-group-item-danger" id="list" data-aos="fade-right">&#8212;  We teach about 70 students at our main center.</a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-warning" id="list-o" data-aos="fade-left">&#8212; Centre's library has books ranging from class 1 to 12
                        <Tooltip placement="right" isOpen={tooltipOpen} target="list-o" toggle={toggle}><h6>Why throw out your books when you can donate it!! &#x1F607;<br/>Reach out to us</h6></Tooltip></a>
                        <a href="#" className="list-group-item list-group-item-action list-group-item-info" id="list" data-aos="fade-right"> &#8212; Centre is well equiped with computers </a>
                    </div>
                    </div>
                
                </div>
                
                <div className="row justify-content-center align-items-center">
                    
                    <img src="assets/images/volunteer-sign.jpg" 
                    className="rounded-circle z-depth-5" alt="volunteer" width="200" height="200" id="volunteer" data-aos="zoom-in"/>
                </div>
                <div className="row justify-content-center align-items-center">
                    <h3>Helping hands</h3><br></br>
                </div>
                 <div className="row justify-content-center align-items-center">
                 <p>We have upto 45+ members strong family of volunteers, as each head counts!!</p>
                 
                 </div>
                 
             </div>
            
        )
    }

export default Jagriti;