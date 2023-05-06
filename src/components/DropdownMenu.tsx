import React from "react";

import DropdownItem from "./DropdownItem";
import { ReactComponent as ActiveDeveloper } from "../../public/badges/active_developer.svg";
import { ReactComponent as Boost1Month } from "../../public/badges/boost_1_month.svg";
import { ReactComponent as Boost2Month } from "../../public/badges/boost_2_month.svg";
import { ReactComponent as Boost3Month } from "../../public/badges/boost_3_month.svg";
import { ReactComponent as Boost6Month } from "../../public/badges/boost_6_month.svg";
import { ReactComponent as Boost9Month } from "../../public/badges/boost_9_month.svg";
import { ReactComponent as Boost12Month } from "../../public/badges/boost_12_month.svg";
import { ReactComponent as Boost15Month } from "../../public/badges/boost_15_month.svg";
import { ReactComponent as Boost18Month } from "../../public/badges/boost_18_month.svg";
import { ReactComponent as Boost24Month } from "../../public/badges/boost_24_month.svg";
import { ReactComponent as BugHunterLv1 } from "../../public/badges/bug_hunter_lv1.svg";
import { ReactComponent as BugHunterLv2 } from "../../public/badges/bug_hunter_lv2.svg";
import { ReactComponent as DiscordCertifiedModeratorOld } from "../../public/badges/discord_certified_moderator_old.svg";
import { ReactComponent as DiscordCertifiedModerator } from "../../public/badges/discord_certified_moderator.svg";
import { ReactComponent as DiscordPartnerOld } from "../../public/badges/discord_partner_old.svg";
import { ReactComponent as DiscordPartner } from "../../public/badges/discord_partner.svg";
import { ReactComponent as DiscordStaff } from "../../public/badges/discord_staff.svg";
import { ReactComponent as EarlySupporter } from "../../public/badges/early_supporter.svg";
import { ReactComponent as HypeSquadBalanceLgbtq } from "../../public/badges/hypesquad_balance_lgbtq.svg";
import { ReactComponent as HypeSquadBalance } from "../../public/badges/hypesquad_balance.svg";
import { ReactComponent as HypeSquadBraveryLgbtq } from "../../public/badges/hypesquad_bravery_lgbtq.svg";
import { ReactComponent as HypeSquadBravery } from "../../public/badges/hypesquad_bravery.svg";
import { ReactComponent as HypeSquadBrillianceLgbtq } from "../../public/badges/hypesquad_brilliance_lgbtq.svg";
import { ReactComponent as HypeSquadBrilliance } from "../../public/badges/hypesquad_brilliance.svg";
import { ReactComponent as HypeSquadEvent } from "../../public/badges/hypesquad_event.svg";
import { ReactComponent as Nitro } from "../../public/badges/nitro.svg";
import { ReactComponent as ServerOwner } from "../../public/badges/server_owner.svg";
import { ReactComponent as SupportsSlashCommands } from "../../public/badges/supports_slash_commands.svg";
import { ReactComponent as VerifiedBotDeveloper } from "../../public/badges/verified_bot_developer.svg";

const DropdownMenu = () => {
  return (
    <div className="dropdownMenu">
      <div>
        <DropdownItem logo={<ActiveDeveloper />}>Active Developer</DropdownItem>
        <DropdownItem logo={<Boost1Month />}>Boost 1 Month</DropdownItem>
        <DropdownItem logo={<Boost2Month />}>Boost 2 Month</DropdownItem>
        <DropdownItem logo={<Boost3Month />}>Boost 3 Month</DropdownItem>
        <DropdownItem logo={<Boost6Month />}>Boost 6 Month</DropdownItem>
        <DropdownItem logo={<Boost9Month />}>Boost 9 Month</DropdownItem>
        <DropdownItem logo={<Boost12Month />}>Boost 12 Month</DropdownItem>
        <DropdownItem logo={<Boost15Month />}>Boost 15 Month</DropdownItem>
        <DropdownItem logo={<Boost18Month />}>Boost 18 Month</DropdownItem>
        <DropdownItem logo={<Boost24Month />}>Boost 24 Month</DropdownItem>
        <DropdownItem logo={<BugHunterLv1 />}>Bug Hunter Lv1</DropdownItem>
        <DropdownItem logo={<BugHunterLv2 />}>Bug Hunter Lv2</DropdownItem>
        <DropdownItem logo={<DiscordCertifiedModeratorOld />}>
          Discord Certified Moderator (Old)
        </DropdownItem>
        <DropdownItem logo={<DiscordCertifiedModerator />}>
          Discord Certified Moderator
        </DropdownItem>
        <DropdownItem logo={<DiscordPartnerOld />}>
          Discord Partner (Old)
        </DropdownItem>
        <DropdownItem logo={<DiscordPartner />}>Discord Partner</DropdownItem>
        <DropdownItem logo={<DiscordStaff />}>Discord Staff</DropdownItem>
        <DropdownItem logo={<EarlySupporter />}>Early Supporter</DropdownItem>
        <DropdownItem logo={<HypeSquadBalanceLgbtq />}>
          HypeSquad Balance LGBTQ+
        </DropdownItem>
        <DropdownItem logo={<HypeSquadBalance />}>
          HypeSquad Balance
        </DropdownItem>
        <DropdownItem logo={<HypeSquadBraveryLgbtq />}>
          HypeSquad Bravery LGBTQ+
        </DropdownItem>
        <DropdownItem logo={<HypeSquadBravery />}>
          HypeSquad Bravery
        </DropdownItem>
        <DropdownItem logo={<HypeSquadBrillianceLgbtq />}>
          HypeSquad Brilliance LGBTQ+
        </DropdownItem>
        <DropdownItem logo={<HypeSquadBrilliance />}>
          HypeSquad Brilliance
        </DropdownItem>
        <DropdownItem logo={<HypeSquadEvent />}>HypeSquad Event</DropdownItem>
        <DropdownItem logo={<Nitro />}>Nitro</DropdownItem>
        <DropdownItem logo={<ServerOwner />}>Server Owner</DropdownItem>
        <DropdownItem logo={<SupportsSlashCommands />}>
          Supports Slash Commands
        </DropdownItem>
        <DropdownItem logo={<VerifiedBotDeveloper />}>
          Verified Bot Developer
        </DropdownItem>
      </div>
    </div>
  );
};

export default DropdownMenu;
