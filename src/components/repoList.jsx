import { memo, useContext, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FollowersContext, RepoDataContext, UserRepoContext } from "../App";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  margin: 50px;
`;

const RepoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 10px;
`;

const P = styled.p`
  font-weight: 600;
  color: #26a7de;
  margin: 0;
`;
const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 20px;
  background-color: #e9e9e9;
  padding: 20px 10px;
`;
const Button = styled.button``;
import styled from "styled-components";
const RepoList = () => {
  const { name } = useParams();
  const { repoData, setRepoData } = useContext(RepoDataContext);
  const { followers, setFollowers } = useContext(FollowersContext);
  const { userRepo } = useContext(UserRepoContext);

  const handleGetRepo = (id) => {
    userRepo.find((item) => {
      if (item.id === id) {
        setRepoData(item);
      }
    });
  };

  const handleFollower = () => {
    fetch(ownerInfo.followers)
      .then((response) => response.json())
      .then((data) => {
        setFollowers(data);
      });
  };

  if (!userRepo || userRepo.length === 0) {
    return null;
  }

  const ownerInfo = useMemo(() => {
    return {
      name: userRepo[0]?.owner?.login || "",
      avatar: userRepo[0]?.owner?.avatar_url || "",
      followers: userRepo[0]?.owner?.followers_url || "",
    };
  }, [userRepo]);

  return (
    <>
      <UserWrapper>
        <img style={{ width: "70px" }} src={ownerInfo.avatar} alt="" />
        <div>
          <div>{ownerInfo.name}</div>
          <Link to={"/followers"}>
            <button onClick={handleFollower}>Followers</button>
          </Link>
        </div>
      </UserWrapper>
      <Wrapper>
        {userRepo.map((item) => {
          return (
            <RepoWrapper key={item.id}>
              <Link to={`/${item.name}`}>
                <div onClick={() => handleGetRepo(item.id)}>
                  <img
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={item.owner.avatar_url}
                    alt=""
                  />
                </div>
              </Link>
              <div>
                <P>{item.name}</P>
                <div style={{ fontSize: "12px" }}>{item.description}</div>
              </div>
            </RepoWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};
export default RepoList;
