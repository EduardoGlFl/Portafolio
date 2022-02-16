import React, { useState } from "react";
import { Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';

import { GridContainer, Form, InputGroup, Input, TextArea, Button } from "./ContactStyles";
import axios from "axios";

function Contact  () {

const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: "POST",
      url: "https://formspree.io/f/mjvlywrd",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  }

  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main> Send me a message! </SectionTitle>
      <GridContainer>
        <SectionText style={{ textAlign: "center" }}>
          {" "}
          Got a question or proposal? <br /> Go ahead{" "}
        </SectionText>
      </GridContainer>
      <Form onSubmit={handleOnSubmit}>
        <div className="form-row">
          <InputGroup>
            <Input
              id="name"
              type="text"
              name="_name"
              onChange={handleOnChange}
              required
              value={inputs.name}
              placeholder="Enter your name"
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              placeholder="Enter your email address"
            />
          </InputGroup>
        </div>
        <div className="form-row">
          <InputGroup>
            <TextArea
              type="textarea"
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            />
          </InputGroup>
        </div>
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </Button>
      </Form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
      <SectionDivider colorAlt />
    </Section>
  );
}

export default Contact;