import React from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'

const Getbmi = ({data}) => {
  return (
    <div>
          {data?.length != 0 ? (
              <>
               <TableContainer class="" style={{border: "1px solid white", marginTop: "2rem"}}  component={Paper}>
      <Table sx={{ minWidth: 800 }} style={{border: "1px solid white"}} aria-label="simple table">
        <TableHead class="bg-purple-700 h-12 ">
          <TableRow style={{border: "1px solid white"}}>
            <TableCell class="text-white" align="center">Weight</TableCell>
            <TableCell class="text-white" align="center">Height</TableCell>
            <TableCell class="text-white" align="center">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{border: "1px solid #7e22ce"}}>
          {data.map((e) => (
            <TableRow
              key={e.name}
              
            >
              <TableCell align="center">{e?.weight}</TableCell>
              <TableCell align="center">{e.height}</TableCell>
              <TableCell align="center">{e.bmiCalculation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </> 
            ) : (
              <div style={{ textAlign: "center", marginTop: '10rem' }}>
                {/* <img style={{ width: "70%" }} src={empty} alt="empty data" /> */}
                <h3 style={{ position: "relative", top: "-3.5rem" }}>
                  Data not matched
                </h3>
              </div>
            )}
    </div>
  )
}

export default Getbmi