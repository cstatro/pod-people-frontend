import { connect } from "react-redux";
import { HotListState } from "../redux/actions/mapStateToProps/HotListState";

const HotLists = props => {
  return <div className="hot-lists"></div>;
};

export default connect(HotListState)(HotLists);
