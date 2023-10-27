import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styles from './Slide.module.css'

interface Props {
    item: {
        title: string;
        description: string;
    }
}

const Slide = ({ item }: Props) => {
    return (
        <Paper>
            <Container>
                <Typography className={styles.title}>{item.title}</Typography>
                <Typography className={styles.title}>{item.description}</Typography>
            </Container>
        </Paper>
    )
}

export default Slide