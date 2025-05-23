import React, { useEffect, useState } from "react";
import { Container, Snackbar } from "@mui/material";
import Header from "./components/Header";
import SendTweet from "./components/SendTweet/SendTweet";
import ListTweets from "./components/ListTweets/ListTweet";

import { TWEETS_STORAGE } from "./utils/constants";

function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  });
  const [allTweets, setAllTweets] = useState([]);
  console.log(allTweets);
  const [reloadTweets, setReloadTweets] = useState(false);

  useEffect(() => {
    const allTweetsSorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(allTweetsSorage);
    setAllTweets(allTweetsArray);
    console.log( "a " + allTweetsArray);
    setReloadTweets(false);
  }, [reloadTweets]);

  const deleteTweet = index => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  };

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet setToastProps={setToastProps} allTweets={allTweets} />
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;