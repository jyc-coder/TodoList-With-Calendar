import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from './styles'





export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);

  const viewChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h3" component="div" sx={{fontSize: {xs:'20px',md:'50px'},transition:'0.5s'}} >
            Todo-Cal
          </Typography>
          <Typography  sx={{opacity: {xs:'0', md:'1'}, transition: '0.5s'}} variant="h3" component="div" >
            As always, you can do it
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}