import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Button, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";

const SearchHook = ({ seacrhText }) => {
  let [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    seacrhText(text);
  };

  return (
    <Container>
      <Row className="Search">
        <Col className md={12}>
          <InputGroup className="mb-3">
            <FormControl placeholder="Search News..." aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => setText(e.target.value)} />
            <Button onClick={handleClick} variant="dark" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchHook;
