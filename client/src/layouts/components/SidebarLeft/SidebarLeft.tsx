import { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";

import { leftDrawerWidth } from "src/utils/constants";
import { Profile } from "src/components//Profile/Profile";
import useInViewPort from "src/hooks/useInViewPort";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "src/contexts/AppContext";

export default function SidebarLeft(): JSX.Element {
  const { setMobileOpen, mobileOpen, setIsClosing } = useContext(AppContext);

  const { inViewport, targetRef } = useInViewPort({ threshold: 0.25 });

  const drawer = (
    <Box pt={5}>
      <Toolbar>
        <Profile />
      </Toolbar>
      <Divider />
      <List>
        {["Feed", "New Shows"].map((text, index) => (
          <Link
            to={`/`}
            style={{ color: "#fff", textDecoration: "none" }}
            key={index}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Feed" ? (
                    <AutoAwesomeMotionOutlinedIcon sx={{ color: "#fff" }} />
                  ) : (
                    <ExploreOutlinedIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider sx={{ color: "#fff" }} />
      <List>
        {["Favorites", "History", "Listen Later", "Playlists"].map(
          (text, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Favorites" ? (
                    <FavoriteBorderOutlinedIcon sx={{ color: "#fff" }} />
                  ) : text === "History" ? (
                    <HistoryOutlinedIcon sx={{ color: "#fff" }} />
                  ) : text === "Listen Later" ? (
                    <UpdateOutlinedIcon sx={{ color: "#fff" }} />
                  ) : (
                    <FormatListBulletedOutlinedIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider color="#fff" sx={{ color: "#fff" }} />
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <WhatshotSharpIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  const mobileDrawer = (
    <Box pt={5}>
      <Toolbar>
        <Profile />
      </Toolbar>
      <Divider />
      <List>
        {["Feed", "New Shows"].map((text, index) => (
          <Link
            to={`/`}
            style={{ color: "#fff", textDecoration: "none" }}
            key={index}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Feed" ? (
                    <AutoAwesomeMotionOutlinedIcon sx={{ color: "#fff" }} />
                  ) : (
                    <ExploreOutlinedIcon sx={{ color: "#fff" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider sx={{ color: "#fff" }} />
      <List>
        {["Albums", "Podcasts", "Events", "RadioStations"].map(
          (text, index) => (
            <NavLink
              to={`/${text.toLocaleLowerCase()}`}
              style={{ color: "#fff", textDecoration: "none" }}
              key={index}
            >
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemIcon>
                    {text === "Albums" ? (
                      <FavoriteBorderOutlinedIcon sx={{ color: "#fff" }} />
                    ) : text === "Podcasts" ? (
                      <HistoryOutlinedIcon sx={{ color: "#fff" }} />
                    ) : text === "Events" ? (
                      <UpdateOutlinedIcon sx={{ color: "#fff" }} />
                    ) : (
                      <FormatListBulletedOutlinedIcon sx={{ color: "#fff" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          )
        )}
      </List>
      <Divider color="#fff" sx={{ color: "#fff" }} />
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <WhatshotSharpIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <ListItemText primary="Trending" />
        </ListItemButton>
      </ListItem>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  //const container = window !== undefined ? () => window().document.body : undefined;
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: leftDrawerWidth },
        flexShrink: { sm: 0 },
        borderRight: "1px solid #111",
      }}
      aria-label="mailbox folders"
      ref={targetRef}
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        //container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClick={handleDrawerClose}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: leftDrawerWidth,
            backgroundColor: "#000",
            color: "#fff",
            borderRight: "1px solid #111",
          },
        }}
      >
        {mobileDrawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", lg: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: leftDrawerWidth,
            paddingTop: "60px",
            backgroundColor: "#000",
            color: "#fff",
            borderRight: "1px solid #111",
            position: inViewport ? "fixed" : "unset",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
