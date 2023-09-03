import { useState } from "react";
import { TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import { PropTypes } from "prop-types";

function CitySearchBar({ onSearch }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <TextField
        label="Search Cities"
        variant="outlined"
        value={searchQuery}
        sx={{ borderRadius: "25px" }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#548776",
            marginRight: !isMobile && "20px",
            marginBottom: isMobile && "5px",
          }}
        >
          Delivery
        </Button>
        <p style={{ textAlign: isMobile && "center" }}>Or</p>
        <Button
          variant="outlined"
          onClick={handleSearch}
          sx={{
            borderColor: "#548776",
            color: "#548776",
            marginLeft: !isMobile && "20px",
            marginTop: isMobile && "5px",
          }}
        >
          Pickup
        </Button>
      </div>
    </div>
  );
}

CitySearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default CitySearchBar;
