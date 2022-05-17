import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { subscribeImage } from "../../constants/images";

const styles = {
  BoxContainer: {
    height: "100%",
    backgroundImage: `url(${subscribeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 0 110px",
  },
};

function Subscribe() {
  return (
    <Box style={styles.BoxContainer}>
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              component={"h1"}
              sx={{ fontWeight: 900, fontSize: 48, lineHeight: "60px" }}
            >
              Kurslarimiz sizga ma’qulmi?
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              sx={{
                marginTop: 3.5,
                fontSize: "26px",
                lineHeight: "32px",
                fontWeight: "500",
              }}
            >
              Hoziroq ro'yhatdan o'ting.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              label="Ismingiz"
              sx={{ background: "#fff", lg: { width: "455px" } }}
            />
            <TextField
              fullWidth
              sx={{
                m: "10px 0 24px",
                background: "#fff",
                lg: { width: "455px" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+998</InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{
                fontWeight: 600,
                fontSize: 18,
                textTransform: "none",
                padding: "10px 60px",
                alignSelf: "center"
              }}
            >
              Ariza qoldirish
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Subscribe;
