import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <img src="/images/1.png" alt="HiringMine Logo" />
              <Typography variant="body1" sx={{ padding: '15px 0' }}>
                HiringMine connects employers and job seekers, where employers are the source of the resources and job seekers can find and apply for their targeted job.
              </Typography>
              <Typography variant="h5">Follow Us</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h5">Contact Us</Typography>
              <Link href="mailto:portal.hiringmine@gmail.com" color="inherit" underline="none">
                portal.hiringmine@gmail.com
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ fontSize: 22 }}>Privacy Policy</Typography>
        <Typography variant="body2" sx={{ fontSize: 19 }}>Copyright HiringMine 2024. All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
