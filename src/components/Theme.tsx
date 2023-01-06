import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    grey: "#80808077",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
