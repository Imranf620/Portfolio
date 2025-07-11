import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
       <div className="mb-5 po_items_ho">
        {dataportfolio.map((data, i) => (
          <div className="po_item">
      <div className={`image-wrapper ${loaded ? "loaded" : ""}`}>
        {!loaded && <div className="loader" />}     {/*  spinner  */}
        <img
          src={data.img}
          alt=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="fade-img"
        />
      </div>

      <div className="content">
        <p>{data.description}</p>
        <a href={data.link}>view project</a>
      </div>
    </div>
        ))}
      </div>

      </Container>
    </HelmetProvider>
  );
};
