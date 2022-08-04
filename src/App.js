// import "./App.css";
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import Alerts from "./components/Alerts";
// import About from "./components/About";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   const [mode, setMode] = useState("light");
//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#403636";
//       showAlert("Dark Mode Has Been Enabled", "success");
//       document.title = "TextUtils - Dark Mode";

//       setInterval(() => {
//         document.title = "Site is Azaming!";
//       }, 2000);
//       setInterval(() => {
//         document.title = "Instal this Application";
//       }, 1500);
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light Mode Has Been Enabled", "success");
//       document.title = "TextUtils - Light Mode";
//     }
//   };

//   return (
//     <>
//       <Router>
//         <Navbar title="TextUtils" about='About Us' mode={mode} toggleMode={toggleMode} />
//         <Alerts alert={alert} />
//         <div className="container my-3">
//           <Routes>
//             <Route exact path="/about" element={<About />}></Route>

//             <Route
//               exact
//               path="/"
//               element={
//                 <TextForm
//                   showAlert={showAlert}
//                   heading="Enter your text to Analyse below"
//                   mode={mode}
//                   toggleMode={toggleMode}
//                 />
//               }
//             ></Route>
//           </Routes>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(30 20 50)";
      showAlert("Dark Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "Site is Azaming!";
      }, 2000);
      setInterval(() => {
        document.title = "Instal this Application";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about='About Us' mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Charcter Counter,  Remove Extra Spaces"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
