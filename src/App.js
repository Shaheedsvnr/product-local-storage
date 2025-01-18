import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import InsertForm from "./Pages/InsertForm";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import UpdateForm from "./Pages/UpdateForm";

function App() {
  return (
    <div>
      <Box>
        <BrowserRouter>
          <Box>
            <NavBar />
          </Box>
          <Box sx={{ minHeight: "77vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/insert" element={<InsertForm />} />
              <Route path="/update/:id" element={<UpdateForm />} />
            </Routes>
          </Box>
          <Box>
            <Footer />
          </Box>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
