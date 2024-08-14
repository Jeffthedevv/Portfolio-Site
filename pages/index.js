import React from 'react';
import Head from 'next/head'

import Content from '../components/content/content'
import Link from "next/link"

import { Row, Col, Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import index from '../styles/index.module.css';


export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Head>
            <title>Welcome</title>
            <meta name="description" content="A Portfolio website for Jeffery Diaz" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Row className={`${index.wrapper} main-wrapper m-auto`}>
          <Col className={index.nav_wrapper} xs={12} md={2} xxl={1}>
            <Navbar collapseOnSelect expand="md"  id={index.bs_nav} className="navbar navbar-dark position-fixed">
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="inner-nav">
                  <Link href='#welcoming'>
                    <Button className={`${index.nav_button} active`} value="Welcome">Welcome</Button>  
                  </Link>
                  <Link href='#bio'>
                    <Button className={index.nav_button} value="Bio">Bio</Button>  
                  </Link>
                  <Link href='#skills'>
                    <Button className={index.nav_button} value="Skills">Skills</Button>  
                  </Link>
                  <Link href='#lab'>
                    <Button className={index.nav_button} value="Lab">Lab</Button>
                  </Link>
                  <Link href='#contact'>
                    <Button className={index.nav_button} value="Network">Network</Button>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col sm={12} md={10} xxl={11} className={index.content_wrapper}>
            <Content />
          </Col>
        </Row>
      </div>   
    )
  }
}


