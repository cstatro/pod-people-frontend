import React, { Component } from "react";
import { connect } from "react-redux";
import { homePageState } from "../redux/actions/mapStateToProps/HomePageState";
import { sortByFollowerTotal } from "../helpers/sortHelpers";
import Loading from "../components/Loading";

class Home extends Component {
  render() {
    const { name, lists, profile_pic, bio, id } = this.props.user;
    // mostFollowers("here", lists);
    // sortByFollowerTotal(lists)[lists.length - 1];
    {
      return !!id ? (
        <div className="home page">
          <div className="user-profile">
            <h2>{name}</h2>
            <img className="profile-pic" src={profile_pic} alt="" />
            <p>{bio}</p>
            {/* <h2>Number of Lists: {lists.length}</h2> */}
            <h2>
              Most Popular List:
              {lists.length > 0
                ? sortByFollowerTotal(lists)[lists.length - 1].name
                : "No List Found Try Making One!"}
            </h2>
          </div>
        </div>
      ) : (
        <Loading />
      );
    }
  }
}

export default connect(homePageState)(Home);
