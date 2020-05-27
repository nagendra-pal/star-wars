import React from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { debounce } from "lodash";
import {
  Body,
  Header,
  WelcomeContainer,
  Title,
  SearchContainer,
  StyledInput,
  StyledMesage,
} from "../styles/Search";
import {SearchPropsType, SearchStateType} from './SearchTypes';
import PlanetList from './PlanetList';

const DEBOUCE_DELAY = 500;
const MAX_SEARCH_LIMIT = 15;

class Search extends React.Component<SearchPropsType, SearchStateType> {
  debouncedSearch: any;

  constructor(props) {
    super(props);

    const user = JSON.parse(localStorage.getItem("user"));
    this.state = {
      query: "",
      results: [],
      loading: false,
      message: "",
      count: 0,
      user: user && user.name || '',
    };

    this.debouncedSearch = debounce((query: string) => this.fetchResult(query), DEBOUCE_DELAY); // - debounce delay of 500ms
  }

  changeHandler = (e) => {
    const query = e.target.value;

    this.setState({ query, loading: true, message: "" }, () => {
      this.debouncedSearch(query);
    });
  };

  fetchResult = (query: string) => {
    const searchURL = `https://swapi.dev/api/planets/?search=${query}`;

    axios
      .get(searchURL)
      .then((res) => {
        this.setState({
          count: this.state.count + 1,
          loading: false,
          message: !res.data.results.length ? "No data found" : "",
          results: res.data.results,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch data",
          });
        }
      });
  };

  logoutHandler = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
  };

  render(): JSX.Element {
    const { user, query, results, loading, message, count } = this.state;
    const isMaxLimitReached = (!(user === 'Luke Skywalker') && count === MAX_SEARCH_LIMIT);
    return (
      <Body>
        {!user && <Redirect to="/" />}
        <Header>
          <Title>Search - Planets</Title>
          <WelcomeContainer>
            <span>Welcome, {user}</span>
            <Link to="/" onClick={this.logoutHandler}>
              Log out
            </Link>
          </WelcomeContainer>
        </Header>
        <SearchContainer>
          <StyledInput
            value={query}
            onChange={this.changeHandler}
            placeholder="Plese enter text..."
            disabled={isMaxLimitReached}
          ></StyledInput>
          {isMaxLimitReached && (
            <StyledMesage>Your maximum limit reached</StyledMesage>
          )}
        </SearchContainer>
        {loading && <span>Loading...</span>}
        {message && <StyledMesage>{message}</StyledMesage>}
        <PlanetList planetList={results}/>
      </Body>
    );
  }
}

export default Search;
