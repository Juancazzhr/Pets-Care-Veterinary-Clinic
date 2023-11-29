import { Pet } from '../../interfaces';
import { useFormik } from 'formik';
import { validationSchema } from './petSchema.form';


interface Props {  
  pet: Pet[]
}


export const useRegisterForm = () => {
  const formik = useFormik({
    initialValues:{
      name: "",
      size: "",
      clientId: 0,
      petType: "",
      race: ""
    },
    validationSchema,
    onSubmit(values, formikHelpers) {  
      console.log(values);
          
    },
  })
  return formik
}