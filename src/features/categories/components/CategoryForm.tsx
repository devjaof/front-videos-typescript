import { Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../categorySlice";

type Props = {
  category: Category;
  isDisabled?: boolean;
  isLoading?: boolean;

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToogle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CategoryForm({
  category,
  isDisabled = false,
  isLoading = false,
  handleSubmit,
  handleChange,
  handleToogle,
}: Props) {
  return(
    <Box p={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
                <TextField
                  required
                  name="title"
                  label="Título"
                  value={category.title}
                  disabled={isDisabled}
                  onChange={handleChange}
                >
                </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
                <TextField
                  required
                  name="description"
                  label="Descrição"
                  value={category.description}
                  disabled={isDisabled}
                  onChange={handleChange}
                >
                </TextField>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel 
                label="Ativo" 
                control={
                  <Switch 
                    color="secondary" 
                    onChange={handleToogle} 
                    checked={category.is_active} 
                    name="is_active"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                } 
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" gap={2}>
              <Button variant="contained" component={Link} to="/categories">
                Voltar
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isDisabled}
              >
                Salvar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}