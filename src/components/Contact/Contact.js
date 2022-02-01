import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import { useForm, ValidationError } from "@formspree/react";
import { GridContainer, Form, InputGroup, Input, TextArea, Button } from "./ContactStyles";

function Contact  () {

  const [state, handleSubmit] = useForm("xvolkarw");
  if (state.succeeded) {
    return <p>Thanks for contact me</p>;
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
      <Form onSubmit={handleSubmit}>
        <div className="form-row">
          <InputGroup>
            <Input type="text" placeholder="Enter your name" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </InputGroup>
          <InputGroup>
            <Input type="email" placeholder="Enter your email address" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </InputGroup>
        </div>
        <div className="form-row">
          <InputGroup>
            <TextArea
              type="textarea"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </InputGroup>
        </div>
        <Button type="submit" disabled={state.submitting}>
          Send
        </Button>
      </Form>

      <SectionDivider colorAlt />
    </Section>
  );
}

export default Contact;