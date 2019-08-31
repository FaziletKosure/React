// import React from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

// import './TodoNavigation.css';

// export default () => {
//     return (
//         <nav className="TodoNavigation">

//             <NavLink to="/work"
//                 activeStyle={{
//                     fontWeight: "bold",
//                     color: "red"
//                 }} >Overview</NavLink>
//             <NavLink activeStyle={{
//                 fontWeight: "bold",
//                 color: "red"
//             }} to="/private">Add todo</NavLink>
//             <Link to='/todos/:id'>Edit</Link>
//         </nav>
//     )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';

import './TodoNavigation.css';

export default () => {
    return (
        <nav className="TodoNavigation" >
            <NavLink exact activeStyle={{
                fontWeight: "bold",
                color: "white", backgroundColor: 'black', backgroundImage: "initial"
            }} to="/work"  >Work</NavLink>
            <NavLink exact activeStyle={{
                fontWeight: "bold",
                color: "white", backgroundColor: 'black', backgroundImage: "initial"
            }} to="/private"  >Private</NavLink>
            <NavLink exact activeStyle={{
                fontWeight: "bold",
                color: "white", backgroundColor: 'black', backgroundImage: "initial"
            }} to="/add" >Add todo</NavLink>
            {/* <NavLink exact activeStyle={{
                fontWeight: "bold",
                color: "white", backgroundColor: 'black', backgroundImage: "initial"
            }} to='/todos/:id' >Edit</NavLink> */}
        </nav>
    )
}