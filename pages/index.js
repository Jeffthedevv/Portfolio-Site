import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home( {...pageProps} ) {



  return (
    <>
      <Head>
          <title>Welcome</title>
          <meta name="description" content="A Portfolio website for Jeffery Diaz" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row className="pt-4">
          <Col sm={{ order:'first'}} md={{ offset: 1, span: 2}} className="p-0 flex justify-content-between">
            <Row>
              <Button variant="primary">Introduction</Button>
            </Row>
            <Row>
              <Button variant="primary">Bio</Button>
            </Row>
            <Row>
              <Button variant="primary">Skills</Button>
            </Row>
            <Row>
              <Button variant="primary">Lab</Button>
            </Row>
            <Row>
              <Button variant="primary">Network</Button>
            </Row>
          </Col>


          <Col sm={12} md={9}>

          </Col>

      </Row>

    </>
  )
}
