import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styles from './Slide.module.css'


interface Props {
    item: {
        title: string;
        description: string;
       image: string
    }
}

const Slide = ({ item }: Props) => {
       
    return (
        <Paper className={styles.paper} sx={{backgroundImage: `url(${item.image})`}}>
            <Container className={styles.container} >
                <Typography className={styles.title}>{item.title}</Typography>
                <Box className={styles.line}></Box>
                <Typography className={styles.description}>{item.description}</Typography>
            </Container>
        </Paper>
    )
}

export default Slide