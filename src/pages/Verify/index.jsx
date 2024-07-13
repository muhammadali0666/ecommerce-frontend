import { useState } from "react";
import { Container, Title } from "../../components/StyledComponents";
import "./verify.css";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (info) => toast.info(info);

export const Verify = () => {
  let [verifyOne, setVerifyOne] = useState("");

  const handleVerify = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4001/verify_code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verify: verifyOne,
        email: localStorage.getItem("email"),
      }),
    })
      .then((res) => res.json())
      .then((datas) => {
        notify(datas.message);
        if (datas.message === "user not found") {
          setTimeout(() => {
            location.href = "/register";
          }, 5000);
        }
        if (datas.token) {
          localStorage.setItem("token", datas.token);
          setTimeout(() => {
            location.href = "/";
          }, 5000);
        }
      });
  };

  return (
    <Container>
      <ToastContainer />
      <Title className="verify-title">Verify code</Title>
      <p className="verify-text">
        You must enter a verification code. Check your email for the code.
      </p>
      <HStack className="verify-input-wrapper" onClick={handleVerify}>
        <PinInput>
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne((verifyOne += e.target.value))}
          />
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne((verifyOne += e.target.value))}
          />
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne((verifyOne += e.target.value))}
          />
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne((verifyOne += e.target.value))}
          />
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne((verifyOne += e.target.value))}
          />
        </PinInput>
        <button className="verify-btn" type="submit">
          Verify
        </button>
      </HStack>
    </Container>
  );
};
