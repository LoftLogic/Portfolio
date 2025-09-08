import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeContext"; // or wherever you put it
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App