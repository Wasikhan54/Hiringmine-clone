import React from 'react'
import {Card , Container} from '@mui/material';
import {useState , useEffect} from 'react'
import './Card.css'

function CardDetails( ) {
    const [fetchData, setfetchData] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
                const res = await fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=40&pageNo=2&keyWord=&category=');
                const result = await res.json();
                setfetchData(result.data);  // Store fetched data in state
                console.log(result);
                };
        fetchCategories();    }, []);
        function calculateTimeDifference(updatedAt) {
            const updatedAtDate = new Date(updatedAt);
            const now = new Date();
            const timeDifference = now - updatedAtDate;
            const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        
            if (hoursDifference >= 23) {
                const daysDifference = Math.floor(hoursDifference / 24);
                return `${daysDifference} day${daysDifference > 1 ? 's' : ''}`;
            }
        
            return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''}`;
        }
  return (
    <>
    <div className='carddetails'>
        <div>
        <h1 style={{fontSize:'40px'}}><span style={{color:'#6851FF'}}> Latest And Top </span> Job Openings</h1>
        </div>
    </div>
    <Container maxWidth="xl" sx={{ flexWrap: 'wrap' }}>
    <div className='carddiv'>
        {fetchData.slice(0, 6).map((item) => (
            
                <Card
                     key={item.id}
                    sx={{
                        flexBasis: 'calc(33.333% - 20px)', // Three cards per row
                        height: '270px',
                        border: '1px solid #6851FF',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                        marginBottom: '20px',
                    }}
                >
                    <div className='carddetails1'>
                        <div className='cardsec'>
                            <p>{item.companyName}</p>
                            <h3>{item.designation}</h3>
                            <h4 style={{color:'#6851FF'}}> {item.featuredBenefits ? item.featuredBenefits : 'No Salary Mentioned'}</h4>
                        </div>
                        <div className='cardsec1'>
                            <img src='/images/download.png' alt='Company logo' />
                        </div>
                    </div>
                    <div className='carddetails1'>
                        <div className='cardsec'>
                            <p>{item.city} {item.country}</p>
                            <h3>{calculateTimeDifference(item.updatedAt)}</h3>
                        </div>
                        <div className='cardsec1'>
                            <p>{item.views} views</p>
                        </div>
                    </div>
                </Card>
            ))
        }
    </div>
</Container>

    </>
  )
}

export default CardDetails