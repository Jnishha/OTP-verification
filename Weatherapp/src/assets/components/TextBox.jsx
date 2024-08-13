// // import { useState } from "react";

// // const TextBox=()=>{
// //     const[name,SetName]=useState('')

// //     return(
// //         <div>
// //            <input type="password">password</input>
// //         </div>
// //     );
// // };
// import { useState } from "react";

// const TextBox=()=>{
//     const[name,SetName]=useState('')
//     const onPClick=(v)=>{
//         alert("Do you want to click this?");
//     }
//     const updateName=(e)=>{
//         const Username = e.target.value;
//         SetName(Username);
//     }
//     return(
//         <div>
//             <p onClick={onPClick}>Don't Click I am {name}</p>
//             <input value={name} onChange={(updateName)} />
//         </div>
//     );
        
// }
// export default TextBox;