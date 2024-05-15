import React, { useState } from 'react';
import { Card, Col, Row, Tabs, Tab } from 'react-bootstrap';
import CardItem from './CardItem';
import './Cards.css';

const cardData = [
  { src: "img-9.jpg", place: "Egypt", price: "12345", getOnDate: "16 May, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Turkey", price: "12345", getOnDate: "20 May, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Austria", price: "12345", getOnDate: "27 May, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Australia", price: "12345", getOnDate: "16 May, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "India", price: "12345", getOnDate: "05 Jun, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Sudan", price: "12345", getOnDate: "16 Jun, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Iran", price: "12345", getOnDate: "20 Jun, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Iceland", price: "12345", getOnDate: "16 Jul, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Cuba", price: "12345", getOnDate: "25 Jul, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
  { src: "img-9.jpg", place: "Mali", price: "12345", getOnDate: "30 Jul, 10:59 PM", text: "Explore the hidden waterfall deep inside the Amazon Jungle", label: "Adventure", path: "/services/activity" },
];

function Cards() {
  const [key, setKey] = useState('All');

  const sortData = (data, criteria) => {
    switch(criteria) {
      case 'alphabeticalAsc':
        return [...data].sort((a, b) => a.place.localeCompare(b.place));
      case 'alphabeticalDesc':
        return [...data].sort((a, b) => b.place.localeCompare(a.place));
      default:
        return data;
    }
  };

  const sortedData = sortData(cardData, key);

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="alphabeticalAsc" title="All">
        </Tab>
        <Tab eventKey="alphabeticalAsc" title="Alphabetical Ascending">
        </Tab>
        <Tab eventKey="alphabeticalDesc" title="Alphabetical Descending">
        </Tab>
      </Tabs>
      <Row className="g-0 px-2 pb-4 cards grid-columns">
        {sortedData.map((data, idx) => (
          <Col key={idx}>
            <Card border='0'>
              <CardItem {...data} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
