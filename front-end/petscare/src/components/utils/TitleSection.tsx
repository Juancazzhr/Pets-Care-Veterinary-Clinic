import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface Props {
    title: string,
    colorLine: string,
    colorText: string
}

const TitleSection: FC<Props> = ({ title, colorLine, colorText }) => {
    return (
        <>
            <Stack sx={{flexDirection: {md: 'row'}}}>
                <Box
                    sx={{
                        borderTop: `9px solid #${colorLine}`,
                        width: '80px',
                        p: '0',
                        ml: { sx: '5px' },
                        mb: '15px',
                        mt: {md: '25px'}
                    }} />

                <Typography
                    sx={{
                        color: `#${colorText}`,
                        fontSize: '35px',
                        fontWeight: '700',
                        textAlign: 'left',
                        ml: { sx: '5px', md: '30px' },
                        mb: '15px'
                    }}>{title}</Typography>
            </Stack>
        </>
    )
}

export default TitleSection
