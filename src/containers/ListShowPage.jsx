import React from "react";
import { useEffect, useState } from "react";
import ListShowPageEpisodeRow from "../components/ListShowPageEpisodeRow";
import ListShowPagePodcastRow from "../components/ListShowPagePodcastRow";
const ListShowPage = props => {
  const [list, setList] = useState({
    name: null,
    description: null,
    podcasts: [],
    episodes: [],
    followers: [],
    buzzword_generate: [],
    user: { name: null, id: null }
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/lists/${props.paramId}`)
      .then(r => r.json())
      .then(json => setList(json));
  }, []);

  const { podcasts, episodes, followers, buzzword_generate, user } = list;
  const { userId } = props;
  const followerStat = `Total Followers:  ${followers.length}`;

  return (
    <div className="list-show page">
      <div className="list-show-div">
        <div className="list-show-title">
          <h1>{list.name}</h1>
        </div>
        <div className="list-page-details">
          <p className="list-description">{list.description}</p>
          <div className="top-list-details">
            <h4 className="list-stat">{user.name}</h4>
            <h4 className="list-stat">{followerStat}</h4>
          </div>
          <div className="bottom-list-details">
            <div className="buzzwords">
              {buzzword_generate.map(s => (
                <h5 className="buzzword list-show-buzz">{s}</h5>
              ))}
            </div>
            {userId === user.id ? (
              <button
                className="list-page-details-button"
                onClick={() => setEditMode(!editMode)}
              >
                Edit Button
              </button>
            ) : (
              <button className="list-page-details-button">Follow</button>
            )}
          </div>
        </div>
        <div className="list-show-display-area">
          <div className="list-section-head">
            <h2>Podcasts</h2>
          </div>
          <div className="list-row-container">
            {podcasts.map(p => (
              <ListShowPagePodcastRow editMode={editMode} {...p} />
            ))}
          </div>
          <div className="list-section-head">
            <h2>Episodes</h2>
          </div>
          <div className="list-row-container">
            {episodes.map(e => (
              <ListShowPageEpisodeRow editMode={editMode} key={e.id} {...e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListShowPage;
