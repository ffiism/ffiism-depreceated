import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Media, Jumbotron, Badge, Tooltip} from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactTooltip from "react-tooltip";
import bgimage from '../components/bgjumbo.jpg'

class Members extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="container">
                <div className="row row-header justify-content-center mt-5 mb-5">
                    <h2>MEMBERS</h2>
                </div>
                <div className="row row-header justify-content-center mt-5">
                    <h3>BLOODLINE</h3>
                </div>
                <div className="row row-header justify-content-center mt-3 mb-5">
                    <div className="col-12 col-md-3 justify-content-center">
                        <Card style={{backgroundColor:"#c96d6d", boxShadow:"3px 3px 10px 5px #888888"}}>
                            <CardImg  className="mt-4 mb-3" top src="assets/images/ffi.jpg" style={{width:"60%",height:"60%", borderRadius:"50%"}} 
                            alt="blood_head" />
                                <CardTitle><p style={{fontSize:"150%", color:"#ffffff"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#ffffff"}}>Head</p>
                                <p style={{color:"#ffffff"}}><span className="fa fa-phone" style={{color:"#ffffff"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#ffffff"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#ffffff"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header mt-5 mb-5">
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header justify-content-center mt-5">
                    <h3>DISHA</h3>
                </div>
                <div className="row row-header justify-content-center mt-3 mb-5">
                    <div className="col-12 col-md-3 justify-content-center">
                        <Card style={{backgroundColor:"#5e92e6", boxShadow:"3px 3px 10px 5px #888888"}}>
                            <CardImg  className="mt-4 mb-3" top src="assets/images/ffi.jpg" style={{width:"60%",height:"60%", borderRadius:"50%"}} 
                            alt="blood_head" />
                                <CardTitle><p style={{fontSize:"150%", color:"#ffffff"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#ffffff"}}>Head</p>
                                <p style={{color:"#ffffff"}}><span className="fa fa-phone" style={{color:"#ffffff"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#ffffff"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#ffffff"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header mt-5 mb-5">
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header justify-content-center mt-5">
                    <h3>ESCAPE</h3>
                </div>
                <div className="row row-header justify-content-center mt-3 mb-5">
                    <div className="col-12 col-md-3 justify-content-center">
                        <Card style={{backgroundColor:"#9e572e", boxShadow:"3px 3px 10px 5px #888888"}}>
                            <CardImg  className="mt-4 mb-3" top src="assets/images/ffi.jpg" style={{width:"60%",height:"60%", borderRadius:"50%"}} 
                            alt="blood_head" />
                                <CardTitle><p style={{fontSize:"150%", color:"#ffffff"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#ffffff"}}>Head</p>
                                <p style={{color:"#ffffff"}}><span className="fa fa-phone" style={{color:"#ffffff"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#ffffff"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#ffffff"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header mt-5 mb-5">
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header justify-content-center mt-5">
                    <h3>JAGRITI</h3>
                </div>
                <div className="row row-header justify-content-center mt-3 mb-5">
                    <div className="col-12 col-md-3 justify-content-center">
                        <Card style={{backgroundColor:"#cc8d2f", boxShadow:"3px 3px 10px 5px #888888"}}>
                            <CardImg  className="mt-4 mb-3" top src="assets/images/ffi.jpg" style={{width:"60%",height:"60%", borderRadius:"50%"}} 
                            alt="blood_head" />
                                <CardTitle><p style={{fontSize:"150%", color:"#ffffff"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#ffffff"}}>Head</p>
                                <p style={{color:"#ffffff"}}><span className="fa fa-phone" style={{color:"#ffffff"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#ffffff"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#ffffff"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
                <div className="row row-header mt-5 mb-5">
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                    <div className="col-12 col-md-3 mt-5 mb-5 justify-content-center">
                        <Card style={{backgroundColor:"#ffffff", boxShadow:"1px 1px 10px 10px grey"}}>
                            <CardImg  className="mt-3 mb-4" top src="assets/images/vj.jpg" style={{width:"60%", height:"60%", borderRadius:"50%", 
                            marginTop:"20px"}} 
                            alt="blood_1" />
                                <CardTitle><p style={{fontSize:"150%", color:"#000000"}}><strong>Vijay Yadav</strong></p></CardTitle>
                                <p style={{fontSize:"120%", color:"#000000"}}>Head</p>
                                <p style={{color:"#000000"}}><span className="fa fa-phone" style={{color:"#000000"}}></span> : 7898331503</p>
                                <div className="row mb-2">
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-facebook" style={{color:"#000000"}}></span></a></div>  
                                    <div className="col-6"><a href="https://fb.com" ><span className="fa fa-instagram"  style={{color:"#000000"}}></span></a></div>
                                </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Members;