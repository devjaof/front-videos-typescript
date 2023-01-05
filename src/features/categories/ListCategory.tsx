import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteCategory, selectCategories } from "./categorySlice";
import { useSnackbar } from "notistack";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const rows: GridRowsProp = categories.map((el) => ({
    id: el.id,
    title: el.title,
    description: el.description,
    createdAt: new Date(el.created_at).toLocaleDateString('pr-BR'),
    is_active: el.is_active,
  }))

  const columns: GridColDef[] = [
    { 
      field: 'title', 
      headerName: 'Título', 
      flex: 1,
      renderCell: renderNameCell,
    },
    { field: 'description', headerName: 'Descrição', flex: 1 },
    { field: 'createdAt', headerName: 'Data de Criação', flex: 1 },
    { field: 'is_active', 
      headerName: 'Ativo', 
      flex: 1, 
      renderCell: renderIsActiveCell
    },
    { 
      field: 'id', 
      headerName: 'Ações', 
      flex: 1, 
      type: "string",
      renderCell: renderActionsCell 
    },
  ]

  const componentsProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 }
    }
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none"}}
        to={`/categories/${rowData.id}/edit`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    )
  }

  function handleDeleteCategory(id: string) {
    dispatch(deleteCategory(id));
    enqueueSnackbar("Categoria deletada com sucesso!", { variant: "success" });
  }

  function renderActionsCell(params: GridRenderCellParams) {
      return (
      <IconButton
        color="secondary"
        onClick={() => handleDeleteCategory(params.value)}
        aria-label="Delete"
      >
        <DeleteIcon/>
      </IconButton>
    )
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Sim": "Não"}
      </Typography>
    )
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/new"
          style={{ marginBottom: "1rem" }}
        >
          Nova Categoria
        </Button>
      </Box>

      <Box sx={{ height: 600, display: "flex" }}>
        <DataGrid 
        rows={rows}
        columns={columns}
        disableColumnFilter={true}
        disableColumnSelector={true}
        disableDensitySelector={true}
        disableSelectionOnClick={true}
        componentsProps={componentsProps}
        components={{ Toolbar: GridToolbar }}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
      />
      </Box>
    </Box>
  )
}