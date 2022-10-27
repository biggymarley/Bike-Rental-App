import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import RentalApp from "./content/RentalApp";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F56D1D",
    },
    secondary:{
      main:'#009D90'
    },
    success: {
      main: "#43c54a",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FF5656",
      contrastText: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RentalApp />
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
