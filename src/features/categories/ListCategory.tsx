import { Box, Button, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid';

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const rows: GridRowsProp = categories.map((el) => ({
    id: el.id,
    title: el.title,
    description: el.description,
    createdAt: new Date(el.created_at).toLocaleDateString('pr-BR'),
    is_active: el.is_active,
  }));

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Título', flex: 1 },
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
      type: "action",
      renderCell: renderActionsCell 
    },
  ];

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log('deleted')}
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

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid 
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        rows={rows} columns={columns} />
      </div>
    </Box>
  )
}