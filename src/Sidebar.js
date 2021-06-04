import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { getTokenFromResponse } from "./spotify";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOptions Icon={HomeIcon} option="Home" />
      <SidebarOptions Icon={SearchIcon} option="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playslist) => (
        <SidebarOptions option={playslist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
