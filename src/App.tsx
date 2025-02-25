import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ProtectedRoute } from "./pages/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
