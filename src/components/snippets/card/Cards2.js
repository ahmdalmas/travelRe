import React, { useState } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import moment from 'moment';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Box, Typography } from '@mui/material';
import { FilterAlt } from '@mui/icons-material';
import PropTypes from 'prop-types';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';

import CardItem from './CardItem';
import './Cards.css';
import './Transitions.css';


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

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const instant = (date) => {
  const now = moment();
  const targetDate = moment(date, 'DD MMM, hh:mm A');
  return targetDate.diff(now, 'days') <= 2;
};

const isInAWeek = (date) => {
  const now = moment();
  const targetDate = moment(date, 'DD MMM, hh:mm A');
  return targetDate.diff(now, 'days') <= 7;
};

const isInAMonth = (date) => {
  const now = moment();
  const targetDate = moment(date, 'DD MMM, hh:mm A');
  return targetDate.diff(now, 'days') <= 30;
};

function Cards() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showTabs, setShowTabs] = useState(false);

  const handleFilterClick = () => {
    setShowTabs(!showTabs);
  };
  const [key, setKey] = useState('all');

  const filterData = (data, criteria) => {
    switch (criteria) {
      case 'all':
        return data;
      case 'instant':
        return data.filter(card => instant(card.getOnDate));
      case 'inAWeek':
        return data.filter(card => isInAWeek(card.getOnDate));
      case 'inAMonth':
        return data.filter(card => isInAMonth(card.getOnDate));
      default:
        return data;
    }
  };

  const filteredData = filterData(cardData, key);

  return (
      <Container fluid>
        <div className='d-flex justify-content-between align-content-center'>
          <h3 className='m-1'>Explore All Visas</h3>
          <FilterAlt className='align-self-center' onClick={handleFilterClick} style={{ cursor: 'pointer' }} />
        </div>
        <div className='d-flex justify-content-center align-content-center'>
          {showTabs && (
            <Box sx={{ width: '100%' }}>
              <Box sx={{}}>
                <div className='d-flex justify-content-center p-3'>
                  <Tabs key={key} defaultValue={key} onChange={(event, newValue) => setKey(newValue)} sx={{ bgcolor: 'transparent'}}>
                    <TabList
                      disableUnderline
                      sx={{
                        p: 0.5,
                        gap: 0.5,
                        justifyContent: 'center',
                        borderRadius: 'xl',
                        bgcolor: 'background.level3',
                        [`& .${tabClasses.root}[aria-selected="true"]`]: {
                          boxShadow: 'sm',
                          bgcolor: '#051142',
                          color:'#fff',
                        },
                      }}
                    >
                      <Tab disableIndicator value="all">All</Tab>
                      <Tab disableIndicator value="instant">Instant</Tab>
                      <Tab disableIndicator value="inAWeek">This Week</Tab>
                      <Tab disableIndicator value="inAMonth">This Month</Tab>
                    </TabList>
                  </Tabs>
                </div>
              </Box>
            </Box>
          )}
        </div>

        <TransitionGroup as={Row} className="g-0">

          <div className='cards grid-columns'>
            {filteredData.map((data, idx) => (
              <CSSTransition key={idx} timeout={300} classNames="fade">
                <Col>
                  <Card border='0'>
                    <CardItem {...data} />
                  </Card>
                </Col>
              </CSSTransition>
            ))}
          </div>
        </TransitionGroup>
      </Container>
  );
}

export default Cards;
