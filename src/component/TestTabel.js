import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { Button, Grid, Modal, TextField } from "@mui/material";
import { useState } from "react";

import { useForm } from "react-hook-form";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const orginialRows = [
  {
    id: 1,
    name: "Annette Black",
    "trader name": "Binford Ltd.",
    "trader email": "kepnac@wak.fi",
    status: "filled",
    "maturity date": "20-05-2015",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    "trader name": "Big Kahuna Burger Ltd.",
    "trader email": "goji@duwkuzmet.gh",
    status: "open",
    "maturity date": "23-03-2013",
  },
  {
    id: 3,
    name: "Dianne Russell",
    "trader name": "Biffco Enterprise Ltd.",
    "trader email": "ek@bewid.cm",
    status: "open",
    "maturity date": "25-10-2019",
  },
  {
    id: 4,
    name: "Bessie Cooper",
    "trader name": "Biffco Enterprise Ltd.",
    "trader email": "noam@selfabge.bg",
    status: "Partially filled",
    "maturity date": "02-08-2013",
  },
  {
    id: 5,
    name: "Floyd Miles",
    "trader name": "Acme Co.",
    "trader email": "ce@absewac.io",
    status: "filled",
    "maturity date": "09-05-2014",
  },
  {
    id: 6,
    name: "Arlene McCoy",
    "trader name": "Abstergo Ltd",
    "trader email": "jif@co.ru",
    status: "Partially filled",
    "maturity date": "28-11-2015",
  },
  {
    id: 7,
    name: "Darlene Robertson",
    "trader name": "Big Kahuna Burger Ltd.",
    "trader email": "moji@ba.gf",
    status: "Partially filled",
    "maturity date": "13-03-2014",
  },
  {
    id: 8,
    name: "Kathryn Murphy",
    "trader name": "Barone LLC.",
    "trader email": "urabebjoz@wub.ck",
    status: "Partially filled",
    "maturity date": "31-05-2015",
  },
  {
    id: 9,
    name: "Wade Warren",
    "trader name": "Acme Co.",
    "trader email": "cuf@nebowed.yt",
    status: "filled",
    "maturity date": "11-02-2014",
  },
  {
    id: 10,
    name: "John Doe",
    "trader name": "Agony Co.",
    "trader email": "buf@nebowed.com",
    status: "filled",
    "maturity date": "10-02-2015",
  },
  {
    id: 11,
    name: "ABD Villears",
    "trader name": "RSA Co.",
    "trader email": "mail@rsa.cu",
    status: "open",
    "maturity date": "07-06-2014",
  },
  {
    id: 12,
    name: "John Mayer",
    "trader name": "Bostonyc Ltd.",
    "trader email": "twill@cub.yt",
    status: "filled",
    "maturity date": "11-12-2012",
  },
  {
    id: 13,
    name: "Neilson McCenherd",
    "trader name": "Acme Co.",
    "trader email": "neil@nebowed.yt",
    status: "open",
    "maturity date": "11-02-2014",
  },
  {
    id: 14,
    name: "Jonathan Herd",
    "trader name": "Fight Co.",
    "trader email": "godofwar@gmail.com",
    status: "Partially filled",
    "maturity date": "19-12-2014",
  },
  {
    id: 15,
    name: "Shane Warne",
    "trader name": "Austrelia Co.",
    "trader email": "cuf@nebowed.yt",
    status: "filled",
    "maturity date": "29-11-2020",
  },
  {
    id: 16,
    name: "BlackHeart Guy",
    "trader name": "Toto Co.",
    "trader email": "athisownlife@vdc",
    status: "open",
    "maturity date": "22-12-1994",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "name",
  },
  {
    id: "trader_name",
    numeric: true,
    disablePadding: false,
    label: "trader name",
  },
  {
    id: "trader_email",
    numeric: true,
    disablePadding: false,
    label: "trader email",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "status",
  },
  {
    id: "maturity_date",
    numeric: true,
    disablePadding: false,
    label: "maturity date",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

//Table_heading
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

//Toolbar_heading
const EnhancedTableToolbar = (props) => {
  const {
    numSelected,
    rows,
    tempRows,
    setTempRows,
    updateData,
    setRows,
    setAction,
    setEditData,
    action,
    editData,
    open,
    setOpen,
  } = props;
  console.log("main", editData);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditData("");
  };

  React.useEffect(() => {
    setValue("name", editData.name);
    setValue("trader name", editData["trader name"]);
    setValue("trader email", editData["trader email"]);
    setValue("status", editData.status);
    setValue("maturity date", editData["maturity date"]);
  }, [editData]);

  const handleKeyword = (e) => {
    const val =
      rows !== null &&
      rows.filter(
        (userData) =>
          JSON.stringify(userData)
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        // {
        //   console.log(JSON.stringify(userData).toLowerCase().includes(e.target.value.toLowerCase()))
        // }
      );

    setTempRows(val);
  };

  const handleOpenTask = () => {
    console.log({ editData });
    setAction("add");
    setOpen(true);
    // reset({ editData });
  };
  //react_hook_form_submit
  const onSubmit = (event) => {
    // action === "edit" ? handleEditTask(event) : handleAddTask(event);
    action === "edit"
      ? handleEditData({ id: editData.id, ...event })
      : handleCreateTask(event);
  };
  const handleEditData = (event) => {
    console.log({ event });
    setTempRows(
      tempRows.map((info) => {
        if (info.id === event.id) {
          return event;
        } else {
          return info;
        }
      })
    );
    setOpen(false);
    reset({ event });
  };

  const handleCreateTask = (event) => {
    console.log(event);
    const newContacts = [event, ...rows];
    console.log({ newContacts });
    setTempRows(newContacts);
    setRows(newContacts);
    setOpen(false);
    reset({ event });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <TextField
            sx={{
              input: { fontWeight: "600", border: "none", borderRadius: "4px" },
              width: { lg: "200px", xs: "250px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            height="76px"
            onChange={(e) => handleKeyword(e)}
            placeholder="Search By Name...."
            type="text"
          ></TextField>
          <TextField
            sx={{
              input: { fontWeight: "600", border: "none", borderRadius: "4px" },
              width: { lg: "200px", xs: "250px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
              ml: 5,
            }}
            height="76px"
            onChange={(e) => handleKeyword(e)}
            placeholder="Search By Email...."
            type="text"
          ></TextField>
        </Typography>
      )}
      <Button
        onClick={handleOpenTask}
        variant="contained"
        size="large"
        sx={{ width: "100px" }}
      >
        Task
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {JSON.stringify(editData)}
          <Box
            // component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="p" sx={{ mb: 1, fontSize: "24px" }}>
                {action}
              </Typography>
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container>
                <Grid sx={{ mb: 1 }} item xs={12}>
                  <TextField
                    {...register("name", { required: true })}
                    id="outlined-basic"
                    // defaultValue={editData === "" ? "" : editData.name}

                    fullWidth
                    label="Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid sx={{ mb: 1 }} item xs={12}>
                  <TextField
                    {...register("trader name", { required: true })}
                    id="outlined-basic"
                    fullWidth
                    label="tader name"
                    variant="outlined"
                  />
                </Grid>
                <Grid sx={{ mb: 1 }} item xs={12}>
                  <TextField
                    {...register("trader email", { required: true })}
                    id="outlined-basic"
                    fullWidth
                    label="tader email"
                    variant="outlined"
                  />{" "}
                </Grid>
                <Grid sx={{ mb: 1 }} item xs={12}>
                  <TextField
                    {...register("status", { required: true })}
                    id="outlined-basic"
                    fullWidth
                    label="status"
                    variant="outlined"
                  />{" "}
                </Grid>
                <Grid sx={{ mb: 1 }} item xs={12}>
                  <TextField
                    {...register("maturity date", { required: true })}
                    id="outlined-basic"
                    fullWidth
                    label="maturity date"
                    variant="outlined"
                  />{" "}
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  sx={{ mr: 1 }}
                  variant="contained"
                  type="submit"
                  size="large"
                >
                  {`${action} Task`}
                </Button>

                <Button variant="contained" size="large" onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

//Main_Table
export default function TestTabel() {
  const [rows, setRows] = useState(orginialRows);
  const [tempRows, setTempRows] = useState(orginialRows);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = useState("");
  const [editData, setEditData] = useState("");
  console.log({ editData });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    console.log({ property });
    console.log({ isAsc });
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = tempRows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tempRows.length) : 0;
  const handleDeleteTask = (row) => {
    const filterData = rows.filter((data) => data.id !== row.id);
    setTempRows(filterData);
    setRows(filterData);
  };
  const handleEditTask = (row) => {
    console.log({ row });
    setAction("edit");
    setOpen(true);
    setEditData(row);
  };
  return (
    <Box sx={{ width: "50%" }} m="auto">
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          rows={rows}
          setRows={setRows}
          setTempRows={setTempRows}
          tempRows={tempRows}
          numSelected={selected.length}
          setAction={setAction}
          setEditData={setEditData}
          action={action}
          editData={editData}
          open={open}
          setOpen={setOpen}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(tempRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row["trader name"]}</TableCell>
                      <TableCell align="right">{row["trader email"]}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">
                        {row["maturity date"]}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          onClick={() => handleEditTask(row)}
                          startIcon={<EditIcon />}
                          color="warning"
                          size="small"
                          variant="contained"
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          onClick={() => handleDeleteTask(row)}
                          startIcon={<DeleteIcon />}
                          color="error"
                          size="small"
                          variant="contained"
                        >
                          Delete
                        </Button>{" "}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
