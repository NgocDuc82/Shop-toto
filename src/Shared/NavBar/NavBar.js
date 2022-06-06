import React from "react";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/material/Link";
import "../../Styles/navbar.css";
function NavBar() {
  return (
    <div className = "navbar">
      <div className="nav-wrap">
        <div className="nav-logo">
          <img src="https://mcdn.nhanh.vn/store/7136/store_1587022637_735.jpg" />
        </div>
        <div className="nav-extra">
          <Link href="#" className="nav-extra-link">
            <AccountCircleIcon />
          </Link>
          <Link href="#" className="nav-extra-link">
            <SearchIcon />
          </Link>
          <Link href="#" className="nav-extra-link">
            <FavoriteBorderIcon />
          </Link>
          <Link href="#" className="nav-extra-link nav-extra-cart">
            <AddShoppingCartIcon />
          </Link>
        </div>
        <div className="nav-listPage">
          <Box
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="TRANG CHỦ"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="SẢN PHẨM"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="NEWS"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="ABOUT"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="CONTACT"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary="TOTO FANZONE"
                      className="nav-listPage-item"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <div className="nav-hotline">
            <Button
              variant="outlined"
              startIcon={<CallIcon />}
              sx={{
                fontSize: "18px",
                color: "#000",
                border: "1px solid #000",
                fontWeight: "bold",
              }}
            >
              0868186475
            </Button>
          </div>
          <div className="nav-socail">
            <Link href="#" className="nav-socail-link">
              <FacebookIcon />
            </Link>
            <Link href="#" className="nav-socail-link">
              <InstagramIcon />
            </Link>
            <Link href="#" className="nav-socail-link">
              <YouTubeIcon />
            </Link>
            <Link href="#" className="nav-socail-link">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
