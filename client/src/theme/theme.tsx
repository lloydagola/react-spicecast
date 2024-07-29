import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2", // Your primary color
    },
  },

  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Your desired color
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
