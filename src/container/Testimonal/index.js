import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  testimonal01,
  testimonal02,
  testimonal03,
  testimonal04,
  testimonal05,
} from "../../constants/images";

function Testimonal() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "#FAFAFA", padding: "100px 0" }}>
      <Container>
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontWeight: 600,
            fontSize: 32,
            lineHeight: "100%",
            marginBottom: "50px",
          }}
        >
          Foydalanuvchilarimiz fikrlari
        </Typography>
        <Box sx={{ padding: "75px 70px", background: "#fff" }}>
          <TabContext value={value}>
            <Box>
              <TabPanel value="1">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "34px",
                  }}
                >
                  Xammaga salom men Fizika kursi sotib olganimdan juda
                  xursandman chunki o'zbekistondagi eng malakali ustozlardan
                  darslani o'rganyabman. Hammaga tafsiya qilaman. Ustozlarimiz
                  bizga ilm berishdan charchamasinlar. Fizika o'qituvchisiga
                  kattakon raxmat!!
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "34px",
                  }}
                >
                  Ustozlarimiz bizga ilm berishdan charchamasinlar. Fizika
                  o'qituvchisiga kattakon raxmat!! Xammaga salom men Fizika
                  kursi sotib olganimdan juda xursandman chunki o'zbekistondagi
                  eng malakali ustozlardan darslani o'rganyabman. Hammaga
                  tafsiya qilaman.
                </Typography>
              </TabPanel>
              <TabPanel value="3">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "34px",
                  }}
                >
                  Fizika kursi sotib olganimdan juda xursandman chunki
                  o'zbekistondagi eng malakali ustozlardan darslani
                  o'rganyabman. Hammaga tafsiya qilaman. Ustozlarimiz bizga ilm
                  berishdan charchamasinlar. Fizika o'qituvchisiga kattakon
                  raxmat!!
                </Typography>
              </TabPanel>
              <TabPanel value="4">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "34px",
                  }}
                >
                  Hammaga tafsiya qilaman.Barcha ustozlarimiz bizga ilm
                  berishdan charchamasinlar. Fizika o'qituvchisiga kattakon
                  raxmat!! Xammaga salom men Fizika kursi sotib olganimdan juda
                  xursandman chunki o'zbekistondagi eng malakali ustozlardan
                  darslani o'rganyabman.
                </Typography>
              </TabPanel>
              <TabPanel value="5">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "34px",
                  }}
                >
                  Barcha ustozlarimiz bizga ilm berishdan charchamasinlar.
                  Fizika o'qituvchisiga kattakon raxmat!! Xammaga salom men
                  Fizika kursi sotib olganimdan juda xursandman chunki
                  o'zbekistondagi eng malakali ustozlardan darslani
                  o'rganyabman. Hammaga tafsiya qilaman.
                </Typography>
              </TabPanel>
            </Box>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  ".css-heg063-MuiTabs-flexContainer": {
                    justifyContent: "center",
                    borderBottom: 1,
                    borderColor: "#F5F5F5",
                    borderRadius: "5px",
                  },
                  ".css-13zgqbm-MuiTabs-indicator": {
                    background: "#F58529;",
                  },
                }}
              >
                <Tab label={<img src={testimonal04} />} value="1" />
                <Tab label={<img src={testimonal05} />} value="2" />
                <Tab label={<img src={testimonal01} />} value="3" />
                <Tab label={<img src={testimonal02} />} value="4" />
                <Tab label={<img src={testimonal03} />} value="5" />
              </TabList>
            </Box>
            <Box>
              <TabPanel value="1">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 700,
                  }}
                >
                  David Packer
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: 0.5,
                    opacity: 0.5,
                  }}
                >
                  Phographer, New York
                </Typography>
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 700,
                  }}
                >
                  Luna Adiana
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: 0.5,
                    opacity: 0.5,
                  }}
                >
                  Teacher, Washington
                </Typography>
              </TabPanel>
              <TabPanel value="3">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 700,
                  }}
                >
                  Safia Larson
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: 0.5,
                    opacity: 0.5,
                  }}
                >
                  Designer, California
                </Typography>
              </TabPanel>
              <TabPanel value="4">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 700,
                  }}
                >
                  Mary Janson
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: 0.5,
                    opacity: 0.5,
                  }}
                >
                  Photographer, London
                </Typography>
              </TabPanel>
              <TabPanel value="5">
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 700,
                  }}
                >
                  Jonh Swift
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: 0.5,
                    opacity: 0.5,
                  }}
                >
                  Programmer, Switland
                </Typography>
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonal;
