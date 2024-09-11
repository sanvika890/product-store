import { Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreateProductsPage from "./pages/CreateProductsPage"
import Navbar from "./components/Navbar"

function App() {
  

  return (
   <Box minHeight={"100vh"}>
  <Navbar/>
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/create" element={<CreateProductsPage />} />

</Routes>
    </Box>
  )
}

export default App
