
// function Header() {
//     return(
//         <header> 
//             <h1> 
//                 Justin Merrill's Website </h1>
//             <nav>
//                 <ul> 
//                     <li><a href = "./index.html">Home</a></li>
//                     <li><a href = "">Projects</a></li>
//                     <li><a href = "#">Resume</a></li>
//                     <li><a href = "#">Contact</a></li>
//                 </ul>
//             </nav>
//             <hr></hr>
//         </header>
//     );
// }

// export default Header

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Justin Merrill's Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="#">Resume</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Header;