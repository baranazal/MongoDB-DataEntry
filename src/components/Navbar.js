import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import '../button.css'

const Navigation = () => {
  const [currentTime, setCurrentTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // return (
  //   <Navbar className="custom-navbar " bg="light" expand="lg ">
  //     <Container className="container-class">
  //       <Navbar.Brand className="custom-navbar-brand  brand" as={Link} to="/">
  //         ReportEase
  //       </Navbar.Brand>
        
  //       <Nav className="me-auto custom-nav links">
  //         <button className="nav-link">
  //           <Nav.Link className="custom-nav-link  " as={Link} to="/form">
  //             Form
  //           </Nav.Link>
  //         </button>

  //         <button className="nav-link">
  //           <Nav.Link className="custom-nav-link " as={Link} to="/datatable">
  //             DataTable
  //           </Nav.Link>
  //         </button>
  //         <Nav.Item className="custom-nav-item nav-link">
  //           {currentTime}
  //         </Nav.Item>
  //       </Nav>
  //     </Container>
  //   </Navbar>
  // );

  return (
    <Navbar className="custom-navbar " bg="light" expand="lg ">
      <Container className="container-class">
        <Navbar.Brand className="custom-navbar-brand  brand" as={Link} to="/">
          ReportEase
        </Navbar.Brand>
  
        <Nav className="me-auto custom-nav links">
          <Nav.Link className="custom-nav-link nav-link blob-btn" as={Link} to="/form">
            Form
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </Nav.Link>
  
          <Nav.Link className="custom-nav-link nav-link blob-btn" as={Link} to="/datatable">
            DataTable
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </Nav.Link>
          <Nav.Item className="custom-nav-item nav-link">
            <div>{currentTime.date}</div>
            <div>{currentTime.time}</div>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
  
};

export default Navigation;
