import React from "react";
import { useEffect, useState } from "react";
const Parser = require("rss-parser");

const PodCastShow = props => {
  const [rssFeed, setRssFeed] = useState({});
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
          console.log(rss);
        });
      });
  }, []);
  return <div className="podcast-show page">{"Show page time!"}</div>;
};

export default PodCastShow;
