import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import Container, {ContainerProps} from "@mui/material/Container";
import {Stack, Typography} from "@mui/material";
import styles from './faqs.module.css'

interface BodySingleProps extends PropsWithChildren {
    title?: string,
    containerProps?: ContainerProps
}

const BodySingle: FC<BodySingleProps> = ({title, containerProps, children}: BodySingleProps) => {
    return (
            <Container maxWidth="xl" {...containerProps}>
                <Stack className={styles.stack}>
                    {title &&
                        <Typography variant={"h2"} my={2} textAlign={'center'} fontSize={36} fontWeight={600} color={"#573469"}>
                            {title}
                        </Typography>
                    }
                    {children}
                </Stack>
            </Container>
    );
};
export default BodySingle;
