import { Box, Paper, AppBar, Toolbar, Grid } from '@mui/material';
import { Close, Minimize, CropSquare } from '@mui/icons-material';

const CommunityMember = ({ data }) => {
  console.log(data)
  return (
    <Paper sx={{ m: 4, width: 800, height: 600, borderRadius: 10, border: '2px solid black', position: 'relative', overflow: 'hidden' }}>
      <AppBar position="static" sx={{ backgroundColor: "#FDCDDD", boxShadow: 'none', borderBottom: '2px solid black', borderRadius: '10px 10px 0 0' }}>
        <Toolbar>
          <Box flexGrow={1} ml={2} fontWeight="bold" fontSize='2rem'>
            Hello! 👋 I&apos;m {data.name}
          </Box>
          <Minimize size="small" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px', ml: -1, mr: 1 }} />
          <CropSquare size="small" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px', mr: 1 }} />
          <Close size="small" color="error" sx={{ backgroundColor: "white", border: '1px solid black', borderRadius: '3px' }} />
        </Toolbar>
      </AppBar>
      <Grid p={2} pb={9} container direction="row" bgcolor="#f0f0f0">
        <Grid
          container
          item
          direction="column"
          xs={6}
          md={6}
        >
          <Grid item>
            <img style={{ width: '100%' }} src={data.picture} alt={data.name} />
          </Grid>
          <Grid item alignSelf="center" fontSize='1.25rem'>
            <p style={{ fontWeight: 'bold' }}>{data.email}</p>
          </Grid>
        </Grid>
        <Grid container xs={6} md={6} item>
          <Grid item>
            <ul>
              <li>text</li>
              <li>text</li>
              <li>text</li>
              <li>text</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CommunityMember;
{/* <Grid
container
direction="column"
justifyContent="flex-start"
alignItems="flex-start"
>
<Grid item>
  <img style={{}} src={data.picture} alt={data.name} />
</Grid>
<Grid item>
  <p>{data.email}</p>
</Grid>
</Grid> */}