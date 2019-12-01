import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { useDebouncedCallback } from "use-debounce";
import { useMediaQuery } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Carousel from "../../components/carousel/carousel";
import Loader from "../../components/loader/loader";
import ErrorMessage from "../../components/error-message/error-message";
import { startSearch, search, clearSearch } from "../../actions/search-actions";
import { removeDetail } from "../../actions/detail-actions";
import { useStyles } from "./search-styles";

/** Props expected  by Search component */
interface ISearchProps extends RouteComponentProps {
  searchQuery: string;
  searchResults: any[];
}

/** Types of search data from Redux store */
interface ISearchState extends RouteComponentProps {
  search: {
    query: string;
    results: any[];
    loading: boolean;
    error: any;
  };
}

/** Component for searching through movies/tv shows */
const Search: React.FC<ISearchProps & any> = ({
  searchQuery,
  searchResults,
  loading,
  error,
  dispatch
}) => {
  const isSmall = useMediaQuery("(max-width:576px)");
  const classes = useStyles({ marginTop: isSmall ? "150px" : "200px" });
  const [query, setSearchQuery] = useState(searchQuery);

  useEffect(() => {
    dispatch(removeDetail());
  }, [dispatch]);

  const [debouncedSearch] = useDebouncedCallback(value => {
    dispatch(search(value));
  }, 1000);

  const handleChange = (value: string) => {
    dispatch(startSearch());
    setSearchQuery(value);
    debouncedSearch(value);
    if (value.length === 0) {
      dispatch(clearSearch());
    }
  };

  const handleCancel = () => {
    setSearchQuery("");
    dispatch(clearSearch());
  };

  return (
    <div>
      <SearchBar
        onChange={value => handleChange(value)}
        value={query}
        onCancelSearch={handleCancel}
        className={classes.searchBar}
        classes={{ root: classes.searchRoot, input: classes.searchInput }}
      />
      <div className={classes.sectionWrapper}>
        {loading && (
          <div className={classes.sectionWrapper}>
            <Loader />
          </div>
        )}
        {searchResults.length === 0 && searchQuery && (
          <div className={classes.sectionWrapper}>
            <ErrorMessage message="Nothing found" notification />
          </div>
        )}
        {!loading && !error && <Carousel search entities={searchResults} />}
        {error && <ErrorMessage message="Error occurred while loading data!" />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ISearchState) => {
  return {
    searchQuery: state.search.query,
    searchResults: state.search.results,
    loading: state.search.loading,
    error: state.search.error
  };
};

export default connect(mapStateToProps)(Search);
