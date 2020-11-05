import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function myFunction() {
  var x = document.getElementById("input").value;

  document.getElementById("test").innerHTML = x;

  if (x % 4 == 1)
    document.getElementById("test").innerHTML = "Titelblatt außen";
  else if (x % 4 == 2)
    document.getElementById("test").innerHTML =
      "Titelblatt außen & innen";
  else if (x % 4 == 3)
    document.getElementById("test").innerHTML =
      "Titelblatt außen & innen & Abschlussblatt innen";
  else if (x % 4 == 0)
    document.getElementById("test").innerHTML =
      "Alles oder Titelblatt außen (dann leere Seiten vorhanden)";
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://s.io/">
        SIO
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Site Calculator
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="input"
            label="Number"
            name="Calculate"
            autoComplete="Calculate"
            autoFocus
            type="int"
          />
          <td>
            <p id="test"></p>
          </td>
          <Button
            onClick={myFunction}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Calculate
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="https://ke.ko" variant="body2">
                Ist Simone ein kek?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
