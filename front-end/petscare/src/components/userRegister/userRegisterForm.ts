import { useFormik } from 'formik';
import { validationSchema } from './userSchema.form';
import { User } from '@/interfaces';


interface Props {  
    user: User[]
  }

export const useRegisterForm = () => {
    const formik = useFormik({
        initialValues: {
                firstName: "",
                lastName: "",
                address: "",
                phone: 0,
                email: "",
                rol: {
                    id: 3,
                    name: "client",
                    description: null,
            },
        },
        validationSchema,
        onSubmit: (values: Props) => {
            console.log(values);
        },
    });

    return formik;
};
