import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import Slide from './Slide';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import styles from './Slide.module.css'


interface Props {
    img1: string
    img2: string
    img3: string
  }
  

const Slider: FC<Props> = ({img1, img2, img3}) => {

    const sliders = [
        {
            title: "experiencia",
            description: "Desde 2000, dedicados a la atención integral de tu mascota ",
            image: `${img1}`
        },
        {
            title: "confianza",
            description: "Profesionales con altos niveles de capacitación, innovación, exigencia y seriedad.",
            image:`${img2}`
        },
        {
            title: "empatía",
            description: "Compartimos tu amor por ellos y los cuidamos como si fueran nuestros.",
            image: `${img3}`
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