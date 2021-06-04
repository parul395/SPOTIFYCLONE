import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = ""; // to hide token //npm i spotify-web-api-js
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1EQncLwOalG3K7").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [user, dispatch, token, playlists]);
  console.log("I have A  new token>>>", token);
  console.log("I have A user>>>", user);
  console.log("I have A musuc>>>", playlists);

  //BEM
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
