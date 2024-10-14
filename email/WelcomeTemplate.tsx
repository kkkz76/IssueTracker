import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Tailwind,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Buddy!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Text>This is a testing email</Text>
            <Link href="http://localhost:3000/">
              Vist to my page for more detail
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "grey",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
