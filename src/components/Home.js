import React, {Component} from 'react';
import { NavbarData } from './Navbar';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    date: new Date()
  };

  counting(){
    setInterval(()=> {
      this.setState({date : new Date()});
    }, 1000);
  }

  render(){
      return(
      <body background="/assets/img/bg-img.png">
      <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#" style={{paddingLeft: '55px'}}>
                      <img src="/assets/img/logo-ALTA.png" alt="" className="d-inline-block" style={{width: '100.75px', height: '50px'}}/>
                  </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to={NavbarData[0].path} className="nav-menu nav-link" style={{color: '#F47522'}}>HOME</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[1].path} className="nav-menu nav-link" style={{color: '#19345E'}}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[2].path} className="nav-menu nav-link" style={{color: '#19345E'}}>EXPERIENCE</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={NavbarData[3].path} className="nav-menu nav-link" style={{paddingRight: '55px', color: '#19345E'}}>CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      </header>
      <div className="row">
          <h5>{this.state.date.toLocaleTimeString()}</h5>
          {this.counting()}
        <div className="col-sm-5">
          <img id="logo" src="/assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" style={{width: '300px', height: '300px'}} alt=""/>
        </div>
        <div className="text-highlight col-sm-7" style={{marginTop: '160px'}}>
          <h4 className="content-text" style={{fontSize: '25px'}}>Hi, my name is</h4>
          <h1 className="context-text" style={{fontSize: '85px'}}><strong>Anne Sullivan</strong></h1>
          <h2 className="content-text" style={{fontSize: '35px'}}>I build things for the web</h2>
          <a className="btn btn-1" href="./contact_us.html" role="button">Get In Touch</a>
        </div>
      </div>     
      </body>
    )
  };
};

export default Home;