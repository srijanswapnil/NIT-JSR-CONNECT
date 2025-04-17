import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heading } from '@radix-ui/themes';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
const Home = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen w-full bg-black text-white px-6 py-20">
      
      
    <section className="py-5 bg-light text-dark min-vh-100">
      <Container>
        {/* Header + Main Action Buttons */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">Welcome to NITJSR Connect</h1>
          <p className="lead">Bridging students through services, stories, and shared experiences.</p>

          <div className="d-div justify-content-center div-wrap gap-3 my-4">
            <Button as={Link} to="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
            <Button as={Link} to="/about" variant="outline-primary" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        
        <Row className="g-4 mb-5">
          {[
            {
              title: 'Community Market',
              desc: 'Buy, sell, or exchange books, sports gear, or accessories with your college mates.',
              link: '/services/community-market',
            },
            {
              title: 'Student Insights',
              desc: 'Discover experiences, tips, and hacks shared by your seniors.',
              link: '/insights',
            },
            {
              title: 'Campus Guide',
              desc: 'From academic blocks to hidden canteens – explore every corner of NITJSR.',
              link: '/map',
            },
            {
              title: 'Latest Buzz',
              desc: 'Stay updated with campus events, society activities, and viral rumors.',
              link: '/services/latest-buzz',
            },
          ].map((service, index) => (
            <Col md={6} key={index}>
              <div className="p-4 bg-white rounded shadow-sm service-card h-100">
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.desc}</p>
                <Button as={Link} to={service.link} variant="outline-dark" size="sm">
                  View More
                </Button>
              </div>
            </Col>
          ))}
        </Row>

        {/* ✅ Clubs & Societies + Resources Side-by-Side */}
        <Row className="mb-5 g-4">
          {/* Clubs & Societies */}
          <Col md={6}>
            <div className="p-4 bg-white rounded shadow-sm service-card h-100">
              <h5 className="fw-bold">Clubs & Societies</h5>
              <p>Explore the heart of student life – join technical, cultural, and social clubs across campus.</p>
              <Button as={Link} to="/services/clubs-societies" variant="outline-dark" size="sm">
                Explore Clubs
              </Button>
            </div>
          </Col>

          {/* Resources Section */}
          <Col md={6}>
            <div className="p-4 bg-white rounded shadow-sm service-card h-100">
              <h5 className="fw-bold mb-3">Resources</h5>
              <div className="d-div div-wrap gap-3">
                {["Lecture Notes", "Exam Papers", "Books", "Important Links"].map((item, idx) => (
                  <Button key={idx} variant="outline-dark" className="div-grow-1">
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
