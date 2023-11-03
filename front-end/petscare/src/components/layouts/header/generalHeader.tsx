import { useState } from 'react'
import AppBarComponent from './AppBarComponent';
import NavDrawer from './navDrawer';


const navItems = ['inicio', 'servicios', 'turnos', 'profesionales', 'faqs'];


const GeneralHeader = () => {
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const [auth, setAuth] = useState(true)

    return (
        <>
            <AppBarComponent navItems={navItems} handleDrawerToggle={handleDrawerToggle} auth={auth}/>           
            <NavDrawer navItems={navItems} handleDrawerToggle={handleDrawerToggle} auth={auth} mobileOpen={mobileOpen} />
        </>
    )
}

export default GeneralHeader