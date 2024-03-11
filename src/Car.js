import { Card, CardContent, CardMedia, Typography,Grid, Skeleton,Box, Switch } from '@mui/material';
import React,{useState} from 'react'

const Car = () => {
    const[Load,setLoad]=useState();
   
    const handleToggle=()=>
    {
        setLoad((prevload)=>!prevload)
    }
//     const skeltonCard=()=>
// {
//     <CardContent>
//         <Skeleton variant='rectangular'/>
        
//     </CardContent>
// }
const imgsrc=Load?'./th.jpg':null




  return (
    <Grid container  alignItems="center" spacing={2}>
        <Grid item>
            <Switch onChange={handleToggle} />
        </Grid>
   <Grid item>
    <Card>
       
        <CardContent>
        {imgsrc ?
            <img  width="120" height="120" src={imgsrc} />: <CardContent >
                 <Skeleton width={120} height={120} variant='rectangular'/>
                 
                </CardContent>
        }

            {Load?<Typography variant='h5'>Card</Typography>:
            <Box sx={{mb:2}}>
               <Skeleton variant='rectangular' width={50} height={30} sx={{marginLeft:2}}/>
               </Box>
}
               
            {Load?<Typography variant='body2'  >Hello</Typography>:<Skeleton variant='rectangular'width={100} height={30} sx={{marginLeft:2}}/>}
            
        </CardContent>
        
    </Card>
   </Grid>
   </Grid>

  )
}


export default Car