import React from "react";
import { useEffect, useState } from "react";
import ShowDetails from "../components/ShowDetails";
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
          console.log(rssFeed === {});
          console.log(!!rssFeed);
          setRssFeed(rss);
        });
      });
  }, []);
  return (
    <div className="podcast-show page">
      {!!rssFeed ? <ShowDetails {...rssFeed} /> : null}
    </div>
  );
};

export default PodCastShow;
