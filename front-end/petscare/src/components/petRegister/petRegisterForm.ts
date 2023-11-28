import { useFormik } from 'formik';
import { validationSchema } from './petSchema.form';
import { Pet } from '@/interfaces';
import { time } from 'console';


interface Props {  
  pet: Pet[]
}


 export const PetRegisterForm = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        petType: {
          id: 0,
          typeName: ""
        },
        size: "",
        clientId: 53,
        race: '',
      },
        validationSchema,
        onSubmit: (values : Pet) => {
            console.log(values);
        },
    });

    return formik;
};