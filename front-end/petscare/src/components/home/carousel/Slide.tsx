import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from './Slide.module.css'
import { StaticImageData } from 'next/image'


interface Props {
    item: {
        title: string;
        description: string;
       image: StaticImageData
    }
}

const Slide = ({ item }: Props) => {
    return (
        <Paper className={styles.paper}>
            <Container className={styles.container} >
                <Typography className={styles.title}>{item.title}</Typography>
                <Typography className={styles.description}>{item.description}</Typography>
            </Container>
        </Paper>
    )
}

export default Slide