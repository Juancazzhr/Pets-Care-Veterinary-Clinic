import { useFormik } from 'formik';
import { validationSchema } from './petSchema.form';
import { Pet } from '@/interfaces';


interface Props {  
  pet: Pet[]
}

 export const PetRegisterForm = () => {
    const formik = useFormik({
      initialValues: {
        pet: {
          petName: "",
          type: "",
          size: "",
          race: "",
        },
      },
        validationSchema,
        onSubmit: (values : Props) => {
            console.log(values);
        },
    });

    return formik;
};