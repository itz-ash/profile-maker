import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./state/store"
import { BrowserRouter as Router } from "react-router-dom"
import { MantineProvider } from "@mantine/core"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <MantineProvider withGlobalStyles withNormalizeCSS> */}
    <MantineProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
)
