import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
  } from "@react-email/components";
  import * as React from "react";
  
  interface ContactEmailProps {
    message: string;
  }

  export const ContactEmail = ({ message }: ContactEmailProps) => (
    <Html>
      <Head />
      <Preview>New Contact Form Email! </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{ message }</Heading>
        </Container>
      </Body>
    </Html>
  );
  
  export default ContactEmail;
  
  const main = {
    backgroundColor: "#ffffff",
  };
  
  const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto",
  };
  
  const h1 = {
    color: "#333",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "40px 0",
    padding: "0",
  };
  