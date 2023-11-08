import { FC } from 'react';
import styles from '../nosotros/nosotros.module.css'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TitleSection from '../../utils/TitleSection';


const Nosotros: FC = () => {
  return (
    <div className={styles.bg}>
      <Container maxWidth={'xl'} >
        <Box sx={{ flexGrow: 1 }}>
          <Grid className={styles.contenido} container spacing={1}>
            <Grid item xs={12} md={6}>
              <TitleSection title='nosotros' colorLine='573469' colorText='FFFFFF' />
            </Grid>
            <Grid item xs={12} md={6} className={styles.texto}>
              <p>
                ¡En <strong>PETS CARE Clínica Veterinaria</strong> encontrarás todo lo que necesitas para cuidar y consentir a tu mascota!
              </p>
              <p>
                Nuestro dedicado equipo de veterinarios altamente capacitados está listo para brindarle a tu mascota la atención médica que merece.
                Además, contamos con equipos para realizar diagnósticos de alta complejidad, los que se acompañan de una infraestructura que permite
                la excelencia en servicios veterinarios los 365 días del año.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div >
  );
}

export default Nosotros;





