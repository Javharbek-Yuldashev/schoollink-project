import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  university01,
  university02,
  university03,
  university04,
  university05,
  university06,
  university07,
  university08,
  university09,
  university10,
  university11,
} from "../../constants/images";

function University() {
  return (
    <Container sx={{ padding: "60px 0 80px" }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          fontWeight: 900,
          fontSize: 32,
          lineHeight: "45px",
          marginBottom: "50px",
        }}
      >
        Bizning bitiruvchilar talaba bo’lgan <br /> Oliy Ta’lim Muassasalari
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src={university01} alt="university" />

        <img src={university02} alt="university" />

        <img src={university03} alt="university" />

        <img src={university04} alt="university" />

        <img src={university05} alt="university" />

        <img src={university06} alt="university" />

        <img src={university07} alt="university" />
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}
      >
        <img src={university08} alt="university" />

        <img src={university09} alt="university" />

        <img src={university10} alt="university" />

        <img src={university03} alt="university" />

        <img src={university11} alt="university" />
      </Box>
    </Container>
  );
}

export default University;
