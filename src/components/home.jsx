import { useContext, useEffect, useState } from "react";
import { RepoDataContext, UserRepoContext } from "../App";
import RepoList from "./repoList";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const Input = styled.input`
  padding: 8px;
  width: 60%;
  border-radius: 5px;
  border: 2px solid silver;
  outline: none;
`;
const Button = styled.button`
  padding: 8px;
  background-color: black;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const Home = () => {
  const [userName, setUserName] = useState("");
  const { userRepo, setUserRepo } = useContext(UserRepoContext);

  const [param, setParams] = useSearchParams();
  const newUser = param.get("q");

  console.log({ newUser });

  useEffect(() => {
    if (!newUser) {
      return;
    }
    fetch(`https://api.github.com/users/${newUser}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUserRepo(data);
      });
    setUserName(newUser);
  }, [newUser]);

  const handleSearchUser = () => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUserRepo(data);
      });
  };

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Please enter username"
        />
        <Button onClick={handleSearchUser}>search</Button>
      </Wrapper>
      <RepoList></RepoList>
    </>
  );
};
export default Home;
