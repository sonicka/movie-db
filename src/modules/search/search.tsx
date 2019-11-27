import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import SearchBar from "material-ui-search-bar";
import OverviewGroup from "../overview/overview-group";
import { search } from "../../searchActions";

const Search: React.FC<RouteComponentProps & any> = props => {
  const [searchQuery, setSearchQuery] = useState("");

  // useEffect(() => {
  //   props.dispatch(search(searchQuery)); // todo
  // }, [searchQuery]);

  return (
    <div>
      <SearchBar
        onChange={newValue => props.dispatch(search(newValue))}
        onRequestSearch={() => console.log(searchQuery)}
        value={searchQuery}
        style={{
          margin: "0 auto",
          maxWidth: 800,
          marginTop: "200px"
        }}
      />
      <OverviewGroup groupTitle="Search results" groupId={"popular_movies"} />
    </div>
  );
};

export default connect()(Search);
