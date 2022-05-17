import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { student01, student02, student03 } from "../../constants/images";
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
  card: {
    background: "#fff",
    boxShadow: "0px 2px 2px rgba(204, 204, 204, 0.51)",
    borderRadius: "5px",
    height: "100%",
  },
};

function Course({ data }) {
  return (
    <Card style={styles.card}>
      <CardMedia component="img" image={data.img} />
      <CardContent sx={{ padding: "40px 30px 0", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Box display={"flex"} gap={2.5} alignItems="center">
          <img src={data.mentor.avatar} alt="mentor" />
          <Box>
            <Typography variant="body1" component="p" sx={{ fontWeight: 700 }}>
              {data.mentor.name}
            </Typography>
            <Typography sx={{ fontSize: "13px", opacity: 0.75 }}>
              Mentor
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: 700,
            margin: "20px 0 15px",
            height: '65px'
          }}
        >
          {data.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Box sx={{ display: "flex"}}>
            <img src={student01} alt="student" />
            <img src={student02} alt="student" />
            <img src={student03} alt="student" />
            <Box
              sx={{
                width: "30px",
                height: "30px",
                background: "#FF0000",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ color: "#fff", fontSize: "12px", fontWeight: 700 }}
              >
                +34
              </Typography>
            </Box>
          </Box>
          <Box sx={{display: 'flex', gap: 1}}>
            <SchoolIcon />
            <Typography fontWeight={600}> {data.lessons} ta dars </Typography>
          </Box>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px', borderTop: '1px solid #E6E6E6', marginTop: '15px'}}>
          <Typography component={'p'} sx={{fontSize: '24px', lineHeight: '100%', fontWeight: 'bold'}}>{`$${data.price}`}</Typography>
          <Button variant="text" sx={{textTransform: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5}}>Batafsil  <ArrowForwardIosIcon sx={{fontSize: '14px'}} /></Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Course;
