import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media, Jumbotron, Badge} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactCardFlip from 'react-card-flip';
import 'react-vertical-timeline-component/style.min.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bgimage from '../components/bgjumbo.jpg'

class Home extends Component {
    constructor(props) {
        super(props);
          this.state = {
            isFlipped: false,
            // isFlipped2: false,
            // isFlipped3: false,
            // isFlipped4: false
        };
        this.toggleFlip1 = this.toggleFlip1.bind(this);
        // this.toggleFlip2 = this.toggleFlip2.bind(this);
        // this.toggleFlip3 = this.toggleFlip3.bind(this);
        // this.toggleFlip4 = this.toggleFlip4.bind(this);
      }

      showBack() {
        this.setState({
          isFlipped: true
        });
      }
    
      showFront() {
        this.setState({
          isFlipped: false
        });
      }
    
      handleOnFlip(flipped) {
        if (flipped) {
          this.refs.backButton.getDOMNode().focus();
        }
      }
    
      handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
          this.showFront();
        }
      }
     
    toggleFlip1(e) {
        this.setState({
            isFlipped1: !this.state.isFlipped1
        });
        e.preventDefault()
    }
    // toggleFlip2() {
    //     this.setState({
    //         isFlipped2: !this.state.isFlipped2
    //     });
    // }
    // toggleFlip3() {
    //     this.setState({
    //         isFlipped3: !this.state.isFlipped3
    //     });
    // }
    // toggleFlip4() {
    //     this.setState({
    //         isFlipped4: !this.state.isFlipped4
    //     });
    // }
    render(){
        return(
            <div className="text-center">
                <Jumbotron fluid>
            <div className="container text-center">
                <div className="row row-header justify-content-center">
                    <div className="col-12 mb-2">
                        <h1>Learn . Donate . Change life</h1>
                        <p>Fast Forward India (FFI) is a unique effort and an initiative undertaken 
                            by the students of IIT(ISM) Dhanbad. This is an organization completely 
                            managed and administered by the young and enthusiastic students of the institution.
                            <br></br><br></br>
                            </p>
                    </div>
                </div>
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-6 mb-3">
                        <Badge className="pill_donate" href="donate" size="lg" color="danger" pill><h2 className="justify-text-centre">BECOME A MEMBER</h2></Badge>
                        </div>
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
                        <div className="col-12 col-sm-3 mt-3">
                            <h2 style={{ marginTop:"50px", fontFamily:"Montserrat;", borderStyle: "solid", border: "1px solid black"}}>ABOUT US</h2>
                        </div>
                </div>
                <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-6 ">
                            <p className="sub_text">Brief into our organization ...</p>
                        </div>
                </div>
                <div className="row row-header">
                        <div className="col-lg-10 offset-1">
                            <p style={{marginBottom: "50px", fontFamily:"Montserrat"}}>Fast Forward India (FFI) is a unique effort and an initiative undertaken 
                                by the students of IIT(ISM) Dhanbad. This is an organization completely 
                                managed and administered by young and enthusiastic students of the 
                                institution. Creative and powerful ways are implemented to tackle problems 
                                of the millions of underprivileged people in India. The organization conducts 
                                blood donation camps, imparts basic computer and English education, and 
                                numerous careers counseling sessions in schools to help the deprived students 
                                shape their future.
                            </p>
                        </div>
                </div>
                <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-3 mt-3">
                            <h2 style={{ fontFamily:"Montserrat;", borderStyle: "solid", border: "1px solid black"}}>INITIATIVES</h2>
                        </div>
                </div>
                <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-6 mb-5">
                            <p className="sub_text">The sectors we have been working in ...</p>
                        </div> 
                </div>
                <div className="row justify-text-center" style={{marginBottom: "20px"}}>
                    <div className="col-12 col-md-3">
                        <a href="initiatives/disha" className="blood_font">
                            <span className="fa-stack fa-2x">
                                    <i className="fa fa-circle fa-stack-2x" style={{color: "#eda20c"}}></i>
                                    <i className="fa fa-medkit fa-stack-1x fa-inverse"></i>
                            </span>
                            <br></br>
                            <span style={{color: "#eda20c"}}>BLOODLINE</span>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="initiatives/disha" className="blood_font">
                            <span className="fa-stack fa-2x">
                                    <i className="fa fa-circle fa-stack-2x" style={{color: "#eda20c"}}></i>
                                    <i className="fa fa-line-chart fa-stack-1x fa-inverse"></i>
                            </span>
                            <br></br>
                            <span style={{color: "#eda20c"}}>DISHA</span>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="initiatives/escape" className="blood_font">
                            <span className="fa-stack fa-2x">
                                    <i className="fa fa-circle fa-stack-2x" style={{color: "#eda20c"}}></i>
                                    <i className="fa fa-book fa-stack-1x fa-inverse"></i>
                            </span>
                            <br></br>
                            <span style={{color: "#eda20c"}}>ESCAPE</span>
                        </a>
                    </div>
                    <div className="col-12 col-md-3">
                        <a href="initiatives/escape" className="blood_font">
                            <span className="fa-stack fa-2x">
                                    <i className="fa fa-circle fa-stack-2x" style={{color: "#eda20c"}}></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <br></br>
                            <span style={{color: "#eda20c"}}>JAGRITI</span>
                        </a>
                    </div>
                </div>
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-3 mt-5 mb-5">
                        <h2 style={{ fontFamily:"Montserrat;", borderStyle: "solid", border: "1px solid black"}}>OUR JOURNEY</h2>
                    </div>
                </div>
                <div className="timeline_bg" >
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#ffffff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: '#ffffff' }}
                            // icon={<span className="fa fa-play fa-2x d-flex justify-content-center"></span>}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="assets/images/blood.png" style={{height: "120px", width: "100px", verticalAlign: "center"}}/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2007</h3>
                                    <p>Fast Forward India (FFI) was started with a chapter "BLOODLINE"</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#FFC444", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #FFC444' }}
                            iconStyle={{ background: "#FFC444", color: '#fff' }}
                            // icon={<span className="fa fa-laptop fa-3x" style={{marginTop: "4px"}}></span>}
                        >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2008</h3>
                                    <p>FFI introduced two more new chapters named "ESCAPE" and "JAGRATI"</p>
                                </div>
                                <div className="col-md-4 mt-2">
                                    <img src="assets/images/disha.png" style={{height: "120px", width: "140px", verticalAlign: "center"}}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#35801F", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #35801F' }}
                            iconStyle={{ background: '#35801F', color: '#fff' }}
                            // icon={<span><img src="assets/images/blood.png"  style={{marginTop: "9px", width: '40px' , height: "40px"}} /></span>}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="assets/images/mentor.png" style={{height: "100px", width: "150px", verticalAlign: "center"}}/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2009</h3>
                                    <p>FFI launced a new and overall its fourth chapter named "DISHA"</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#1472b5", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #1472b5' }}
                            iconStyle={{ background: '#1472b5', color: '#fff' }}
                            // icon={<span className="fa fa-question fa-3x" style={{marginTop: "7px", marginRight: '2px'}}></span>}
                        >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2010</h3>
                                    <p>FFI launched the quiz event "BRAINSTORM"</p>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <img src="assets/images/quiz.png" style={{height: "120px", width: "120px", verticalAlign: "center"}}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: "#15e8e8", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #15e8e8' }}
                            iconStyle={{ background: '#15e8e8', color: '#fff' }}
                            // icon={<span><img src="assets/images/blood.png"  style={{marginTop: "9px", width: '40px' , height: "40px"}} /></span>}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="assets/images/donate.png" style={{height: "120px", width: "120px", verticalAlign: "center"}}/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2014</h3>
                                    <p>FFI set the milestone of a record blood donation of "905" units in a single day</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#b52ec7", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #b52ec7' }}
                            iconStyle={{ background: "#b52ec7", color: '#fff' }}
                            // icon={<span className="fa fa-laptop fa-3x" style={{marginTop: "4px"}}></span>}
                        >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2015</h3>
                                    <p>FFI launched its Annual Festival UMEED, (previously known as 'CARRUS') a Career Development Fest</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/images/umeed.png" style={{height: "140px", width: "140px", verticalAlign: "center"}}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#F00", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #F00' }}
                            iconStyle={{ background: '#F00', color: '#fff' }}
                            // icon={<span><img src="assets/images/blood.png"  style={{marginTop: "9px", width: '40px' , height: "40px"}} /></span>}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="assets/images/bld_donate.png" style={{height: "150px", width: "150px", verticalAlign: "center"}}/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2016</h3>
                                    <p>FFI started a campaign known as MEGA BLOOD DONATION CAMP (MBDC) in which Blood donation events are organized at various hospitals of city</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#33909B", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #33909B' }}
                            iconStyle={{ background: '#33909B', color: '#fff' }}
                            // icon={<span className="fa fa-question fa-3x" style={{marginTop: "7px", marginRight: '2px'}}></span>}
                        >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2016</h3>
                                    <p>FFI initiated an campaign ISM to IIT (ISM) Movement which later helped ISM to become IIT</p>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <img src="assets/images/ism2iit.png" style={{height: "120px", width: "170px", verticalAlign: "center"}}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: "#9F2B2B", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #9F2B2B' }}
                            iconStyle={{ background: '#9F2B2B', color: '#fff' }}
                            // icon={<span><img src="assets/images/blood.png"  style={{marginTop: "9px", width: '40px' , height: "40px"}} /></span>}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="assets/images/books.png" style={{height: "100px", width: "90px", verticalAlign: "center"}}/>
                                </div>
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2019</h3>
                                    <p>Initiative started to prepare students for Navodaya Entrance Examination</p>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#2B2C97", color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #2B2C97' }}
                            iconStyle={{ background: '#2B2C97', color: '#fff' }}
                            // icon={<span className="fa fa-question fa-3x" style={{marginTop: "7px", marginRight: '2px'}}></span>}
                        >
                            <div className="row">
                                <div className="col-md-8">
                                    <h3 className="vertical-timeline-element-title">2020</h3>
                                    <p>Started an Online Education System 'AAGAZ'</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="assets/images/aagaz.png" style={{height: "100px", width: "150px", verticalAlign: "center"}}/>
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div className="row row-header justify-content-center">
                        <div className="col-12 col-sm-3 mt-3">
                            <h2 style={{ fontFamily:"Montserrat;", marginTop:"10px"}}>OUR WORK</h2>
                        </div>
                </div>
                <div className="row row-header justify-content-center">
                    <img src="assets/images/ffi_wordart.png" style={{height: "500px", width: "1500px", verticalAlign: "center", background:""}}/>
                </div>
                <div className="row row-header justify-content-center">
                    <div className="col-12 col-sm-3 mt-5 mb-5">
                        <h2 style={{ fontFamily:"Montserrat;"}}>Testimonials</h2>
                    </div>
                </div>
                <div className="row row-header justify-content-center">
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
                                    <h4 style={{color: "white"}}>Prof. Rajeev Shekhar</h4>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <p style={{color: "white"}} className="text-muted">Director, IIT(ISM) Dhanbad</p>
                                </div>
                            </FrontSide>
                            <BackSide
                            style={{ backgroundColor: '#f016a0'}}>
                            ROCKS
                            </BackSide>
                        </Flippy>
                    </div>
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
                                    <h4 style={{color: "white"}}>Prof. Rajeev Shekhar</h4>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <p style={{color: "white"}} className="text-muted">Director, IIT(ISM) Dhanbad</p>
                                </div>
                            </FrontSide>
                            <BackSide
                            style={{ backgroundColor: '#f016a0'}}>
                            ROCKS
                            </BackSide>
                        </Flippy>
                    </div>
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
                                    <h4 style={{color: "white"}}>Prof. Rajeev Shekhar</h4>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <p style={{color: "white"}} className="text-muted">Director, IIT(ISM) Dhanbad</p>
                                </div>
                            </FrontSide>
                            <BackSide
                            style={{ backgroundColor: '#f016a0'}}>
                            ROCKS
                            </BackSide>
                        </Flippy>
                    </div>
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
                                    <h4 style={{color: "white"}}>Prof. Rajeev Shekhar</h4>
                                </div>
                                <div className="row justify-content-center mt-3">
                                    <p style={{color: "white"}} className="text-muted">Director, IIT(ISM) Dhanbad</p>
                                </div>
                            </FrontSide>
                            <BackSide
                            style={{ backgroundColor: '#f016a0'}}>
                            ROCKS
                            </BackSide>
                        </Flippy>
                    </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default Home;