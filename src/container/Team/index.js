import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { team } from "../../constants/Data";
import { TeamCard } from "../../components";

function Team() {
  return (
    <Box sx={{ background: "#FAFAFA", padding: "70px 0 100px" }}>
      <Container>
        <Typography
          component="h2"
          variant="h4"
          sx={{ fontWeight: 900, fontSize: 32, lineHeight: "100%", marginBottom: '50px' }}
        >
          Bizning jamoa
        </Typography>

        <Grid container spacing={4}>
          {team.map((data, index) => {
            return (
              <Grid item xs={3}>
                <TeamCard data={data} key={index + "A" + 987} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Team;
