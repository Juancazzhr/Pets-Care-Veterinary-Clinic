import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import Slide from './Slide';
import HorizontalRule from '@mui/icons-material/HorizontalRule';
import image01 from '../../../assets/img/experiencia.jpg';



const Slider: FC = () => {

    const sliders = [
        {
            title: "experiencia",
            description: "Desde 2000, dedicados a la atención integral de tu mascota ",
            image: image01
        },
        {
            title: "confianza",
            description: "Profesionales con altos niveles de capacitación, innovación, exigencia y seriedad.",
            image: image01
        },
        {
            title: "empatía",
            description: "Compartimos tu amor por ellos y los cuidamos como si fueran nuestros.",
            image: image01
        }
    ]

    return (
        <Carousel
            indicatorIconButtonProps={{
                style: {
                    color: '#573469',
                    top: '-30px ',
                    zIndex: '1000'                   
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#64C9A7'
                }
            }}
            IndicatorIcon={<HorizontalRule />}>
            {
                sliders.map((slide, i) => <Slide key={i} item={slide} />)
            }
        </Carousel>
    )
}

export default Slider