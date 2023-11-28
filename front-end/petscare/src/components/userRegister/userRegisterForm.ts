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
            id: 0,
            password: ''
        },
        validationSchema,
        onSubmit: (values: User) => {
            localStorage.setItem("mailUser", values.email)
        }
    });

    return formik;
};
