import ArrowOutward from "@mui/icons-material/ArrowOutward"
import { Button,Stack,Typography } from "@mui/material"

const styled1={
    root:{
      backgroundImage:`url(https://i.ibb.co/QN3K4Hk/production-id-4779866-1080p-1.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:"cover"
    }
  }
function Contact() {
  return (
    <>
    
      <Typography style={styled1.root} sx={{width:"80%",textAlign:"center",marginLeft:"10%",borderRadius:"25px"}} >
       <Typography sx={{backgroundColor:"black",opacity:"0.8",padding:"10px 50px",borderRadius:"25px"}}><br/><br/>
       
      <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="space-between"
            >
            <Typography >
                <Typography variant="h4" sx={{fontWeight:"bold",color:"white"}}>
                Let's Discuss
                </Typography>
                <Typography variant="p" sx={{color:"gray"}}>
                We'd love to here from you !  
                </Typography>
            </Typography>
            <Typography>
    
            <Button variant="contained" endIcon={<ArrowOutward/>}  sx={{borderRadius:"20px",color:"white",marginLeft:"5px",fontSize:"18px"}}>Contact</Button>
            
            </Typography>
           
      </Stack><br/><br/>
      </Typography>
      </Typography>
      </>
    
  )
}

export default Contact
