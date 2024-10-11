import React from 'react'
import {Card , Container} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import WorkIcon from '@mui/icons-material/Work';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PortraitIcon from '@mui/icons-material/Portrait';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css';

function CardDiv() {
    const cardsdata=[
        {
            id:1,
            title:'Create an Account',
            descripton:'Join our vibrant community. Create your account and unlock boundless opportunities.',
            icon: <PortraitIcon/>
            
        },
        {
            id:2,
            title:'Search a Job',
            descripton:'Explore the latest job openings. Find your next role with our job search engine.',
            icon: <SearchIcon/>
        },
        {
            id:3,
            title:'upload Resume',
            descripton:'Showcase your expertise. Upload your CV or resume and stand out to employers..',
            icon: <UploadFileIcon/>
        }
        ,
        {
            id:4,
            title:'Get a job',
            descripton:'Achieve your career goals. Apply for jobs and embark on your next adventure.',
            icon: <WorkIcon/>
        }

    ]
  return (
    <>
      <Container  maxWidth="xl">
            <div className='carddiv'>
        {
            cardsdata.map(( item , index) => {
                return(
                        <Card sx={{ maxWidth: 300   ,
                            borderRadius    : '10px',
                         }}>
                <CardContent>
                    <h4 style={{color:'#6851FF'}}>{item.icon}</h4>
                    <h2 style={{color:'#6851FF'}}>{item.title}</h2>
                    <p>{item.descripton}</p>
                </CardContent>
            </Card>
                )
            })
        }
    </div>
        </Container>
    <div>
        <h1 style={{fontSize:'40px'}}>Find Your Dream Job<span style={{color:'#6851FF'}}>Super Fast Ever.</span></h1>
        <p style={{fontSize:'20px'}}>We are here to help jobseekers connect with organizer and companies. We are provides the best opportunities to professional people.</p>
    </div>
    <div style={{width:'100%', height:'40vh'}}>
    <img width={'100%'} height={'100%'} src='/images/banne1.webp'/>
    </div>

    <div>
        <h1 style={{fontSize:'40px', margin:'20px 0' }}>Countless Career Options<span style={{color:'#6851FF'}}> Are Waiting For You To Explore</span></h1>
    </div>
    </>
  )
}

export default CardDiv