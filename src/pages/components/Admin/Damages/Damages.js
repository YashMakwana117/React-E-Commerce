import React from 'react'
import styles from './Damages.module.css';
import TopBar from '../TopBar/TopBar';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function Damages() {
  return (
    <>
        <TopBar/>
        <div className={styles.addDamagesMain}>
            <h2>Dashboard/Damages</h2>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3>Damages</h3>
                <Box sx={{marginRight:2}}>
                    <Button variant="contained" style={{backgroundColor:'red'}} startIcon={<AddIcon />}>
                        Add Damage
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>DATE</TableCell>
                            <TableCell>REFERENCE NO</TableCell>
                            <TableCell>TOTAL</TableCell>
                            <TableCell>NOTE</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>
  )
}