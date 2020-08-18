import React from 'react';
import bgimage from '../components/b_heritage.png';


function Footer(props) {
    return(
    <div className="footer mt-5 fixed-bottom">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-lg-6 col-sm-12 text-center">
                    <h4 style={{ color: "#FF0" }}>Quick Links</h4>
                    <ul className="list-unstyled">
                        <li><a href="#"><span style={{color:"white"}}>Home</span></a></li>
                        <li><a href="#"><span style={{color:"white"}}>About</span></a></li>
                        <li><a href="#"><span style={{color:"white"}}>Initiatives</span></a></li>
                        <li><a href="#"><span style={{color:"white"}}>Members</span></a></li>
                        <li><a href="#"><span style={{color:"white"}}>Donate</span></a></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-12 text-center">
                    <h4 className="footer-head" style={{ color: "#FF0" }}>Our Address</h4>
                    <address>
                        <span style={{color:"white", fontSize: "17px"}}>
                            Indian Insitute of Technology,<br />
                            (Indian School of Mines), Dhanbad,<br />
                            Jharkhand, India - 826004<br />
                            {/* <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br /> */}
                            <i className="fa fa-envelope fa-lg"></i>&nbsp;: <a href="mailto:ffi@iitism.ac.in">
                            <span style={{color:"white"}}>
                                ffi@iitism.ac.in </span> </a>
                        </span>   
                    </address>
                </div>
        
                <div className="col-lg-12 col-sm-12 align-self-center">
                    <div className="text-center">
                        <br />
                        <a className="btn btn-social-icon btn-instagram mt-1" href="http://google.com/+"><i className="fa fa-instagram"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-facebook mt-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-linkedin mt-1" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-twitter mt-1" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>&nbsp;
                        <a className="btn btn-social-icon btn-google mt-1" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>&nbsp;
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p><span style={{color:"white", fontSize:"10px"}}>© Copyright 2020 Fast Forward India</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;