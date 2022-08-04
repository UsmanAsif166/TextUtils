// import React, { useState } from "react";

// export default function About() {
//   const [btnText, setBtnText] = useState("Enable dark Mode");
//   let [myStyle, setMyStyle] = useState({
//     backgroundColor: "white",
//     color: "black",
//   });

//   const handleDarkClick = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         backgroundColor: "black",
//         color: "white",
//       });
//       setBtnText("Enable Light Mode");
//     } else {
//       setMyStyle({
//         backgroundColor: "white",
//         color: "black",
//       });
//       setBtnText("Enable Dark Mode");
//     }
//   };
//   return (
//     <div className="container" style={myStyle}>
//       <h2 className="my-3">About Us</h2>
//       <div className="accordion" id="accordionPanelsStayOpenExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               style={myStyle}
//               className="accordion-button"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             className="accordion-collapse collapse show"
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseTwo"
//               aria-expanded="false"
//               aria-controls="panelsStayOpen-collapseTwo"
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseTwo"
//             className="accordion-collapse collapse"
//             aria-labelledby="panelsStayOpen-headingTwo"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//             <button
//               style={myStyle}
//               className="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseThree"
//               aria-expanded="false"
//               aria-controls="panelsStayOpen-collapseThree"
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseThree"
//             className="accordion-collapse collapse"
//             aria-labelledby="panelsStayOpen-headingThree"
//           >
//             <div className="accordion-body" style={myStyle}>
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classes that we use to style each element. These classes control
//               the overall appearance, as well as the showing and hiding via CSS
//               transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
//       <button className="btn btn-primary my-2 " onClick={handleDarkClick}>
//         {btnText}
//       </button>
//     </div>
//   );
// }
// import React, { useState } from "react";
import React from "react";
export default function About(props) {

  // let [myStyle, setMyStyle] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });
  let myStyle = {
    color: props.mode === 'dark' ? '#FAF9F6' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : "white",

  }


  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              style={myStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              style={myStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
