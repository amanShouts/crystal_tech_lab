import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaAngleDown } from "react-icons/fa6";

/* eslint-disable react/prop-types */ //

export function GenericTable({ pendingValue, pendingContext, header, tableData }) {
  return (
    <div className="bg-white rounded-md w-full lg:w-1/2">
      <div className='flex justify-between items-center gap-2 p-2'>
        <div>
          <p className='font-bold text-normal'>{pendingValue}</p>
          <p className='text-xs text-gray-400'>Total Pending {pendingContext}</p>
        </div>
        <div className='text-xs'>
          <button className='p-1 bg-white text-sky-600 flex justify-center gap-1 items-center border-sky-600 border-[1px] rounded-lg'>
            <span className='font-semibold text-[0.7rem] px-1'>Last 6 Months</span>
            <FaAngleDown className='mt-1' />
          </button>
        </div>
      </div>

      <hr></hr>

      <div className='text-sm p-2 flex justify-between items-center'>
        <p className='text-sky-600 text-xs font-semibold'>Latest 10 pending {pendingContext}</p>
        <button className='bg-white text-sky-600 p-1 rounded-lg border-sky-400 border-[1px] text-[0.7rem]'>View all</button>
      </div>

      <hr></hr>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow className='bg-sky-200 font-bold'>
              {header?.map((elem, index) => (
                <TableCell align={index == 0 ? 'left' : "right"} key={index} className='!font-bold !text-xs'> {elem}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.length > 0 && tableData?.map((row, rowIndex) => {
              return <TableRow
                key={rowIndex}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                align={rowIndex == 0 ? 'left':'right'}
              >
                {Object.keys(row)?.map((col, colIndex) => (
                  <TableCell align={colIndex == 0 ?'left': "right"} key={colIndex}>
                    {row[col]}
                  </TableCell>
                ))}

              </TableRow>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
