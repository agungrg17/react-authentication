import './App.css';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
      <Home />
    </div>
  );
}

export default App;
