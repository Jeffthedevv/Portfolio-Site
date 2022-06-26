import React from 'react';
import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap'
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
      console.log("state: ", this.state)
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
            <Col xs={{ order: 'first'}} sm={{ span: 12 }} md={{ span: 2 }} className={index.nav_wrapper}>
                <Button 
                  className={index.nav_button}
                  variant="primary"
                  value="intro"
                  onClick={this.buttonHandler}
                >Introduction</Button>
                <Button 
                  className={index.nav_button}
                  variant="primary"
                  value="bio"
                  onClick={this.buttonHandler}
                >Bio</Button>
                <Button 
                  className={index.nav_button}
                  variant="primary"
                  value="skills"
                  onClick={this.buttonHandler}
                >Skills</Button>
                <Button 
                  className={index.nav_button}
                  variant="primary"
                  value="lab"
                  onClick={this.buttonHandler}
                >Lab</Button>
                <Button 
                  className={index.nav_button}
                  variant="primary"
                  value="network"
                  onClick={this.buttonHandler}
                >Network</Button>
            </Col>

            <Col sm={12} md={10} className={index.content_wrapper}>
              {pageHandler()}
            </Col>
        </Row>
      </div>   
    )
  }
}


