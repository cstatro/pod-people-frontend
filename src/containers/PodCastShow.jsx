import React from "react";
import { useEffect, useState } from "react";
import ShowDetails from "../components/ShowDetails";
import EpisodeList from "../components/EpisodeList";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { podcastShowPageActions } from "../redux/actions/dispatchActions/podCastShowPageAction";
const Parser = require("rss-parser");

const PodCastShow = props => {
  const { setPodCast } = props;

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
      const { title: name, itunes } = rssFeed;
      const podcast = {
        name,
        publisher: itunes.author,
        image_url: itunes.image,
        genre: itunes.categories[0],
        feed: props.rss
      };
      setPodCast(podcast);
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
