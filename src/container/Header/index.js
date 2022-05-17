import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { headerImage, icon01, icon02, icon03 } from "../../constants/images";
import { Statistics } from "../../components";

const styles = {
  BoxContainer: {
    height: "100%",
    backgroundImage: `url(${headerImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 0 120px",
  },
};

function Header() {
  return (
    <Box style={styles.BoxContainer}>
      <Container>
        <Typography
          variant="h1"
          component={"h1"}
          sx={{ fontWeight: 600, fontSize: 48 }}
        >
          Masofaviy ta’lim
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            margin: "16px 0 50px",
            width: "35%",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Masofaviy o'quv kurslar orqali siz, eng so'ngi darsliklarni oson,
          qulay va mukammal o'rganishingiz mumkin.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            padding: "10px 50px",
            textTransform: "none",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Hoziroq boshlash
        </Button>

        <Box sx={{ position: "relative", bottom: "-170px" }}>
          <Box
            fullwidth
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Statistics img={icon01} number="2200" info="Video kurslar" />
            <Statistics img={icon02} number="100" info="O’qituvchilar" />
            <Statistics img={icon03} number="5450" info="Sinov testlar" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
