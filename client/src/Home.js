import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles';
import MyImage from "./background.jpeg";

const styles = () => {
  return {
    paperContainer: {
      height: 500,
      backgroundImage: `url(${MyImage})`,
      opacity: 0.5,
  },
    toolBar: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: 'white',
    },
    logo: {
      color: 'blue',
      cursor: 'pointer',
    },
    link: {
      color: "#000"
    },
    menuIcon: {
      color: '#000',
    },
    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
    },
    form: {
      marginTop: '30px',
    },
    formHeading: {
      textAlign: 'center',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    aboutUsContainer: {
      width: '100%',
      display: 'flex',
      minHeight: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '30px 0px 50px 0px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    title: {
      paddingBottom: '15px',
    },
    subtitle: {
      opacity: '0.4',
      paddingBottom: '30px',
    },
    largeImage: {
      width: '100%',
    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '500px',
    },
    sectionGridItem: {
      backgroundColor: '#f2f0f1',
      textAlign: 'center',
      padding: '30px',
      width: '200px',
      borderRadius: '10px',
      margin: '10px !important',
    },
    inputField: {
      marginBottom: '20px !important',
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#f2f0f1',
      flexDirection: 'column',
    },
    footerText: {
      paddingBottom: '10px',
    },
    footerDate: {
      opacity: '0.4',
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    testimonialStatement: {
      paddingBottom: '25px',
    },
    avatar: {
      marginRight: '10px',
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },
  };
};

const useStyles = makeStyles(styles);

function Home () {
  const classes = useStyles();
      return (
          <div style={styles.paperContainer}>
            <Box className={classes.heroBox}>
              <Grid container spacing={6} className={classes.gridContainer}>
                <Grid item xs={12} md={7}>
                  <Typography variant="h3" fontWeight={700} className={classes.title}>
                    Welcome to your new home for premium card collecting
                  </Typography>
                  <Typography variant="h6" className={classes.subtitle}>
                    Browse our site to uncover the best and rarest cards across a variety of sports and trading card games. Our quality, selection, and service is unmatched!
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                  <img src={MyImage} alt="My Team" className={classes.largeImage} />
                </Grid>
              </Grid>
            </Box>
          </div>
        )  
      }

export default Home;


    







