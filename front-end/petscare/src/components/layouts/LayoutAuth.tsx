import { FC, PropsWithChildren } from 'react'
import { Stack, Box } from "@mui/material";
import GeneralHeader from './header/generalHeader'
import styles from './header/generalHeader.module.css'

const LayoutAuth: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <Stack className={styles.bgAuth} >
      <GeneralHeader variant={'auth'}/>
      <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
        {children}
      </Box>
    </Stack>
  )
}

export default LayoutAuth