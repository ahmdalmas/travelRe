import React from "react";
import IconButton from "@mui/material/IconButton";
import * as Micons from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import {
  BottomNavigation,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav, NavDropdown, Navbar } from "react-bootstrap";

import Footer from "../../snippets/footer/Footer";
import "./Destination.css";

export default function Destination() {
  let threeToursFee = 0;
  const [count, setCount] = React.useState(1);
  const [openTooltip1, setOpenTooltip1] = React.useState(false);
  const [openTooltip2, setOpenTooltip2] = React.useState(false);

  const handleTooltip1Open = () => {
    setOpenTooltip1(true);
  };

  const handleTooltip1Close = () => {
    setOpenTooltip1(false);
  };

  const handleTooltip2Open = () => {
    setOpenTooltip2(true);
  };

  const handleTooltip2Close = () => {
    setOpenTooltip2(false);
  };

  if (count > 1) {
    threeToursFee = 700 * count;
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container>
        <Row>
          <div className="destination">
            <Typography variant="h3" className="destination-heading">
              Egypt Visa
            </Typography>
            <div className="caroussel-container">
              <Carousel
                fade
                className="position-sticky"
                interval={50000}
                controls={false}
              >
                <Carousel.Item>
                  <div className="carousel-item-content">
                    <div className="image-container">
                      <img
                        className="d-block carousel-img"
                        src={require("./destination2.jpg")}
                        alt="First slide"
                      />
                      <div className="image-overlay"></div>
                    </div>
                    <Carousel.Caption className="text-dark">
                      <div className="caption-content">
                        <h3 className="h3-1">Egypt</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block carousel-img"
                    src={require("./destination-4.jpg")}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 className="h3-1">Second slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block carousel-img"
                    src={require("./destination-5.jpg")}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3 className="h3-1">Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="px-75rem">
              <div className="booking-container md:hidden align-self-center">
                <div className="booking-wrapper">
                  <section className="booking-info">
                    <div className="d-flex w-100 flex-column gap-4">
                      <div className="d-flex flex-row align-items-center justify-content-between gap-2">
                        <div className="d-flex">
                          <Micons.People />
                          <p className="ps-1 m-0">Travellers</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <IconButton
                            className="me-2"
                            aria-label="reduce"
                            onClick={() => {
                              setCount(Math.max(count - 1, 1));
                            }}
                            color="primary"
                          >
                            <Micons.PersonRemove fontSize="small" />
                          </IconButton>
                          {count}
                          <IconButton
                            className="ms-2"
                            aria-label="increase"
                            onClick={() => {
                              setCount(count + 1);
                            }}
                            color="primary"
                          >
                            <Micons.PersonAdd fontSize="small" />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex flex-column">
                      <div className="price-container">
                        <h5>Pricing</h5>
                        <div className="d-flex justify-content-between align-items-center pt-1">
                          <div className="d-flex">
                            <p className="per-person">Visa Rate</p>
                            <Tooltip
                              arrow
                              placement="right"
                              PopperProps={{
                                disablePortal: true,
                              }}
                              open={openTooltip1}
                              onOpen={handleTooltip1Open}
                              onClose={handleTooltip1Close}
                              title="Fee charged by the embassy to process your visa. This includes all taxes and is directly paid to the government."
                            >
                              <Micons.InfoOutlined
                                fontSize=""
                                onClick={handleTooltip1Open}
                                onMouseLeave={handleTooltip1Close}
                                className="mt-1 ms-1"
                              ></Micons.InfoOutlined>
                            </Tooltip>
                          </div>
                          <p>₹ 78 x {count}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex">
                            <p className="per-person">3Tours Fees</p>
                            <Tooltip
                              arrow
                              placement="right"
                              PopperProps={{
                                disablePortal: true,
                              }}
                              open={openTooltip2}
                              onOpen={handleTooltip2Open}
                              onClose={handleTooltip2Close}
                              title="3Tours platform and service fee. You pay this only when we fulfil our on-time promise."
                            >
                              <Micons.InfoOutlined
                                fontSize=""
                                onClick={handleTooltip2Open}
                                onMouseLeave={handleTooltip2Close}
                                on={handleTooltip2Close}
                                className="mt-1 ms-1"
                              ></Micons.InfoOutlined>
                            </Tooltip>
                          </div>
                          <div className="d-flex">
                            <p
                              style={{
                                textDecoration:
                                  count > 1 ? "line-through" : "none",
                                display: count == 1 ? "none" : "block",
                              }}
                              className="px-2"
                            >
                              ₹ {threeToursFee}{" "}
                            </p>
                            {count > 1 && (
                              <Chip
                                variant="filled"
                                color="success"
                                size="small"
                                label={count > 3 ? "50% OFF" : "30% OFF"}
                              />
                            )}
                            <p className={count > 1 && "ps-2"}>
                              ₹{" "}
                              {(count > 1 &&
                                count < 4 &&
                                threeToursFee - threeToursFee * 0.3) ||
                                (count > 3 && threeToursFee - threeToursFee * 0.5) ||
                                threeToursFee}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between fw-bold">
                          <h5 className="fw-bold">Total Amount</h5>
                          <p>₹ {78 * count}</p>
                        </div>
                      </div>
                      <div className="booking-button">
                        <button type="button" className="btn-book">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="getOnTime justify-content-center">
                  <Micons.VerifiedUser className="fs-3rem" color="primary" />
                  <div className="d-grid justify-content-center align-content-center">
                    <p className="p-0 ps-2 m-0 fs-small">Visa guaranteed on</p>
                    <p className="p-0 ps-2 m-0 fs-small fw-bolder">[DATE]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="destination-container">
            <Col className="d-block">
              <div className="box-container w-100">
                <div className="booking-wrapper">
                  <section className="booking-info"></section>
                </div>
                <div className="d-flex justify-content-center">
                  <Micons.VerifiedUser className="fs-3rem" color="primary" />
                  <div className="d-grid justify-content-center align-content-center">
                    <p className="p-0 ps-2 m-0 fs-small">Visa guaranteed on</p>
                    <p className="p-0 ps-2 m-0 fs-small fw-bolder">[DATE]</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  className="justify-content-center"
                >
                  <Item className="card pt-3 justify-content-start w-50 text-dark rounded-3">
                    <div className="d-flex ">
                      <div className="pt-2 pb-3 px-2 align-content-center">
                        {" "}
                        <Micons.CalendarMonthRounded />
                      </div>
                      <div className="align-self-start">
                        <p className="mb-1 fw-600">Validy Period</p>
                        <p className="m-0">60 days</p>
                      </div>
                    </div>
                    <Divider
                      sx={{ opacity: 1 }}
                      className="m-3"
                      variant="inset"
                    />
                    <div className="d-flex mb-2">
                      <div className="pt-2 pb-3 px-2 align-content-center">
                        {" "}
                        <Micons.ExitToApp />
                      </div>
                      <div className="align-self-start">
                        <p className="mb-1 fw-600">Entry</p>
                        <p className="m-0">Single</p>
                      </div>
                    </div>
                  </Item>
                  <Item className="w-50 p-0 rounded-3">
                    <div
                      className="card mb-3 h-100"
                      style={{ maxWidth: "100%" }}
                    >
                      <div className="d-flex card-header">
                        <div className="align-self-center">
                          <Micons.TextSnippet />
                        </div>
                        <div className="p-2 fw-bold">Document Required</div>
                      </div>
                      <div className="card-body px-3 pt-2 pb-0 align-content-center">
                        <div className="d-flex align-self-center">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">Photo</p>
                        </div>
                      </div>
                      <div className="card-body px-3 pb-2 pt-0 align-content-center">
                        <div className="d-flex">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">Passport</p>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Stack>
              </div>
            </Col>
            {/* <Col className='md:d-block'>
              <div className='box-container w-100'>
                <div className='booking-wrapper'>
                  <section className='booking-info'>
                  </section>
                </div>
                <div className='d-flex justify-content-center'>
                  <Micons.VerifiedUser className='fs-3rem' color='primary' />
                  <div className='d-grid justify-content-center align-content-center'>
                    <p className='p-0 ps-2 m-0 fs-small'>Visa guaranteed on</p>
                    <p className='p-0 ps-2 m-0 fs-small fw-bolder'>[DATE]</p>
                  </div>
                </div>
              </div>
            </Col> */}

            <Paper
              sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
              elevation={15}
              className="paper-container align-content-center bottom-nav"
            >
              <BottomNavigation>
                <Row className="justify-content-between w-100">
                  <Col className="align-content-center width">
                    <p className="m-0">
                      Get<span className="fw-bold"> Egypt </span>Visa on
                    </p>
                    <p className="m-0">[DATE]</p>
                  </Col>
                  <Col className="align-content-center justify-content-center w-100">
                    <button className="bottom-nav-btn w-100" type="submit">
                      Start Application
                    </button>
                  </Col>
                </Row>
              </BottomNavigation>
            </Paper>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
