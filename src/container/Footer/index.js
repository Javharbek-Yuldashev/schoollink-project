import React from "react";
import { Box, Container, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';

function Footer() {
  return (
    <Box sx={{background: '#1D1D23', padding: '70px 0 40px'}}>
      <Container>
        <Box sx={{display: 'flex', justifyContent: 'space-between', paddingBottom: '60px', borderBottom: '1px solid #858585'}}>
          <Box sx={{display: 'flex', gap: '110px'}}>
            <Box>
              <Typography component={'p'} sx={{fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px'}}>Asosiy</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Online test</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Blog</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', '&:hover': {cursor: 'pointer', opacity: 1}}}>Yordam</Typography>
            </Box>
            <Box>
              <Typography component={'p'} sx={{fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px'}}>Qo'shimcha</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Bizning jamoa</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Natijalar</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', '&:hover': {cursor: 'pointer', opacity: 1}}}>Foydalanuvchilar</Typography>
            </Box>
            <Box>
              <Typography component={'p'} sx={{fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px'}}>Kurslar</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Aniq fanlar</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', marginBottom: '15px', '&:hover': {cursor: 'pointer', opacity: 1}}}>Tabiiy fanlar</Typography>
              <Typography component={'p'} sx={{fontSize: '18px', opacity: 0.7, color: '#fff', '&:hover': {cursor: 'pointer', opacity: 1}}}>Gumanitar</Typography>
            </Box>
          </Box>
          <Box>
            <Typography component={'p'} sx={{fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '20px'}}>Biz bilan aloqa</Typography>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginBottom: '15px', opacity: 0.7, '&:hover': {cursor: 'pointer', opacity: 1}}}>
              <EmailIcon sx={{color: '#fff'}}/>
              <Typography component={'p'} sx={{fontSize: '18px', color: '#fff'}}>info@e-edu.uz</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, marginBottom: '15px', opacity: 0.7, '&:hover': {cursor: 'pointer', opacity: 1}}}>
              <SendIcon sx={{color: '#fff'}}/>
              <Typography component={'p'} sx={{fontSize: '18px', color: '#fff'}}>@e-edu.rasmiykanal</Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1, opacity: 0.7, '&:hover': {cursor: 'pointer', opacity: 1}}}>
              <PhoneIcon sx={{color: '#fff'}}/>
              <Typography component={'p'} sx={{fontSize: '18px', color: '#fff'}}>+998 (99) 999-99-99</Typography>
            </Box>
          </Box>
        </Box>
        <Typography sx={{color: '#858585', opacity: 0.7, marginTop: 4}}>Copyright © 2016-2020, AIF Agency tomonidan ishlab chiqilgan.</Typography>
      </Container>
    </Box>
  );
}

export default Footer;
