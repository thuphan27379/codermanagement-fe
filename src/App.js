import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import RecordList from "./src/components/List";
import Edit from "./src/components/Edit";
import Create from "./src/components/Create.js";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}

//
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<RecordList />} />
//         <Route path="/edit/:id" element={<Edit />} />
//         <Route path="/create" element={<Create />} />
//       </Routes>
//     </div>
//   );
// };

export default App;
