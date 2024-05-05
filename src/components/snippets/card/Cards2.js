import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'holderjs'
import CardItem from './CardItem';

import './Cards.css'

function Cards() {
  return (
    <Row className="g-0 px-2 pb-4 cards grid-columns grid-cols-5 grid-cols-4 grid-cols-3 grid-cols-2 grid-cols-1">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card border='0'>
          <CardItem
              src="img-9.jpg"
              place="Egypt"
              price="12345"
              getOnDate="526"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;