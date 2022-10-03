import { useContext } from "react";
import { FollowersContext } from "../App";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
const FollowersWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9e9e9;
  padding: 20px;
  gap: 10px;
`;
const Followers = () => {
  const { followers } = useContext(FollowersContext);
  console.log(followers);

  const navigate = useNavigate();
  const handleNavigateFollower = (name) => {
    navigate(`/?q=${name}`);
  };

  return (
    <>
      <p> Followers </p>

      <FollowersWrapper>
        {followers.map((item) => {
          return (
            <Flex>
              <Link to={item.login}></Link>
              <img
                onClick={() => handleNavigateFollower(item.login)}
                src={item.avatar_url}
                alt=""
                style={{
                  width: "80px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
              <div>{item.login}</div>
            </Flex>
          );
        })}
      </FollowersWrapper>
    </>
  );
};

export default Followers;
