import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content1 from './../assets/hero1.jpg';

export default function Main() {
  return (
    <Row xs={1} md={2} className="g-4 mt-5">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={content1} mt-5 />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

