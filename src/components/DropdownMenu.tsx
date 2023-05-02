import React from "react";
import DropdownItem from "./DropdownItem";
import { ReactComponent as Battlenet } from "../../public/platforms/battlenet.svg";
import { ReactComponent as Epicgames } from "../../public/platforms/epicgames.svg";
import { ReactComponent as Facebook } from "../../public/platforms/facebook.svg";
import { ReactComponent as Github } from "../../public/platforms/github.svg";
import { ReactComponent as Playstation } from "../../public/platforms/playstation.svg";
import { ReactComponent as Reddit } from "../../public/platforms/reddit.svg";
import { ReactComponent as Riotgames } from "../../public/platforms/riotgames.svg";
import { ReactComponent as Skype } from "../../public/platforms/skype.svg";
import { ReactComponent as Spotify } from "../../public/platforms/spotify.svg";
import { ReactComponent as Steam } from "../../public/platforms/steam.svg";
import { ReactComponent as Twitch } from "../../public/platforms/twitch.svg";
import { ReactComponent as Twitter } from "../../public/platforms/twitter.svg";
import { ReactComponent as Xbox } from "../../public/platforms/xbox.svg";
import { ReactComponent as Youtube } from "../../public/platforms/youtube.svg";

const DropdownMenu = () => {
  return (
    <div className="dropdownMenu">
      <DropdownItem logo={<Battlenet />}>hi</DropdownItem>
      <DropdownItem logo={<Epicgames />}>hi</DropdownItem>
      <DropdownItem logo={<Playstation />}>hi</DropdownItem>
      <DropdownItem logo={<Riotgames />}>hi</DropdownItem>
      <DropdownItem logo={<Youtube />}>hi</DropdownItem>
      <DropdownItem logo={<Twitter />}>hi</DropdownItem>
    </div>
  );
};

export default DropdownMenu;
