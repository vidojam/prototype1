import { Container, Row, Col } from "react-bootstrap";

import Layout from "../layout/AppLayout.jsx";

export default function About() {
  return (
    <Layout>
      <Container id="about">
        <Row>
          <Col className="text-center">
            <h2>About</h2>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col md={7}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit iusto voluptates eos iste itaque sapiente, repellendus suscipit obcaecati, cumque dolore nesciunt, ea et officia vero.
          </p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam magni necessitatibus voluptatem nemo, laudantium at reprehenderit eum qui quaerat, voluptate libero sed velit dignissimos, iste fugit maxime quisquam harum delectus. Assumenda dolores tenetur ducimus natus eius blanditiis consequuntur quis.
            </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptas cum quo deleniti cumque ullam, veritatis repellendus mollitia eaque rerum et. Optio impedit doloremque vitae quaerat assumenda, odit quasi magni consequuntur, provident esse eos laborum officia nulla quod ipsum. Harum temporibus nisi eveniet inventore natus.
          </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )  
}