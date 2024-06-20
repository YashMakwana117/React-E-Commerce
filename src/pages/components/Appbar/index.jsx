import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Box } from '@mui/material';
import logo from '../../../assets/image/Order-360-logo-02.jpg';  // Adjust the path as needed

const CustomAppBar = () => {
    return (
        <div>
            <AppBar 
                position="static" 
                sx={{ 
                    backgroundColor: '#ffffff', 
                    height: '80px', 
                    boxShadow: '' 
                }}
            >
                <Container>
                    <Toolbar sx={{ minHeight: '80px',}}>  
                        <Box component="img" src={logo} alt="Logo" sx={{ height: '50px', padding: '16px' }} /> 
                    
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default CustomAppBar;
