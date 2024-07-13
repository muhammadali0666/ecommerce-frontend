import { useState } from "react";
import { Container, Title } from "../../components/StyledComponents";
import "./verify.css";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (info) => toast.info(info);

export const Verify = () => {
  const [verifyOne, setVerifyOne] = useState("");
  const [verifyTwo, setVerifyTwo] = useState("");
  const [verifyThree, setVerifyThree] = useState("");
  const [verifyFour, setVerifyFour] = useState("");
  const [verifyFive, setVerifyFive] = useState("");
  const [verifySix, setVerifySix] = useState("");
  let sum = "";

  const handleVerify = (event) => {
    event.preventDefault();
    sum += verifyOne;
    sum += verifyTwo;
    sum += verifyThree;
    sum += verifyFour;
    sum += verifyFive;
    sum += verifySix;
    fetch(`http://localhost:4001/verify_code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        verify: sum.trim(),
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
      <HStack className="verify-input-wrapper">
        <PinInput>
          <PinInputField
            className="verify-input"
            value={verifyOne}
            onChange={(e) => setVerifyOne(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifyTwo}
            onChange={(e) => setVerifyTwo(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifyThree}
            onChange={(e) => setVerifyThree(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifyFour}
            onChange={(e) => setVerifyFour(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifyFive}
            onChange={(e) => setVerifyFive(e.target.value)}
          />
          <PinInputField
            className="verify-input"
            value={verifySix}
            onChange={(e) => setVerifySix(e.target.value)}
          />
        </PinInput>
        <button className="verify-btn" onClick={handleVerify}>
          Verify
        </button>
      </HStack>
    </Container>
  );
};
