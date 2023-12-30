/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <div
        style={{ height: `600px` }}
        className="map-canvas"
        id="map-canvas"
        ref={mapRef}
      ></div>
    </>
  );
};

const Maps = () => {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Welcome to our Help Desk!</h1>
        </header>
        
        <section className="FAQ">
          <h2>Frequently Asked Questions</h2>
          <ol>
            <li>
              <h3>What is the purpose of a Blockchain-Based eVault for Legal Records?</h3>
              <p>Our eVault securely stores and manages legal documents on a blockchain, ensuring tamper-proof records and streamlined access for legal professionals.</p>
            </li>
            {/* Add more FAQs as needed */}
          </ol>
        </section>
        
        <section className="Documentation">
          <h2>Technical Documentation</h2>
          <ul>
            <li><a href="#setting-up-react">Setting Up React.js Environment</a></li>
            <li><a href="#blockchain-integration">Blockchain Integration Guide</a></li>
            <li><a href="#multi-factor-auth">Implementing Multi-Factor Authentication</a></li>
            <li><a href="#api-docs">API Documentation</a></li>
            {/* Add more documentation links as needed */}
          </ul>
        </section>
        
        <section className="Troubleshooting">
          <h2>Troubleshooting</h2>
          <ul>
            <li>
              <h3>Issue: Unable to connect to the blockchain network</h3>
              <p>Solution: Double-check your network configurations and ensure your blockchain nodes are running.</p>
            </li>
            <li>
              <h3>Issue: Authentication errors</h3>
              <p>Solution: Review the authentication logic in your React.js application and verify smart contract interactions.</p>
            </li>
            {/* Add more troubleshooting tips as needed */}
          </ul>
        </section>
        
        <section className="ContactSupport">
          <h2>Contact Support</h2>
          <p>If you require further assistance or have specific questions, please feel free to reach out to our dedicated support team at <a href="mailto:support@example.com">support@example.com</a> or through our <a href="#contact-form">Contact Form</a>.</p>
        </section>
      </div>
  );
};

export default Maps;
