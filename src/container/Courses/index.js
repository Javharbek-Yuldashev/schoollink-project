import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Course } from "../../components";
import { courseData } from "../../constants/Data";

const styles = {
  card: {
    background: "#fff",
    boxShadow: "0px 2px 2px rgba(204, 204, 204, 0.51)",
    borderRadius: "5px",
    width: "757px",
  },
};

function Courses() {
  return (
    <Box sx={{ background: "#FAFAFA" }}>
      <Container>
        <Box
          sx={{
            padding: "160px 0 50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{ fontWeight: 900, fontSize: 32, lineHeight: "100%" }}
          >
            Bizning Kurslar
          </Typography>

          <Box
            style={styles.card}
            sx={{
              width: "100%",
              padding: "10px 20px",
              margin: "24px 0 48px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontWeight: 600,
                textTransform: "none",
                padding: "10px 40px",
              }}
            >
              Barcha kurslar
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 600,
                opacity: 0.6,
                textTransform: "none",
                padding: "10px 40px",
              }}
            >
              Aniq fanlar
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 600,
                opacity: 0.6,
                textTransform: "none",
                padding: "10px 40px",
              }}
            >
              Tabiiy fanlar
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 600,
                opacity: 0.6,
                textTransform: "none",
                padding: "10px 40px",
              }}
            >
              Gumanitar fanlar
            </Button>
          </Box>

          <Grid container spacing={4}>
            {courseData.map((data, index) => {
              return (
                <Grid item xs={4}>
                  <Course data={data} key={index + "A" + 1235} />
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="contained"
            sx={{
              fontWeight: 600,
              fontSize: 18,
              textTransform: "none",
              padding: "10px 60px",
              marginTop: "50px",
              alignSelf: "center",
            }}
          >
            Barcha kurslar
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Courses;
