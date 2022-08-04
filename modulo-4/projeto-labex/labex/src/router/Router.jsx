import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import AdminHomePage from "../pages/adminHomePage/AdminHomePage";
import ApplicationFormPage from "../pages/applicationForm/ApplicationFormPage";
import CreateTripPage from "../pages/createTripPage/CreateTripPage";
import ListTripsPage from "../pages/listTripsPage/ListTripsPage";
import LoginPage from "../pages/loginPage/LoginPage";
import TripDetailsPage from "../pages/tripDetailsPage/TripDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tripsList" element={<ListTripsPage />} />
        <Route
          exact
          path="/tripsApplication"
          element={<ApplicationFormPage />}
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/adminTripsList" element={<AdminHomePage />} />
        <Route exact path="/adminTripsCreate" element={<CreateTripPage />} />
        <Route
          exact
          path="/adminTripsDetails/:id"
          element={<TripDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
