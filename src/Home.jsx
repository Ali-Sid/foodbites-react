import CitySearchBar from "./Components/CitySearchBar";
import {
  useMediaQuery,
  useTheme,
  Box,
  Typography,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import { KeyboardBackspace, East } from "@mui/icons-material";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCitySearch = (city) => {
    // Implement your logic to handle city search here
    console.log(`Searching for city: ${city}`);
  };


  return (
    <>
      <section
        style={{
          backgroundColor: "#E6E8DD",
          margin: "20px",
          borderRadius: "15px",
          padding: "25px",
          marginTop: isMobile ? "70px" : "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div
            style={{
              width: !isMobile && "50%",
              textAlign: isMobile && "center",
            }}
          >
            <h1>We Are The Fastest In Delivering Your Food</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ut sint consequatur quas labore facilis maxime? Maxime doloribus
              doloremque fugit, laudantium ducimus accusantium voluptatum modi
              ipsam temporibus eaque. Dolorum, eaque.
            </p>
            <CitySearchBar onSearch={handleCitySearch} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: !isMobile && "100px",
            }}
          >
            <img
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777023/biryani_1_ifmsga.png"
              alt="biryani"
              style={{
                width: isMobile ? "350px" : "500px",
                marginTop: isMobile && "80px",
              }}
            />
          </div>
        </div>
      </section>
      <section style={{ margin: "10px", paddingTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: !isMobile && "15rem",
            paddingRight: !isMobile && "15rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <div><img src="src/assets/fast-delivery.png" alt="delivery" style={{width: "30px"}} /></div> */}
            <Box
              component="img"
              sx={{
                width: "50px",
                padding: "20px",
                backgroundColor: "#E6E8DD",
                borderRadius: "50px",
              }}
              alt="delivery"
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777082/fast-delivery_dbleiu.png"
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontFamily: "'QuickSand', sans-serif" }}
            >
              Easy To Order
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                color: "grey",
                textAlign: "center",
                margin: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "50px",
                padding: "20px",
                backgroundColor: "#E6E8DD",
                borderRadius: "50px",
              }}
              alt="delivery"
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777082/fast-delivery_dbleiu.png"
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontFamily: "'QuickSand', sans-serif" }}
            >
              Easy To Order
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                color: "grey",
                textAlign: "center",
                margin: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "50px",
                padding: "20px",
                backgroundColor: "#E6E8DD",
                borderRadius: "50px",
              }}
              alt="delivery"
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777082/fast-delivery_dbleiu.png"
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", fontFamily: "'QuickSand', sans-serif" }}
            >
              Easy To Order
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                color: "grey",
                textAlign: "center",
                margin: "10px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </div>
        </div>
      </section>
      <section>
        <div style={{ marginTop: "50px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Our Special Dishes
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ color: "grey", textAlign: "center", margin: "10px" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ratione optio neque quae ab architecto ut? <br /> Officia iste
              excepturi, doloribus maiores quod repellendus dolorum iusto
              recusandae. Quam voluptatibus atque veritatis.
            </Typography>
          </div>
        </div>
      </section>
      <section style={{ margin: "10px", paddingTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            marginLeft: !isMobile && "20rem",
          }}
        >
          <div>
            <Box
              component="img"
              sx={{
                padding: "20px",
                width: isMobile ? "200px" : "250px",
                display: "flex",
                marginLeft: isMobile && "80px",
              }}
              alt="delivery"
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777055/chef_lq2jtv.png"
            />
          </div>
          <div>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                fontWeight: "bold",
                textAlign: isMobile ? "center" : "left",
                display: "flex",
                marginTop: !isMobile && "7rem",
                paddingLeft: !isMobile && "3rem",
              }}
            >
              Healthy Food To Live A <br />
              Healthier Life In The Future
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "grey",
                textAlign: isMobile ? "center" : "left",
                display: "flex",
                marginTop: "20px",
                paddingLeft: !isMobile && "3rem",
                maxWidth: !isMobile ? "52.5%" : "100%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique in consequuntur rerum voluptas numquam repellendus eius
              libero quos.
            </Typography>
            <Box
              sx={{
                textAlign: isMobile && "center",
                display: "flex",
                justifyContent: isMobile && "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#548776",
                  borderRadius: "25px",
                  textAlign: isMobile ? "center" : "left",
                  display: "flex",
                  justifyContent: isMobile && "center",
                  marginTop: "20px",
                  marginLeft: !isMobile && "3rem",
                  fontFamily: "'QuickSand', sans-serif",
                }}
              >
                Explore More
              </Button>
            </Box>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#ebf7f3",
          margin: "20px",
          padding: "25px",
          marginTop: "50px",
        }}
      >
        <div style={{ marginTop: "35px", paddingLeft: !isMobile && "5rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                textAlign: isMobile ? "center" : "left",
                fontWeight: "bold",
              }}
            >
              Our Popular Menu
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "grey",
                textAlign: isMobile ? "center" : "left",
                paddingTop: "20px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ratione optio neque quae ab architecto ut? <br /> Officia iste
              excepturi, doloribus maiores quod repellendus dolorum iusto
              recusandae. Quam voluptatibus atque veritatis.
            </Typography>
          </div>
        </div>
      </section>
      <section style={{ margin: "10px", paddingTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            marginLeft: !isMobile && "10rem",
          }}
        >
          <div>
            <Box
              component="img"
              sx={{
                padding: "20px",
                width: isMobile ? "350px" : "500px",
                display: "flex",
                // marginLeft: isMobile && "10px",
              }}
              alt="delivery"
              src="https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777067/customer_dcke4u.png"
            />
          </div>
          <div>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                fontWeight: "bold",
                textAlign: isMobile ? "center" : "left",
                display: "flex",
                marginTop: !isMobile && "1rem",
                paddingLeft: !isMobile && "3rem",
              }}
            >
              Our Lovely Customers Love <br />
              Our Food
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "grey",
                textAlign: isMobile ? "center" : "left",
                display: "flex",
                marginTop: "20px",
                paddingLeft: !isMobile && "3rem",
                maxWidth: !isMobile ? "52.5%" : "100%",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique in consequuntur rerum voluptas numquam repellendus eius
              libero quos.
            </Typography>
            <Rating
              name="read-only"
              defaultValue={4}
              readOnly
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "left",
                paddingLeft: !isMobile && "3rem",
                paddingTop: "1rem",
              }}
            />
            <Typography
              variant="p"
              component="p"
              sx={{
                fontFamily: "'QuickSand', sans-serif",
                fontWeight: "bold",
                textAlign: isMobile ? "center" : "left",
                display: "flex",
                justifyContent: isMobile && "center",
                marginTop: "10px",
                paddingLeft: !isMobile && "3rem",
                maxWidth: !isMobile ? "52.5%" : "100%",
              }}
            >
              Jessica Miller
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                color: "grey",
                textAlign: isMobile ? "center" : "left",
                fontFamily: "'QuickSand', sans-serif",
                display: "flex",
                justifyContent: isMobile && "center",
                marginTop: "5px",
                paddingLeft: !isMobile && "3rem",
                maxWidth: !isMobile ? "52.5%" : "100%",
              }}
            >
              London, UK
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: isMobile && "center",
                gap: isMobile && "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: isMobile && "center",
                  display: "flex",
                  justifyContent: isMobile && "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "60px",
                    height: "65px",
                    textAlign: isMobile ? "center" : "left",
                    display: "flex",
                    justifyContent: isMobile && "center",
                    marginTop: "20px",
                    marginLeft: !isMobile && "3rem",
                    fontFamily: "'QuickSand', sans-serif",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <KeyboardBackspace fontSize="large" />
                </Button>
              </Box>
              <Box
                sx={{
                  textAlign: isMobile && "center",
                  display: "flex",
                  justifyContent: isMobile && "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "60px",
                    height: "65px",
                    textAlign: isMobile ? "center" : "right",
                    display: "flex",
                    justifyContent: isMobile && "center",
                    marginTop: "20px",
                    marginLeft: !isMobile && "3rem",
                    fontFamily: "'QuickSand', sans-serif",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <East fontSize="large" />
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </section>
      <section style={{ margin: "10px", paddingTop: "50px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: !isMobile && "10rem",
            backgroundImage: `url("https://res.cloudinary.com/dr1pmtefx/image/upload/v1693777096/food_1_fojmk7.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: !isMobile && "80vw",
            marginTop: "35px",
            // paddingLeft: !isMobile && "5rem"
            justifyContent: "center",
            borderRadius: "25px"
          }}
        >
          <Typography
            variant= "h4"
            component="h4"
            sx={{
              fontFamily: "'QuickSand', sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
              paddingTop: "50px",
              fontSize: isMobile && "24px"
            }}
          >
            Join Our Membership And Get <br />
            Upto 30% Off On All Orders
          </Typography>
          <Box sx={{display: "flex", justifyContent: "center", margin: "50px"}}>
          <TextField variant="filled" label="Enter Your Email" sx={{backgroundColor: "#fff", width: isMobile ? "20rem" : "30rem", borderRadius: "50px"}} />
          </Box>
        </div>
      </section>
    </>
  );
}

export default Home;
