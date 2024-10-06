import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
    //   [theme.breakpoints.down("md")]: {
    //     width: "100%",
    //     marginTop: 0,
    //     padding: 20,
    //     paddingTop: 0,
    //   },
    },
  }));

const SelectButton = ({children, selected, onClick}) => {
    const classes = useStyles();
  return (
    <span
    className={classes.selectbutton}
    onClick={onClick}
    >
      {children}
    </span>
  )
}

export default SelectButton
