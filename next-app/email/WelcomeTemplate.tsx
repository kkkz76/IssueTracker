import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const Email = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Buddy!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="http://localhost:3000/">Vist to my page</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;
