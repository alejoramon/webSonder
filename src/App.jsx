import { useState } from "react";
// import reactLogo from "./assets/react.svg";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  function App() {
    return (
      <div className="app-container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<LoginForm />} />
            <Route path="/CreateUser" element={<CreateUser />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/edit/:noteId" element={<EditNote />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
export default App;
