import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='footer-top'>
          <div className='row g-lg-4 gy-5 justify-content-center'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='footer-widget'>
                <div class="footer-logo">
                  <a href="/">
                    <img src="/assets/img/logo2.svg" alt="logogoeshere" />
                    <h3>Want<span>to Take <br /></span>Tour Packages<span>?</span></h3>
                    <a class="primary-btn1" href="/package">Book A Tour</a>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start'>
              <div class="footer-widget">
                <div class="widget-title">
                  <h5>Quick Link</h5>
                </div>
                <ul class="widget-list">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/destination">Destinations</a></li>
                  <li><a href="/package-grid">Tour Package</a></li>
                  <li><a href="/guide2">Tour Guide</a></li>
                  <li><a href="/blog-grid">Article</a></li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 d-flex justify-content-lg-center justify-content-md-start'>
              <div class="footer-widget">
                <div class="single-contact mb-30">
                  <div class="widget-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    </svg>
                    <h5>Address</h5>
                  </div>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">House 168/170, Avenue 01, Mirpur <br /> DOHS, Dhaka Bangladesh</a>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end'>
              <div class="footer-widget">
                <div class="widget-title">
                  <h5>We Are Here</h5>
                </div>
                <p>Quisque purus augue, facilisis andi neque idont accumsan fringilla massa. Vivamusol id nibhom condimentum.</p>
                <div class="payment-partner">
                  <div class="widget-title">
                    <h5>Payment Partner</h5>
                  </div>
                  <div class="icons">
                    <ul>
                      <li><img src="/assets/img/home1/icon/visa-logo.svg" alt="" /></li>
                      <li><img src="/assets/img/home1/icon/stripe-logo.svg" alt="" /></li>
                      <li><img src="/assets/img/home1/icon/paypal-logo.svg" alt="" /></li>
                      <li><img src="/assets/img/home1/icon/woo-logo.svg" alt="" /></li>
                      <li><img src="/assets/img/home1/icon/skrill-logo.svg" alt="" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col-lg-12 d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center flex-wrap gap-3">
              <ul class="social-list">
                <li><a href="https://www.facebook.com/"><i class="bx bxl-facebook"></i></a></li>
                <li><a href="https://twitter.com/"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"></path></svg></a></li>
                <li><a href="https://www.pinterest.com/"><i class="bx bxl-pinterest-alt"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="bx bxl-instagram"></i></a></li>
              </ul>
              <p>©Copyright 2023 TripRex | Design By <a href="https://www.egenslab.com/">Egens Lab</a></p>
              <div class="footer-right">
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Condition</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;

