import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import FollowersRepo from "./components/FollowersRepo";
import Followers from "./components/folowers";
import Home from "./components/home";
import RepoDetails from "./components/repoDetails";

export const RepoDataContext = createContext([]);
const RepoDataProvider = RepoDataContext.Provider;

export const UserRepoContext = createContext([]);
const UserRepoProvider = UserRepoContext.Provider;

export const FollowersContext = createContext([]);
const FollowersProvider = FollowersContext.Provider;

const App = () => {
  //   const { name } = useParams();
  const [repoData, setRepoData] = useState([]);
  const [userRepo, setUserRepo] = useState([]);
  const [followers, setFollowers] = useState([]);

  return (
    <FollowersProvider value={{ followers, setFollowers }}>
      <UserRepoProvider value={{ userRepo, setUserRepo }}>
        <RepoDataProvider value={{ repoData, setRepoData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/followers"
                element={<Followers></Followers>}
              ></Route>
              <Route
                path="/:name"
                element={<RepoDetails></RepoDetails>}
              ></Route>
            </Routes>
          </BrowserRouter>
        </RepoDataProvider>
      </UserRepoProvider>
    </FollowersProvider>
  );
};
export default App;
