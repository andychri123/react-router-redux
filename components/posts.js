import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

const Posts = (props) => {
  const dispatch = useDispatch();

  const getProfile = async (member) => {
    const addr = dispatch({ type: "ADD_MEMBER", response: member });
    console.log(member);
  };

  const socialNetworkContract = useSelector(
    (state) => state.socialNetworkContract
  );

  return (
    <div>
      {socialNetworkContract.posts.map((p, index) => {
        return (
          <tr key={index}>
            <button onClick={() => getProfile(p.publisher)}>Profile</button>
          </tr>
        );
      })}
    </div>
  );
};
export default withRouter(Posts);
