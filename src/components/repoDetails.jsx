import { useContext } from "react";
import { RepoDataContext } from "../App";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  margin: 100px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Span = styled.span`
  color: #26a7de;
`;
const Button = styled.button`
  color: #26a7de;
`;
const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px;
  margin-top: 5px;
`;
const P = styled.p`
  color: grey;
`;
const RepoName = styled.div`
  font-size: 38px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const GreenButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const RepoDetails = () => {
  const { repoData, setRepoData } = useContext(RepoDataContext);
  console.log(repoData);
  return (
    <Wrapper>
      <Left>
        <img
          style={{ width: "100px", borderRadius: "50%" }}
          src={repoData.owner.avatar_url}
          alt=""
        />
        <strong>Verified by GitHub</strong>
        <P>
          GitHub confirms that this app meets <br /> the
          <Span>{"  "}requirements for verification.</Span>
        </P>

        <P style={{ fontSize: "22px", margin: "0" }}>Categories</P>
        <ButtonsWrapper>
          <Button
            style={{
              backgroundColor: "#e2f0f6",
              border: "1px solid transparent",
            }}
          >
            Code review
          </Button>
          <Button
            style={{
              backgroundColor: "#e2f0f6",
              border: "1px solid transparent",
            }}
          >
            IDEs
          </Button>
          <Button style={{ border: "1px solid #26a7de" }}>Free</Button>
          <Button style={{ border: "1px solid #26a7de" }}>Paid</Button>
        </ButtonsWrapper>
      </Left>
      <div className="right">
        <P>Application</P>
        <RepoName>{repoData.name}</RepoName>
        <GreenButton>Set up a plan</GreenButton>
        <p>{repoData.description}</p>
      </div>
    </Wrapper>
  );
};

export default RepoDetails;
