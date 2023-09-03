import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FavoriteBorderOutlined, ShoppingBagOutlined } from "@mui/icons-material";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //   const navbarStyles = {
  //     backgroundColor: "#f8f9fa",
  //     // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  //     position: "fixed",
  //     top: "0",
  //     left: "50px",
  //     width: "100%",
  //     zIndex: "1000",
  //   };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        sx={{ backgroundColor: "#fff" }}
      >
        <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'left' }}>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              maxWidth: "400px",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Food Bites
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <div style={{ width: "200px" }}>
                  <List>
                    <Button
                      component={Link}
                      to="/"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Menu" />
                      </ListItem>
                    </Button>
                    <Button
                      component={Link}
                      to="/offers"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Offers" />
                      </ListItem>
                    </Button>
                    <Button
                      component={Link}
                      to="/foods"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Foods" />
                      </ListItem>
                    </Button>
                    <Button
                      component={Link}
                      to="/Restaurants"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Restaurants" />
                      </ListItem>
                    </Button>
                    <Button
                      component={Link}
                      to="/Saved"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Saved" />
                        <FavoriteBorderOutlined />
                      </ListItem>
                    </Button>
                    <Button
                      component={Link}
                      to="/cart"
                      onClick={toggleDrawer}
                      fullWidth
                    >
                      <ListItem>
                        <ListItemText primary="Cart" />
                        <ShoppingBagOutlined />
                      </ListItem>
                    </Button>
                    {/* Add more navigation links */}
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <nav style={{display: "flex", flexDirection: "row"}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ul style={{ listStyle: "none", display: "flex", gap: "1rem", position: "relative", right: "10%" }}>
                  <li>
                    <Button component={Link} to="/menu" color="inherit" sx={{fontFamily: "'Quicksand', sans-serif"}}>
                      Menu
                    </Button>
                  </li>
                  <li>
                    <Button component={Link} to="/offers" color="inherit" sx={{fontFamily: "'Quicksand', sans-serif"}}>
                      Offers
                    </Button>
                  </li>
                  <li>
                    <Button component={Link} to="/foods" color="inherit" sx={{fontFamily: "'Quicksand', sans-serif"}}>
                      Foods
                    </Button>
                  </li>
                  <li>
                    <Button component={Link} to="/restaurants" color="inherit" sx={{fontFamily: "'Quicksand', sans-serif"}}>
                      Restaurants
                    </Button>
                  </li>
                </ul>
              </div>
              <div style={{display: "flex", flexDirection: "row", marginLeft: "auto"}}>
                <ul style={{listStyleType: "none", display: "flex", position: "absolute", left: "85%"}}>
                    <li>
                    <Button component={Link} to="/saved" color="inherit">
                      <FavoriteBorderOutlined />
                    </Button>
                    </li>
                    <li>
                    <Button component={Link} to="/cart" color="inherit" sx={{borderRadius: "50px"}}>
                      <ShoppingBagOutlined />
                    </Button>
                    </li>
                </ul>
              </div>
            </nav>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
