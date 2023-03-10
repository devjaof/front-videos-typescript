import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Category, selectCategoryById, updateCategory } from "./categorySlice";
import { CategoryForm } from "./components/CategoryForm";

export const EditCategory = () => {
  const id = useParams().id || "";
  const [ isDisabled, setIsDisabled ] = useState(false);
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [ categoryState, setCategoryState ] = useState<Category>(category);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateCategory(categoryState));
    enqueueSnackbar("Categoria atualizada com sucesso!", { variant: "success" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({...categoryState, [name]: checked });
  };


  return(
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Editar Categoria</Typography>
          </Box>
        </Box>

        <CategoryForm
          isLoading={false}
          category={categoryState}
          isDisabled={isDisabled}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleToogle={handleToggle}
        />
      </Paper>
    </Box>
  )
}