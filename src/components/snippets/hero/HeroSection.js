import React, { useState } from "react";
import {
  Autocomplete,
  TextField,
  ListItem,
  ListItemText,
  InputAdornment,
  ListItemIcon,
  Paper,
} from "@mui/material";
import { TravelExplore } from "@mui/icons-material";
import Flag from "react-world-flags";
import { Carousel, Container, Row } from "react-bootstrap";

import SearchComponent from "../search/search";
import ExampleCarouselImage from "../Carousel/CarouselImage";
import "../../../App.css";
import "./HeroSection.css";

const countries = [
  { code: "AE", name: "United Arab Emirates", visaTime: "2 days" },
  { code: "EG", name: "Egypt", visaTime: "9 days" },
  { code: "SG", name: "Singapore", visaTime: "10 days" },
  { code: "JP", name: "Japan", visaTime: "30 days" },
  { code: "TR", name: "Türkiye", visaTime: "24 days" },
  { code: "MY", name: "Malaysia", visaTime: "15 days" },
];

function HeroSection() {
  return (
    <Container fluid className="g-0 md:">
      <div className="hero-container">
        <Carousel fade>
          <Carousel.Item>
            <ExampleCarouselImage text="Get your visas on time, that is a promise" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Let’s Explore Your Holiday Trip" />
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage text="Receive your visas promptly, we guarantee it" />
          </Carousel.Item>
        </Carousel>
        <div class="home2-banner-content-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                
              </div>
            </div>
          </div>
        </div>
        <SearchComponent />
        {/* <video src='./videos/video-1.mp4' autoPlay loop muted /> */}
      </div>
    </Container>
  );
}

export default HeroSection;
