import React from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './generalFooter.module.css';



const GeneralFooter = () => {
  return (
    <>
      <Stack className={styles.stackFooter}>
        <Container maxWidth="xl" className={styles.containerFooter}>
          <Grid container spacing={4} className={styles.gridFooter}>
            <Grid item xs={12} sm={6} lg={3} className={styles.gridItemFooter}>
              <LocationOnIcon className={styles.iconsFooter} />
              <Typography>Julián Álvarez 2097, C1425 CABA</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className={styles.gridItemFooter}>
              <PhoneIcon className={styles.iconsFooter} />
              <Typography fontSize={'20px'}>011 4960-2797</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className={styles.gridItemFooter}>
              <EmailIcon className={styles.iconsFooter} />
              <Typography>info@petscare.com.ar</Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className={styles.gridItemFooter}>
              <FacebookIcon className={styles.iconsFooter} />
              <InstagramIcon className={styles.iconsFooter} />
            </Grid>
          </Grid>
        </Container>
      </Stack>
      <Stack className={styles.copyrights}>
        <Typography variant='body2' textAlign={'center'} lineHeight={'50px'}>© 2023 | PETS CARE Clínica Veterinaria</Typography>
      </Stack>
    </>
  )
}

export default GeneralFooter