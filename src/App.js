import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/home/Home";
import EventIndex from "./pages/events/EventIndex";

function App() {
  return (
    <main>
      <Routes >
        {/* public routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<EventIndex/>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
