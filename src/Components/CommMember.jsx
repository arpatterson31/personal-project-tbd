import { Box, AppBar, Toolbar } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { Close, Minimize, CropSquare } from '@mui/icons-material';

const CommunityMember = ({ data }) => {

  return (
    <Card sx={{ borderRadius: 10, border: '2px solid black', maxWidth: 350 }}>
      <AppBar position="static" sx={{ backgroundColor: "#FDCDDD", boxShadow: 'none', borderBottom: '2px solid black', borderRadius: '10px 10px 0 0' }}>
        <Toolbar>
          <Box flexGrow={1} ml={1} fontWeight="bold" fontSize='1.25rem'>
            Hello! 👋 I&apos;m {data.firstName}
          </Box>
          <Minimize size="small" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px', ml: -1, mr: 1 }} />
          <CropSquare size="small" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px', mr: 1 }} />
          <Close size="small" color="error" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px' }} />
        </Toolbar>
      </AppBar>
      <CardMedia
        component="img"
        image={data.picture}
        alt={data.firstName}
        sx={{ height: '35vh'}}
      />
      <CardContent bgcolor="#f0f0f0">
        <Typography>
          {data.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommunityMember;