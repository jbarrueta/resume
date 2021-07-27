import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import NightModeToggle from "../NightModeToggle/NightModeToggle";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const Navigation = ({ nightMode, toggle, isMobile }) => {
  return isMobile ? (
    <MobileNavigation nightMode={nightMode} toggle={toggle} />
  ) : (
    <DesktopNavigation nightMode={nightMode} toggle={toggle} />
  );
};

const DesktopNavigation = ({ nightMode, toggle }) => {
  return (
    <nav className="Navigation">
      <div className="flex justify-between items-center black">
        <Logo
          size="50"
          color={nightMode ? "#ffffff" : "#121212"}
          className="nav_icon"
        />
        <div className="flex">
          <div className="nav_link1 all_center">
            <NavLink
              exact
              to="/"
              className="f3 link dim ph3 pointer nav_link1"
              activeClassName="b"
            >
              Home
            </NavLink>
          </div>
          <span className="nav_link2 all_center">
            <NavLink
              exact
              to="/resume"
              className="f3 link dim ph3 pointer nav_link2"
              activeClassName="b"
            >
              Resume
            </NavLink>
          </span>
          <span className="nav_link2 all_center">
            <NavLink
              exact
              to="/projects"
              className="f3 link dim ph3 pointer nav_link2"
              activeClassName="b"
            >
              Projects
            </NavLink>
          </span>
          <span className="nav_link3 all_center">
            <NavLink
              exact
              to="/contact"
              color={nightMode ? "#ffffff" : "#121212"}
              className="f3 link dim ph3 pointer nav_link3"
              activeClassName="b"
            >
              Contact
            </NavLink>
          </span>
          <NightModeToggle
            toggle={toggle}
            nightMode={nightMode}
            className="nav_toggle"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

const MobileNavigation = ({ nightMode, toggle }) => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () =>
    setMenu((prevState) => !prevState) || console.log(menu);

  return (
    <nav className="Navigation">
      <div className="flex justify-between items-center black">
        <div className="logo di">
          <Logo
            size="50"
            color={nightMode ? "#ffffff" : "#121212"}
            className="nav_icon"
          />
        </div>
        <div className="ib pointer" onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {menu && (
        <div className="MobileNavigation">
          <CloseIcon
            fontSize="large"
            className="ma3 pointer dim grow"
            onClick={toggleMenu}
          />
          <div className="flex flex-column justify-between items-center h-75">
            <div className=" flex flex-column items-center">
              <NavLink
                exact
                className="nav-link link all-center tc f4 dim grow pointer"
                to="/"
                activeClassName="b"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link link all-center tc f4 dim grow pointer"
                to="/resume"
                activeClassName="b"
              >
                Resume
              </NavLink>
              <NavLink
                className="nav-link link all-center tc f4 dim grow pointer"
                to="/projects"
                activeClassName="b"
              >
                Projects
              </NavLink>
              <NavLink
                className="nav-link link all-center tc f4 dim grow pointer"
                to="/contact"
                activeClassName="b"
              >
                Contact
              </NavLink>
            </div>
            <div className="">
              <NightModeToggle toggle={toggle} nightMode={nightMode} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// const useStyles = makeStyles({
//   list: {
//     width: 250,
//     backgroundColor: "#333",
//     color: "white",
//     height: "100%",
//   },
// });

// const SideMenu = ({ elements, bottom }) => {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     open: false,
//   });

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, open });
//   };

//   const list = () => (
//     <div
//       className={clsx(classes.list)}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {elements.map((element, index) => (
//           <>
//             <ListItem button key={index} onClick={element.onClick}>
//               <ListItemIcon>{element.icon}</ListItemIcon>
//               <ListItemText primary={element.text} />
//             </ListItem>
//             <Divider />
//           </>
//         ))}
//       </List>
//       {bottom && (
//         <List
//           style={{
//             bottom: "0px",
//             position: "absolute",
//             padding: "50px",
//             width: "100%",
//           }}
//         >
//           {bottom.map((element, index) => (
//             <ListItem button key={index} onClick={element.onClick}>
//               <ListItemIcon>{element.icon}</ListItemIcon>
//               <ListItemText primary={element.text} />
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </div>
//   );

//   return (
//     <>
//       <Button onClick={toggleDrawer(true)}>
//         <MoreVertIcon style={{ zoom: "200%" }} />
//       </Button>
//       <Drawer anchor="right" open={state.open} onClose={toggleDrawer(false)}>
//         {list()}
//       </Drawer>
//     </>
//   );
// };
