import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import NavBar from "./Navigation/NavBar";
import About from "./Components/Pages/About";
import NotesApp from "./Components/NotesApp/NotesApp";
import Home from "./Components/Pages/Home";

//overwrite the default style
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f64740",
    },
    secondary: {
      main: "#49111C",
    },
    typography: {
      fontFamily: ["Montserrat", "Roboto"].join(","),
      // fontFamily: "Montserrat, Arial",
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [montserrat],
    //     },
    //   },
    // },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider value={theme}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/app" component={NotesApp} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
