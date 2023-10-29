import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import Slide from './Slide';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import styles from './Slide.module.css'



const Slider: FC = () => {

    const sliders = [
        {
            title: "experiencia",
            description: "Desde 2000, dedicados a la atención integral de tu mascota ",
            image: `${process.env.BASE_URL+"/experiencia.jpg"}`
        },
        {
            title: "confianza",
            description: "Profesionales con altos niveles de capacitación, innovación, exigencia y seriedad.",
            image:`${process.env.BASE_URL+"/confianza.jpg"}`
        },
        {
            title: "empatía",
            description: "Compartimos tu amor por ellos y los cuidamos como si fueran nuestros.",
            image: `${process.env.BASE_URL+"/empatia.jpg"}`
        }
    ]

    return (
        <Carousel
            indicatorIconButtonProps={{
                style: {
                    color: '#573469',
                    bottom: '70px ',
                    zIndex: '1000'                   
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#64C9A7'
                }
            }}
            IndicatorIcon={<HorizontalRuleRoundedIcon className={styles.indicator} />}>
            {
                sliders.map((slide, i) => <Slide key={i} item={slide} />)
            }
        </Carousel>
    )
}

export default Slider