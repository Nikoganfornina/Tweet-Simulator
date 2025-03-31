import React from "react";

import { Grid2 } from "@mui/material";

import Tweet from "../Tweet/Tweet";

import "./ListTweets.scss";

export default function ListTweets(props) {
  const { allTweets, deleteTweet } = props;

  console.log(allTweets);
  
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets...</h2>
      </div>
    );
  }

  return (
    <Grid2 container spacing={3} className="list-tweets">
      {allTweets.map((tweet, index) => (
        <Grid2 key={index} item size={4}>
          <Tweet tweet={tweet} index={index} deleteTweet={deleteTweet} />
        </Grid2>
      ))}
    </Grid2>
  );
}
