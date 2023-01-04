import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";

export const EditCategory = () => {
  const id = useParams().id || "";
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [ isDisabled, setIsDisabled ] = useState(false);

  const handleChange = (e: any) => {};
  const handleToggle = (e: any) => {};

  return(
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Editar Categoria</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
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
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_active}
                        inputProps={{ "aria-label": "controlled"}}
                      >
                      </Switch>
                    }
                    ></FormControlLabel>
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
      </Paper>
    </Box>
  )
}