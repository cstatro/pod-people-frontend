import React from "react";
import { useEffect, useState } from "react";
import ShowDetails from "../components/ShowDetails";
import EpisodeList from "../components/EpisodeList";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { podcastShowPageActions } from "../redux/actions/dispatchActions/podCastShowPageAction";
const Parser = require("rss-parser");

const PodCastShow = props => {
  const [rssFeed, setRssFeed] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/grab-feed", {
      headers: {
        feed: props.rss
      }
    })
      .then(r => r.text())
      .then(text => {
        const parser = new Parser();
        parser.parseString(text, (err, rss) => {
          setRssFeed(rss);
        });
      });
  }, []);

  useEffect(() => {
    if (rssFeed) {
      // const {} = rssFeed;
      console.log(rssFeed);
    }
  });
  return (
    <div className="podcast-show page">
      {!!rssFeed ? (
        <>
          <ShowDetails {...rssFeed} /> <EpisodeList items={rssFeed.items} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default connect(
  null,
  podcastShowPageActions
)(PodCastShow);
