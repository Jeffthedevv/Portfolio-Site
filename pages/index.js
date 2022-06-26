import React from 'react';
import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from '../components/intro'
import Bio from '../components/bio'
import Lab from '../components/lab'
import Skills from '../components/skills'
import Network from '../components/network'


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
        <Row className="pt-4">
            <Col sm={{ order:'first'}} md={{ offset: 1, span: 2}} className="p-0 flex justify-content-between">
              <Row>
                <Button 
                  variant="primary"
                  value="intro"
                  onClick={this.buttonHandler}
                >Introduction</Button>
              </Row>
              <Row>
                <Button 
                  variant="primary"
                  value="bio"
                  onClick={this.buttonHandler}
                >Bio</Button>
              </Row>
              <Row>
                <Button 
                  variant="primary"
                  value="skills"
                  onClick={this.buttonHandler}
                >Skills</Button>
              </Row>
              <Row>
                <Button 
                  variant="primary"
                  value="lab"
                  onClick={this.buttonHandler}
                >Lab</Button>
              </Row>
              <Row>
                <Button 
                  variant="primary"
                  value="network"
                  onClick={this.buttonHandler}
                >Network</Button>
              </Row>
            </Col>

            <Col sm={12} md={9}>
              {pageHandler()}
            </Col>
        </Row>
      </div>   
    )
  }
}


