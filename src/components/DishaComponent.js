
import React,{useEffect} from 'react'; 
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './DishaStyles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

  const DishaComponent=()=>{
  useEffect(()=>{
      AOS.init({duration:2000});
  },[]);
  const CarouselPage = () => {
    return (
      <MDBContainer>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
        interval={2000}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
            <MDBMask />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Disha</h3>
              <p>Career Conselling Forum</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
              />
            <MDBMask  />
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
            <MDBMask  />
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

  
    return (
        <div>
         
          <div className="row">
            <h1 className=" header text-center  display-3 font-weight-bold rounded-corner col-9 ">DISHA
            <div className="underline"></div></h1>

        </div>
          <div className="container">
        <br/>
        <CarouselPage/>
        </div>
            <h1 className="text-center display-4 font-changer">Our Vision
            <div className="underline"></div></h1>
            <div className="row">
            <div className="container-fluid corner my-auto p-3  grad1 text-white col-11 center " data-aos="fade-down">
            <div className="row">
      <img src="assets/images/disha.jpg" className="left my-auto py-auto col-11 col-xl-4 float-left" alt="an image"></img>
     <div className="col-12 col-xl-6 ">
     {/*<h1 className="col-12 font-changer2 ">Our Vision</h1>*/}
      <p className="col-12 content py-auto my-auto align">Concerning the alarming droupout rates after 10th standard in Dhanbad , DISHA chapter started with the motto of spreading knowledge and awareness amongst students of 10th and 12th standard regarding higher studies and various career options.</p>
      
      
      </div>
      </div>
     </div>
      </div>
            {/*<div className="container-fluid my-auto p-3  bg-primary text-white col-12 center h-50" data-aos="fade-left">Hello Guys!</div>*/}
           
           
            <Flip left>
            <h1 className="text-center display-4 font-changer">-:Working:-
            <div className="underline"></div></h1> 
        </Flip> 
             {/*<Zoom>
  <p>Markup that will be revealed on scroll</p>
             </Zoom>*/}
<Slide left><div className="container  p-3 mt-4  grad5 text-white col-11 h-10">Visiting various government aided and small private schools for career conselling for 10th and 12th standard students.</div></Slide>
<Slide left><div className="container  p-3 mt-4 grad3 text-white col-11 h-10">Conducting online career conselling via the Facebook Page "Disha Career Conselling Forum".</div></Slide>
<Slide left><div className="container p-3 mt-4 grad4 text-white col-11 h-10">Working on various videos related to career conselling</div></Slide>
<Slide left><div className="container  p-3 mt-4  grad2 text-white col-11 h-10">Currently, we consel about 25+ career options as well as about olympiads and entrance exams like KVPY.</div></Slide>
<Slide left><div className="container  p-3 mt-4  grad6 text-white col-11 h-10">Provided career conselling sessions to about 500+ students till date.</div></Slide>
<h1 className="text-center display-4 font-changer">Schools Covered
<div className="underline"></div></h1>
<div className="container list-box">

  <ul className="row new">
    <li className=" col-12 col-md-5 new">Kids Garden,Hirapur</li>
 <li className="col-12 col-md-5 new">Abhoya Sundari,Hirapur</li>
 <li className="col-12 col-md-5 new">Balika Shiksha Sansthan,City Center</li>
 <li  className="col-12 col-md-5 new">Higher Education,Vistipara</li>
 <li className="col-12 col-md-5 new">Symbiosis Public School,Barwadda</li>
 <li className="col-12 col-md-5 new">Kendriya Vidhyalaya-2,Jagjeevan Nagar</li>
 <li className="col-12 col-md-5 new">Koylanchal Public School</li>
 <li className=" col-12 col-md-5 new">Zila School,City Center</li>
 
  </ul>
  </div>
  <div className="row">
    <div className="col-12 col-md-6">
  <h1 className="text-center display-4 font-changer col-12 ">Our Team
  <div className="underline2"></div></h1>
  <img src="assets\images\team2.png" className="col-12 size" alt="an image"></img>
 </div>
  <Bounce left><p className="col-10 col-md-5 my-auto mx-auto box-team">Currently 50+ members are working as a part of DISHA career conselling team.</p></Bounce>
  
</div>
</div>


      );
    };
  

export default DishaComponent