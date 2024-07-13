import { Container, Title } from "../../components/StyledComponents";
import "./verify.css";
import { HStack, PinInput, PinInputField } from '@chakra-ui/react'

export const Verify = () => {
  return (
    <Container>
      <Title className="verify-title">Verify code</Title>
      <p className="verify-text">
        You must enter a verification code. Check your email for the code.
      </p>
      <HStack className="verify-input-wrapper">
        <PinInput>
          <PinInputField className="verify-input"/>
          <PinInputField className="verify-input"/>
          <PinInputField className="verify-input"/>
          <PinInputField className="verify-input"/>
          <PinInputField className="verify-input"/>
          <PinInputField className="verify-input"/>
        </PinInput>
      </HStack>
    </Container>
  );
};
