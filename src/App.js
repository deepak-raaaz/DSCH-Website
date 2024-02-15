import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/home/Home";
import EventIndex from "./pages/events/EventIndex";
import EventDetails from "./pages/eventDetails/EventDetails";
import UpComingEventDetails from "./pages/upComingEventDetails/UpComingEventDetails";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Members from "./pages/members/Members";

function App() {
  return (
    <main>
      <Routes >
        {/* public routes  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/events" element={<EventIndex/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/events/:id" element={<EventDetails/>} />
          <Route path="/events/upcoming-event" element={<UpComingEventDetails/>} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
