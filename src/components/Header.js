import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bolder",
        cursor: "pointer",
      },
}));


const Header = () => {
  const classes = useStyles();

   const navigate = useNavigate();

   const {currency, setCurrency} = CryptoState();

   const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    }
   });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography variant="h6" onClick={() => navigate("/")} className={classes.title}>Crypto Hunter</Typography>
                <Select variant="outlined" style={{
                    width: 100,
                    height: 40,
                    marginLeft: 15,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value={'USD'}>USD</MenuItem>
                    <MenuItem value={'INR'}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header;
