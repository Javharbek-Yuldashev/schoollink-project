import * as React from "react";
import Container from "@mui/material/Container";
import { logo, login } from "../../constants/images";
import { Box, Button, Typography } from "@mui/material";

function Navbar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 2.5,
      }}
    >
      <img src={logo} alt="logo" />
      <Box sx={{ display: "flex", gap: 7, alignItems: 'center' }}>
        <Typography sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>Kurslar</Typography>
        <Typography sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>Online test</Typography>
        <Typography sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>Blog</Typography>
        <Typography sx={{opacity: 0.5, '&:hover': {cursor: 'pointer', opacity: 1}}}>Yordam</Typography>
        <Button
          variant="text"
          color="secondary"
        >
          <img src={login} alt="login" />
          <Typography sx={{textTransform: 'capitalize', marginLeft: 0.5}}>Kirish</Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Navbar;
