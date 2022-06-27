import React from 'react';
import Head from 'next/head'

import Intro from '../components/intro/intro'
import Bio from '../components/bio/bio'
import Lab from '../components/lab/lab'
import Skills from '../components/skills/skills'
import Network from '../components/network/network'

import { Row, Col, Button, Navbar, Nav, Collapse } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import index from '../styles/index.module.css'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.setState({ page:'' })
    
  }

  UNSAFE_componentWillMount() {
    this.setState({ page: 'Welcome' })
  }

  buttonHandler = (event) => {    
    this.setState({
      page: event.target.value
    })
  }

  render() {
    const pageHandler = () => {
      switch(this.state.page)
      {
        case "Welcome":
          return <Intro />
        case "Bio":
          return <Bio/>
        case "Lab":
          return <Lab/>
        case "Skills":
          return <Skills/>
        case "Network":
          return <Network/>
      }
    }

    return (
      <div>
        <Head>
            <title>Welcome</title>
            <meta name="description" content="A Portfolio website for Jeffery Diaz" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row className={`${index.wrapper} main-wrapper`}>
          <Col id={index.sm_nav_wrapper} className={index.nav_wrapper} xs={12} md={2}>
            <Navbar collapseOnSelect expand="md"  id={index.bs_nav}>
              <Navbar.Brand>{this.state.page}</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="inner-nav">
                  <Nav.Link href='#'>
                    <Button className={`${index.nav_button} active`} value="Welcome" onClick={this.buttonHandler}>Welcome</Button>  
                  </Nav.Link>
                  <Nav.Link href='#'>
                    <Button className={index.nav_button} value="Bio" onClick={this.buttonHandler}>Bio</Button>  
                  </Nav.Link>
                  <Nav.Link href='#'>
                    <Button className={index.nav_button} value="Skills" onClick={this.buttonHandler}>Skills</Button>  
                  </Nav.Link>
                  <Nav.Link href='#'>
                    <Button className={index.nav_button} value="Lab" onClick={this.buttonHandler}>Lab</Button>
                  </Nav.Link>
                  <Nav.Link href='#'>
                    <Button className={index.nav_button} value="Network" onClick={this.buttonHandler}>Network</Button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col sm={12} md={10} className={index.content_wrapper}>
            {pageHandler()}
          </Col>
        </Row>
      </div>   
    )
  }
}


