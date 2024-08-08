import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#040E19",
    },
    secondary: {
      main: "#597EB5",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home/>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
