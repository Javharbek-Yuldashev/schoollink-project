import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const styles = {
  card: {
    background: "#fff",
    boxShadow: "0px 2px 2px rgba(204, 204, 204, 0.51)",
    borderRadius: "5px",
    height: "100%",
  },
};

function TeamCard({ data }) {
  return (
    <Card style={styles}>
      <CardMedia component="img" image={data.img} />
      <CardContent
        sx={{
          padding: "30px 50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          component="p"
          sx={{ fontWeight: 900, textAlign: "center", marginBottom: 0.5 }}
        >
          {data.name}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: "14px",
            "&:hover": { cursor: "pointer", color: "#FF0000" },
          }}
        >
          {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TeamCard;
