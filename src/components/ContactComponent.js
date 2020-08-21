import React,{Component} from 'react';
import {Button,Modal,ModalBody,ModalFooter,ModalHeader,Form,FormGroup,Label,Input,Col} from 'reactstrap';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';

const initialState={
                 name: '',
                 email: '',
                 message: '',
                 nameErr:'',
                 emailErr:'',
                 messageErr:''
}

export class Contact extends Component {
    constructor(props) {
      super(props);

      this.state = {
                 show:false,
                 
      }
      this.state=initialState
      this.toogle=this.toogle.bind(this);
      this.submit=this.submit.bind(this);

    }

   toogle(){
     console.log("hi");
     this.setState({nameErr:"",messageErr:"",emailErr:"",name:"",email:"",message:""})
     this.setState({show:!this.state.show});
     console.log("hello");
   }

   valid(){
     var nm=true,el=true,ms=true;
     this.setState({nameErr:"",emailErr:"",messageErr:""});
     if(this.state.name==""){
       this.setState({nameErr:"*field required"})
       nm=false;
     }
     if(this.state.email==""){
      this.setState({emailErr:"*field required"})
      el=false;
    }
    if(this.state.message==""){
      this.setState({messageErr:"*field required"})
      ms=false;
    }

    return nm && ms && el ;
       
    // else if(this.state.name=="" && this.state.email==""){
    //   this.setState({nameErr:"*field required",emailErr:"Email is compulsary"})
    // }
    // else if(this.state.name==""&& this.state.message==""){
    //   this.setState({nameErr:"*field required",messageErr:"*required field"})
    // }
    // else if(this.state.email=="" && this.state.message==""){
    //   this.setState({emailErr:"Email is compulsary",messageErr:"*field required"})
    // }
    // else if(this.state.email=="" && this.sate.name==""&& this.state.message==""){
    //   this.setState({emailErr:"Email is compulsary",messageErr:"*field required",nameErr:"*required field"})
    // }
    //  else{
    //    return true;
    //  }
   }

  submit(){
    if(this.valid()){
      alert("feedback submitted")
      this.toogle();
      this.setState({nameErr:"",emailErr:"",messageErr:""});
      this.setState({name:"",email:"",message:""})
    }
    
  }


  nameChanged=(event)=>{
       this.setState({name:event.target.value})
       if(this.state.name=="")
         this.setState({nameErr:"*field is required"})
        else  
         this.setState({nameErr:""})
  }

  emailChanged=(event)=>{
    this.setState({email:event.target.value})
    if(this.state.email=="")
      this.setState({emailErr:"*field is required"})
     else  
      this.setState({emailErr:""})
  }

  messageChanged=(event)=>{
    this.setState({message:event.target.value})
    if(this.state.message=="")
      this.setState({messageErr:"*field is required"})
     else  
      this.setState({messageErr:""})
  }
  

   //  handleClose(){
    //   this.setState({show: false});
    // }
  
    // handleShow(){
    //   this.setState({show:true});// this.state={
  //   show:false,
    
    
  // }
  
  // this.handleClose=this.handleClose.bind(this);
  // this.handleShow=this.handleShow.bind(this);
  
  
    
  
    render() {
      
      
        
        
          return (
            <>
            <div className="container">
             <div className="row">
               <div className="col-12 col-sm-5 mt-5 mb-5 offset-1"><br/><br/><br/><br/><img src="../assets/images/message6.png"/>
                    <br/>
                    <button className="btn btn-outline-info btn-xl mt-4" onClick={()=>this.toogle()} style={{height:"6vh",minWidth:"20vw"}} >feedback</button>
                    <>
                    <Modal isOpen={this.state.show} centered size="lg" contentClassName="custom-modal-style">
                      <ModalHeader style={{backgroundColor:"black",color:"white"}} toggle={this.toogle}>Feedback form</ModalHeader>
                      <ModalBody>
                        <Form method="post">
                          <FormGroup row>
                            <Label htmlFor="name" md={1}>Name:</Label>
                            <Col >
                              <Input type="text" id="name" name="name" placeholder="Name"  
                                        onChange={this.nameChanged}/>
                                        <small style={{color:"red"}}>{this.state.nameErr}</small>
                            </Col>
                            <Label htmlFor="email" md={1}>Email:</Label>
                            <Col >
                              <Input type="text" id="email" name="email" placeholder="Email"
                               onChange={this.emailChanged}/>
                              <small style={{color:"red"}}>{this.state.emailErr}</small>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Label htmlFor="msg" md={2}>Message</Label>
                            <Col >
                              <textarea type="text" id="msg" name="msg" rows="4" placeholder="Message"
                               onChange={this.messageChanged}/>
                              <small style={{color:"red"}}>{this.state.messageErr}</small>
                            </Col>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-success" onClick={this.submit}>Submit</button>
                        <button className="btn btn-secondary" onClick={this.toogle}>cancel</button>
                      </ModalFooter>
                       
                    </Modal>
                    </>
               </div>
               <div className="col-12 col-sm-5 "><br/><br/><br/><br/><br/><br/>
                    <h1>FFI Contacts</h1><br/>
                   <a href="https://www.google.com/maps/dir//Student+Activity+Centre,+Indian+Institute+Of+Technology+(ISM,+Dhaiya,+Dhanbad,+Jharkhand+826004/@23.8149609,86.4365802,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f6bb5ff375fdb3:0xb7c11eafbbed071!2m2!1d86.4375175!2d23.8174231"> <i className="fa fa-map-marker fa-2x m-2" style={{backgroundColor:"#3b5998",padding:"15px",color:"white"}} id="contact"></i></a><label>IIT ISM, Dhanbad</label><br/>
                   <a><i className="fa fa-phone fa-2x m-2" style={{backgroundColor:"#3b5998",padding:"10px",color:"white"}} id="contact"></i></a><label>jharkhand,india</label><br/>
                    <i className="fa fa-envelope fa-2x m-2" style={{backgroundColor:"#3b5998",padding:"10px",color:"white"}} id="contact"></i><label>fastforwardindia.org@gmail.com</label>
                    
               </div>
           </div>
           
        </div>
        
             
             {/* <MapContainer/> */}
             <div class="earth3dmap-com">
               <iframe id="iframemap" src="https://maps.google.com/maps?q=IIT+ISM+dhanbad%2Cjharkhand%2Cindia&amp;ie=UTF8&amp;iwloc=&amp;output=embed" height="500vh" width="100%" frameborder="0" scrolling="no">
                 </iframe>
            
                  
             
           
           </div>
           
        
      
      </> 
      );
    }
  }


 export default Contact;