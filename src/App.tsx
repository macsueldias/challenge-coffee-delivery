import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/cartContext"
import { QueryClient, QueryClientProvider } from "react-query"


function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
          <ThemeProvider theme={defaultTheme}>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            <GlobalStyle />
          </ThemeProvider>

      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
