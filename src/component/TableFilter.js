// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';
// import { Button, TextField } from '@mui/material';
// import { useState } from 'react';

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// // const rows = [
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Donut', 452, 25.0, 51, 4.9),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   createData('Honeycomb', 408, 3.2, 87, 6.5),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData('KitKat', 518, 26.0, 65, 7.0),
// //   createData('Lollipop', 392, 0.2, 98, 0.0),
// //   createData('Marshmallow', 318, 0, 81, 2.0),
// //   createData('Nougat', 360, 19.0, 9, 37.0),
// //   createData('Oreo', 437, 18.0, 63, 4.0),
// // ];

// const datas = [
//     {
//         "name": "Annette Black",
//         "trader name":  "Binford Ltd.",
//         "trader email": "kepnac@wak.fi",
//         "status": "filled",
//         "maturity date": "20-05-2015"
//     },
//     {
//         "name": "Guy Hawkins",
//         "trader name":  "Big Kahuna Burger Ltd.",
//         "trader email": "goji@duwkuzmet.gh",
//         "status": "open",
//         "maturity date": "23-03-2013"
//     },
//     {
//         "name": "Dianne Russell",
//         "trader name":  "Biffco Enterprise Ltd.",
//         "trader email": "ek@bewid.cm",
//         "status": "open",
//         "maturity date": "25-10-2019"
//     },
//     {
//         "name": "Bessie Cooper",
//         "trader name":  "Biffco Enterprise Ltd.",
//         "trader email": "noam@selfabge.bg",
//         "status": "Partially filled",
//         "maturity date": "02-08-2013"
//     },
//     {
//         "name": "Floyd Miles",
//         "trader name":  "Acme Co.",
//         "trader email": "ce@absewac.io",
//         "status": "filled",
//         "maturity date": "09-05-2014"
//     },
//     {
//         "name": "Arlene McCoy",
//         "trader name":  "Abstergo Ltd",
//         "trader email": "jif@co.ru",
//         "status": "Partially filled",
//         "maturity date": "28-11-2015"
//     },
//     {
//         "name": "Darlene Robertson",
//         "trader name":  "Big Kahuna Burger Ltd.",
//         "trader email": "moji@ba.gf",
//         "status": "Partially filled",
//         "maturity date": "13-03-2014"
//     },
//     {
//         "name": "Kathryn Murphy",
//         "trader name":  "Barone LLC.",
//         "trader email": "urabebjoz@wub.ck",
//         "status": "Partially filled",
//         "maturity date": "31-05-2015"
//     },
//     {
//         "name": "Wade Warren",
//         "trader name":  "Acme Co.",
//         "trader email": "cuf@nebowed.yt",
//         "status": "filled",
//         "maturity date": "11-02-2014"
//     },
//     {
//         "name": "John Doe",
//         "trader name":  "Agony Co.",
//         "trader email": "buf@nebowed.com",
//         "status": "filled",
//         "maturity date": "10-02-2015"
//     },
//     {
//         "name": "ABD Villears",
//         "trader name":  "RSA Co.",
//         "trader email": "mail@rsa.cu",
//         "status": "open",
//         "maturity date": "07-06-2014"
//     },
//     {
//         "name": "John Mayer",
//         "trader name":  "Bostonyc Ltd.",
//         "trader email": "twill@cub.yt",
//         "status": "filled",
//         "maturity date": "11-12-2012"
//     },
//     {
//         "name": "Neilson McCenherd",
//         "trader name":  "Acme Co.",
//         "trader email": "neil@nebowed.yt",
//         "status": "open",
//         "maturity date": "11-02-2014"
//     },
//     {
//         "name": "Jonathan Herd",
//         "trader name":  "Fight Co.",
//         "trader email": "godofwar@gmail.com",
//         "status": "Partially filled",
//         "maturity date": "19-12-2014"
//     },
//     {
//         "name": "Shane Warne",
//         "trader name":  "Austrelia Co.",
//         "trader email": "cuf@nebowed.yt",
//         "status": "filled",
//         "maturity date": "29-11-2020"
//     },
//     {
//         "name": "BlackHeart Guy",
//         "trader name":  "Toto Co.",
//         "trader email": "athisownlife@vdc",
//         "status": "open",
//         "maturity date": "22-12-1994"
//     },
// ]


// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'name',
//   },
//   {
//     id: 'trader_name',
//     numeric: true,
//     disablePadding: false,
//     label: 'trader name',
//   },
//   {
//     id: 'trader_email',
//     numeric: true,
//     disablePadding: false,
//     label: 'trader email',
//   },
//   {
//     id: 'status',
//     numeric: true,
//     disablePadding: false,
//     label: 'status',
//   },
//   {
//     id: 'maturity_date',
//     numeric: true,
//     disablePadding: false,
//     label: 'maturity date',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const EnhancedTableToolbar = (props) => {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography   sx={{ flex: '1 1 100%' }}
//         variant="h6"
//         id="tableTitle"
//         component="div">
//         <TextField sx={{input:{fontWeight:"600",border:"none",borderRadius:"4px"},
//         width:{lg:"350px", xs:"350px"},
//         backgroundColor:"#fff",
//         borderRadius:"40px",
//         }} height="76px" value='' onChange={(e)=>{}} placeholder="Search" type="text"></TextField>
//         </Typography>
//       )}
// <Button variant="contained" > Task</Button>
//     </Toolbar>

  
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function TableFilter() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [rows,setRows] = useState(datas)

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };
//   const handleSort = () => {
//     const data = rows.sort((a, b) => {
//         const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//         const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
      
//         // names must be equal
//         return 0;
//       });
//       setRows(data)
//   }

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: '50%',  }} m="auto">
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
//               {/* {stableSort(rows, getComparator(order, orderBy)) */}
//                 {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             'aria-labelledby': labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         <Button onClick={handleSort}> sort</Button>
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row['trader name']}</TableCell>
//                         <TableCell align="right">{row['trader email']}</TableCell>
//                         <TableCell align="right">{row.status}</TableCell>
//                         <TableCell align="right">{row['maturity date']}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
    
//     </Box>
//   );
// }

