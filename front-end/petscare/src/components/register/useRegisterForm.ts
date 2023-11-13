import { useFormik } from 'formik';
import { validationSchema } from './schema.form';

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
    pet: {
        petName: string;
        type: string;
        size: string;
        race: string;
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
