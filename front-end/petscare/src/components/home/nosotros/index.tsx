import { FC } from 'react';
import styles from '../nosotros/nosotros.module.css'



const Nosotros: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rectangulo}></div>
      <h2>nosotros</h2>
      <p className="texto">
        ¡En PETS CARE Clínica Veterinaria encontrarás todo lo que necesitas para cuidar y consentir a tu mascota!
      </p>
      <p className="texto">
        Nuestro dedicado equipo de veterinarios altamente capacitados está listo para brindarle a tu mascota la atención médica que merece.
        Además, contamos con equipos para realizar diagnósticos de alta complejidad, los que se acompañan de una infraestructura que permite
        la excelencia en servicios veterinarios los 365 días del año.
      </p>
      
    </div>
  );
}

export default Nosotros;





