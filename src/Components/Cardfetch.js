import { useEffect,  } from 'react';
import { Card,  } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import './header.css'  ;

const Cardfetch = ({ data, setData } ) => {
     
    useEffect(() => {
        const fetchCategories = async () => {
                const res = await fetch('https://backend-prod.app.hiringmine.com/api/categories/all');
                const result = await res.json();
                setData(result.data);  // Store fetched data in state
                console.log(result);
                };
        fetchCategories();    }, []);

    return (    
        // <Container maxWidth="lg">
        <div className='cardfetch'>
        {
            data.slice(0, 8).map((item) => (
                <Card 
                    key={item.id} 
                    sx={{ 
                        height: 250,
                        borderRadius: 5,
                        margin: '12px', 
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                        background: 'linear-gradient(180deg, #edebff, hsla(0, 0%, 100%, 0))',
                        '&:hover': {
                            transform: 'translateY(-10px) scale(1.05)',
                            boxShadow: ' 40 4px 40px #0000;',
                        }
                    }}
                >
                    <CardContent style={{ width: '289px',
                            display: 'flex',
                            justifyContent:' space-around',
                            alignItems:' center',
                            flexDirection: 'column',
                            /* padding: 20px; */
                            margin: '35px 0'
                     }}>
                        <div>
                            <img src='/images/svg.svg' alt='SVG icon' />
                        </div>
                        <h3>{item.name}</h3>
                        <p>Jobs {item.postCounts}</p>
                    </CardContent>
                </Card>
            ))
        }
    </div>
    
    )    
}

export default Cardfetch;
