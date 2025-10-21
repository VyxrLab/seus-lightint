import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout";
import Home from "./pages/Home";
import ScrollTop from "./ScrollTop";
import Title from "./Title";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element= {<Title title="Home - seus-lightint"><Home /></Title>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
