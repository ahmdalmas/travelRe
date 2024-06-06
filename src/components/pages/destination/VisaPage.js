import Footer from "../../snippets/footer/Footer";
import "./VisaPage.css";

import styledComponent from "styled-components";
import { Chip, styled } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as Micons from "@mui/icons-material";
import { Divider, Paper, Stack } from "@mui/material";

const H6 = styledComponent.h6`
  font-size: 24px;
  color: #333;
`;

function VisaPage() {
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
    <div>
      <div class="visa-details-pages pt-120 mb-120">
        <div class="container">
          <div class="row g-lg-4 gy-5">
            <div class="col-lg-8">
              <div class="visa-thumb">
                <div className="caroussel-container">
                  <Carousel
                    fade
                    className="position-sticky"
                    interval={5000}
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
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block carousel-img"
                        src={require("./destination-4.jpg")}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block carousel-img"
                        src={require("./destination-5.jpg")}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="px-75rem Booking-container">
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
                                (count > 3 &&
                                  threeToursFee - threeToursFee * 0.5) ||
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
              <div class="visa-title">
                <h3>Apply for Egypt Visa</h3>
              </div>
              <div className="mt-5">
                <Stack
                  direction="row"
                  spacing={2}
                  className="stacked-visa-details justify-content-center"
                >
                  <Item className="card pt-3 justify-content-start w-100 text-dark rounded-3">
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
                </Stack>
              </div>
              {/* <ul class="visa-meta">
                <li>
                  <span>Country :</span> New York
                </li>
                <li>
                  <span>Visa Type :</span> Tourist
                </li>
                <li>
                  <span>Maximum Sta ys :</span> 30 Days
                </li>
                <li>
                  <span>Processing Time :</span> 7-10 Working Day
                </li>
                <li>
                  <span>Validity :</span> 60 Days
                </li>
                <li>
                  <span>Visa Mode :</span> Electronic
                </li>
              </ul> */}
              <div className="mt-5">
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  className="justify-content-center"
                >
                  <Item className="w-100 p-0 rounded-3">
                    <div
                      className="card mb-3 h-100"
                      style={{ maxWidth: "100%" }}
                    >
                      <div className="d-flex card-header">
                        <div className="align-self-center">
                          <Micons.TextSnippet />
                        </div>
                        <div className="p-2 fw-bold">
                          View Required Documents
                        </div>
                      </div>
                      <div className="card-body px-3 pt-2  align-content-center">
                        <div className="d-flex align-self-center">
                          <H6>
                            <span>*</span>Required Documents for Electronic Visa
                            (Adult) with Insurance
                          </H6>
                        </div>
                      </div>
                      <div className="card-body px-4 pt-0  align-content-center">
                        <div className="d-flex align-self-center">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">
                            Passport Scan Copy: Clearly scanned Passport copy
                            required. Minimum of 6 months validity required from
                            the arrival date.
                          </p>
                        </div>
                      </div>
                      <div className="card-body px-4 pt-2 pt-0 align-content-center">
                        <div className="d-flex">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">
                            Previous Visa copy: If traveler has previous travel
                            history on countries like Thailand, Malaysia,
                            Singapore, USA, UK and so on, need those clear VISA
                            scanned copy.
                          </p>
                        </div>
                      </div>
                      <div className="card-body px-4 pt-2  align-content-center">
                        <div className="d-flex align-self-center">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">
                            Photo Specification: Passport Size Photo with White
                            Background (clear scanned Copy required)
                          </p>
                        </div>
                      </div>
                      <div className="card-body px-4 pt-2 pt-0 align-content-center">
                        <div className="d-flex">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">
                            Flight and hotel reservations booking with dates
                            clearly stated (DO NOT purchase until visa approval)
                          </p>
                        </div>
                      </div>
                      <div className="card-body px-4 pt-2  align-content-center">
                        <div className="d-flex align-self-center">
                          <Micons.DocumentScanner />
                          <p className="m-0 ms-2">
                            Processing time 7 working days.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Stack>
              </div>
              <h4 class="widget-title mb-30">
                FAQ - General Visa Information:
              </h4>
              <div class="faq-content">
                <div class="accordion" id="accordionTravel">
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography>Accordion 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography>Accordion 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                  {/* <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseOne"
                        aria-expanded="true"
                        aria-controls="travelcollapseOne"
                        fdprocessedid="cdo7l5"
                      >
                        01. Can I fill in my visa application in a language
                        other than English?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="travelheadingOne"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        No. At Present our online application system only
                        supports applications made in English.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseTwo"
                        aria-expanded="false"
                        aria-controls="travelcollapseTwo"
                        fdprocessedid="e2fexrd"
                      >
                        02. Will I be able to access the online application
                        system using my computer?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingTwo"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        We are doing our best to support as many computers,
                        operating systems and internet browsers as possible but
                        due to the technologies we use for our online
                        application system, there are certain browsers we
                        exclude due to their age or design. Currently our site
                        is tested at IE 5.0 or later and Mozilla Firefox 3.5 or
                        later.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseThree"
                        aria-expanded="false"
                        aria-controls="travelcollapseThree"
                        fdprocessedid="5dvdb9"
                      >
                        03. Can I save my application mid-way through the
                        application process?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingThree"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        Yes. You can save your online visa application wherever
                        you see the "Save &amp; Exit" icon. To login again and
                        complete your application, you will require your unique
                        "Visa Application Id". This number will have been sent
                        to the email address that you supplied in your
                        application security details.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFour"
                        aria-expanded="false"
                        aria-controls="travelcollapseFour"
                        fdprocessedid="xx6sa"
                      >
                        04. I do not understand one of the questions. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingFour"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        Throughout the online form we have added "More Info"
                        icons to some questions that might require further
                        guidance.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseFive"
                        aria-expanded="false"
                        aria-controls="travelcollapseFive"
                        fdprocessedid="nwusph"
                      >
                        05. I made a mistake on one of my answers. Can I change
                        it?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingFive"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        If you didn't submit your application finally you can do
                        the change. After submitting the application you can't
                        change it.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSix"
                        aria-expanded="false"
                        aria-controls="travelcollapseSix"
                        fdprocessedid="hp1he9"
                      >
                        06. The date I entered is not being accepted. What is
                        the correct format?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingSix"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        All date fields in our forms are set up in the following
                        format: dd/mm/yyyy (for example 21/08/2011).
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingSevene">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseSevene"
                        aria-expanded="false"
                        aria-controls="travelcollapseSevene"
                        fdprocessedid="yzjpeu"
                      >
                        07. I have not received my Completed Application
                        confirmation email. Can you resend it to me?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseSevene"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingSevene"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        Yes. But please check first that your inbox has not
                        treated our email confirmation as SPAM and that you have
                        given us the correct email address. If you have not
                        received your confirmation email after 24 hours please
                        contact us through Complain and Feedback link.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="travelheadingEight">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#travelcollapseEight"
                        aria-expanded="false"
                        aria-controls="travelcollapseEight"
                        fdprocessedid="xzuk2"
                      >
                        08. I am unable to retrieve my application. What can I
                        do?
                      </button>
                    </h2>
                    <div
                      id="travelcollapseEight"
                      class="accordion-collapse collapse"
                      aria-labelledby="travelheadingEight"
                      data-bs-parent="#accordionTravel"
                    >
                      <div class="accordion-body">
                        This could be because you did not save your application
                        by selecting the "Save &amp; Exit" option flagged by the
                        following image on the application form or your did not
                        retrieve your application within 7 days of last saving
                        it. If you are sure you saved your application in the
                        last seven days, empty your browser cache(temporary
                        internet files) and try again.
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="visa-sidebar mb-30">
                <div className="sidebar-top text-center">
                  <div className="px-75rem">
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
                                    (count > 3 &&
                                      threeToursFee - threeToursFee * 0.5) ||
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
                      <Micons.VerifiedUser
                        className="fs-3rem"
                        color="primary"
                      />
                      <div className="d-grid justify-content-center align-content-center">
                        <p className="p-0 ps-2 m-0 fs-small">
                          Visa guaranteed on
                        </p>
                        <p className="p-0 ps-2 m-0 fs-small fw-bolder">
                          [DATE]
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="banner2-card">
                <img src="/assets/img/innerpage/support-img.jpg" alt="" />
                <div class="banner2-content-wrap">
                  <div class="banner2-content">
                    <div class="hotline-area">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                        >
                          <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z"></path>
                          <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z"></path>
                          <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z"></path>
                        </svg>
                      </div>
                      <div class="content">
                        <span>To More Inquiry</span>
                        <h6>
                          <a href="tel:+990737621432">+990-737 621 432</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="col-lg-4">
              <div className="visa-sidebar mb-30">
                <div className="sidebar-top text-center"></div>
              </div>
              {/* <div class="banner2-card">
                <img src="/assets/img/innerpage/support-img.jpg" alt="" />
                <div class="banner2-content-wrap">
                  <div class="banner2-content">
                    <div class="hotline-area">
                      <div class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                        >
                          <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z"></path>
                          <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z"></path>
                          <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z"></path>
                        </svg>
                      </div>
                      <div class="content">
                        <span>To More Inquiry</span>
                        <h6>
                          <a href="tel:+990737621432">+990-737 621 432</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VisaPage;
