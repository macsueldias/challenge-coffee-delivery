import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/cartContext"


function App() {

  return (
      <CartProvider>
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
      </CartProvider>
  )
}

export default App
