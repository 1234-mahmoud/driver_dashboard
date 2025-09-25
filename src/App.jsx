import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DriverSchedulingDashboard from "./Test";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Drivers from "./components/Drivers";
import UserForm from "./components/UserForm";
import RouteForm from "./components/RouteForm";
import { SchedulerProvider } from "./components/SchedulerContext";
function App() {
  return (
    <div className="relative flex min-h-screen">
      {/* <DriverSchedulingDashboard/> */}
      <SchedulerProvider>
        <BrowserRouter>
        <Header />
          <main className="flex-1 ml-[70px] lg:ml-[200px] transition-all duration-500 ease-in-out">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Drivers" element={<Drivers />} />
              <Route path="/UserForm" element={<UserForm />} />
              <Route path="/RouteForm" element={<RouteForm />} />
              {/* <Route path="/Test" element={<DriverSchedulingDashboard/>} /> */}
            </Routes>
          </main>
        </BrowserRouter>
      </SchedulerProvider>
    </div>
  );
}

export default App;
