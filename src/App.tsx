import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";
import { UserAllUsers } from "./hooks/userAllUsers";

export const App = () => {
  const { getUsers, userProfiles, loading, error } = UserAllUsers();
  const onClickFetchUser = () => {
    getUsers();
  };

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};
