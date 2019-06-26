import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchData } from '../actions'

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    if (this.props.fetching) {
      return (
        <p>Fetching Star Wars data...</p>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  return {
    fetching: charsReducer.fetching,
    characters: charsReducer.characters,
  }
}

export default connect(
  mapStateToProps,
  { fetchData },
)(CharacterListView);
