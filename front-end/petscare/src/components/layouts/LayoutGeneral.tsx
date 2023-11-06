import { FC, PropsWithChildren } from 'react'
import { Stack, Box } from "@mui/material";
import GeneralHeader from './header/generalHeader'
import GeneralFooter from './footer/generalFooter'

const LayoutGeneral: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <Stack direction={"column"} height={'100%'}>
      <GeneralHeader />
      <Box display={'flex'} flexGrow={1} justifyContent={'center'}>
        {children}
      </Box>
      <GeneralFooter />
    </Stack>
  )
}

export default LayoutGeneral