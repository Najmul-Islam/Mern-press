import React, { useEffect, useRef } from "react";
import DashboardNav from "./sidebarItems/DashboardNav";
import PostsNav from "./sidebarItems/PostsNav";
import MediaNav from "./sidebarItems/MediaNav";
import PagesNav from "./sidebarItems/PagesNav";
import CommentsNav from "./sidebarItems/CommentsNav";
import AppearanceNav from "./sidebarItems/AppearanceNav";
import PluginsNav from "./sidebarItems/PluginsNav";
import UsersNav from "./sidebarItems/Users";
import ToolsNav from "./sidebarItems/ToolsNav";
import SettingsNav from "./sidebarItems/SettingsNav";

const Sidebar = () => {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <DashboardNav />
            <PostsNav />
            <MediaNav />
            <CommentsNav />
            <UsersNav />
          </div>
        </div>
        <div className="sb-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
