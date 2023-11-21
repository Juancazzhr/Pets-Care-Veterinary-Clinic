import { useFormik } from 'formik';
import { validationSchema } from './petSchema.form';

export interface FormValues {
    pet: {
        petName: string;
        type: string;
        size: string;
        race: string;
    };
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
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return formik;
};