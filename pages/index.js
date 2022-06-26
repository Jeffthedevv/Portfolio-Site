import React from 'react';
import Head from 'next/head'
import { Row, Col, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from '../components/intro/intro'
import Bio from '../components/bio/bio'
import Lab from '../components/lab/lab'
import Skills from '../components/skills/skills'
import Network from '../components/network/network'

import index from '../styles/index.module.css'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.setState({ page:'' })
  }
  
  componentWillMount() {
    this.setState({ page: 'intro' })
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
        case "intro":
          return <Intro />
        case "bio":
          return <Bio/>
        case "lab":
          return <Lab/>
        case "skills":
          return <Skills/>
        case "network":
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
            <Col 
              id={index.lg_nav_wrapper}
              className={index.nav_wrapper}
              md={{ span: 2 }} 
            >
              <Button 
                className={`${index.nav_button} active`}
                variant="primary"
                value="intro"    
                aria-pressed="true"              
                onClick={this.buttonHandler}
              >Introduction</Button>
              <Button 
                className={index.nav_button}
                variant="primary"
                value="bio"
                aria-pressed="true"
                onClick={this.buttonHandler}
              >Bio</Button>
              <Button 
                className={index.nav_button}
                variant="primary"
                value="skills"
                aria-pressed="false"
                onClick={this.buttonHandler}
              >Skills</Button>
              <Button 
                className={index.nav_button}
                variant="primary"
                value="lab"
                aria-pressed="false"
                onClick={this.buttonHandler}
              >Lab</Button>
              <Button             
                className={index.nav_button}
                variant="primary"
                value="network"
                onClick={this.buttonHandler}
              >Network</Button>
            </Col>

            <Col 
              id={index.sm_nav_wrapper}
              className={index.nav_wrapper}
              xs={12} 
            >
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.state.page}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Button 
                className={`${index.nav_button} active`}
                variant="primary"
                value="intro"    
                aria-pressed="true"              
                onClick={this.buttonHandler}
                  >Introduction</Button>
                  <Button 
                    className={index.nav_button}
                    variant="primary"
                    value="bio"
                    aria-pressed="true"
                    onClick={this.buttonHandler}
                  >Bio</Button>
                  <Button 
                    className={index.nav_button}
                    variant="primary"
                    value="skills"
                    aria-pressed="false"
                    onClick={this.buttonHandler}
                  >Skills</Button>
                  <Button 
                    className={index.nav_button}
                    variant="primary"
                    value="lab"
                    aria-pressed="false"
                    onClick={this.buttonHandler}
                  >Lab</Button>
                  <Button             
                    className={index.nav_button}
                    variant="primary"
                    value="network"
                    onClick={this.buttonHandler}
                  >Network</Button>
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


