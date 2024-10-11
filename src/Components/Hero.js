import React from 'react';
import { Container, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Import MUI Search icon

function Hero() {
  // Array of distinct button labels
  const popularJobs = [
    'Software', 
    'Developer', 
    'Backend', 
    'React', 
    'Node.js',
    'React Native', 
    'Flutter', 
    'UI/UX', 
    'Designer',
    'Web', 
    'SEO', 
    'Marketing', 
    'Writer',
  ];

  return (
    <>
      <Container maxWidth="md">
        <div className="hero">
          <h1>
            Dig. Apply <br /> Prepare Your Future
          </h1>
          <p>
            Hiring Mine connects employers and job seekers, where employers are
            the source of the resources, and the job seeker can find and apply
            for their targeted job.
          </p>

          {/* Search Input */}
          <TextField 
            label="Search by role or keyword" 
            sx={{ width: '70%' }} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Search Button */}
          <Button className='btn' sx={{ marginTop: '16px' }}>Find Job</Button>

          {/* Popular Jobs */}
          <h3>Popular Jobs</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
            {popularJobs.map((job, index) => (
              <Button 
                key={index} 
                variant="outlined"
                sx={{
                  borderColor: '#6851FF',
                  color: '#6851FF',
                  fontWeight: 'bold',
                  flex: '1 1 calc(100% / 7 - 10px)', // 7 buttons per row
                  
                }}
              >
                {job} {/* Unique label for each button */}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    <div style={{width:'100%', height:'50vh'}}>
    <img width={'100%'} height={'100%'} src='/images/banner.png'/>
    </div>

    <div>
        <h1 style={{fontSize:'40px'}}>Get Hired In <span style={{color:'#6851FF'}}> 4 Quick Easy Steps (Coming Soon)</span></h1>
        <p style={{fontSize:'20px'}}>The quickest and the most effective way to get hired by the top firm.</p>
    </div>
    </>
  );
}

export default Hero;
