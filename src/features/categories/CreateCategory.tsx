import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Category, createCategory } from "./categorySlice";
import { CategoryForm } from "./components/CategoryForm";
import { useSnackbar } from "notistack";

export const CategoryCreation = () => {
  const [ isDisabled, setIsDisabled ] = useState(false);
  const [ categoryState, setCategoryState ] = useState<Category>({
    id: "",
    title: "",
    description: "",
    is_active: false,
    created_at: "",   
    updated_at: "",
    deleted_at: null
  })

  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(createCategory(categoryState));
    enqueueSnackbar("Categoria criada com sucesso!", { variant: "success" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({...categoryState, [name]: checked });
  };

  return (
  <Box>
    <Paper>
      <Box p={2}>
        <Box mb={2}>
          <Typography variant="h4">Criar Categoria</Typography>
        </Box>
      </Box>
      <CategoryForm
        isLoading={false}
        isDisabled={isDisabled}
        category={categoryState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleToogle={handleToggle}
      />
    </Paper>
  </Box>
  )
}