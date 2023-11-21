import { useFormik } from 'formik';
import { validationSchema } from './userSchema.form';

export interface FormValues {
    user: {
        firstName: string;
        lastName: string;
        address: string,
        phone: string,
        email: string,
        password: string,
        confirmPassword: string,
        rol: {
            id: number,
            name: string,
            description: null,
        },

    };
}

export const useRegisterForm = () => {
    const formik = useFormik<FormValues>({
        initialValues: {
            user: {
                firstName: "",
                lastName: "",
                address: "",
                phone: "",
                email: "",
                password: "",
                confirmPassword: "",
                rol: {
                    id: 3,
                    name: "client",
                    description: null,
                },
            },
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return formik;
};
