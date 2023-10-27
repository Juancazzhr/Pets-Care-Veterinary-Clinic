import React, { FC } from 'react';
import Carousel from 'react-material-ui-carousel'
import Slide from './Slide';


const Slider:FC = () =>{

   const sliders = [
        {
            title: "experiencia",
            description: "Desde 2000, dedicados a la atención integral de tu mascota "
        },
        {
            title: "confianza",
            description: "Profesionales con altos niveles de capacitación, innovación, exigencia y seriedad."
        },
        {
            title: "empatía",
            description: "Compartimos tu amor por ellos y los cuidamos como si fueran nuestros."
        }
    ]

    return (
        <Carousel>
            {
                sliders.map( (slide, i) => <Slide key={i} item={slide} /> )
            }
        </Carousel>
    )
}

export default Slider