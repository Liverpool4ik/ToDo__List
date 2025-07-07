import { useState } from 'react';
import './App.css';
import { Card } from './Components/Card.jsx';
import cardImage from './images/1.jfif'

// const App = () => {

//    const callBackFunc = (someParams) => {
//       console.log(someParams);
//    }

//    const user =
//    {
//       age: 30,
//       name: "Mojo"
//    }

//    // const userNames = [
//    //    "Dido", "Emmi"
//    // ]


//    const users = [
//       { name: "Ddddm", age: 308, color: "#ff0000;", img: '/images/1.jfif' },
//       {
//          name: "Vitinho", age: 404, color: '#37ff00'
//       },
//       { name: "MakDuck", age: 77, },
//       // { name: "Dada", age: 3, color: "#37ff22", img: './images/walle.jfif' },
//       { name: "Didaaaa", age: 33 },
//    ];

//    return (
//       <div className="App">
//          {users.map((element) => (
//             <Card
//                myFirstCallbackFunc={callBackFunc}
//                aaa={element.name}
//                bbb={element.age}
//                cccCoLLLooRR={element.color}
//                cardImage={element.img} />
//          ))}
//       </div>
//    )
// };



const AppUseState = () => {
   const [clients, setNewClickOnButton] = useState(11);


   const clickHandler = () => {
      setNewClickOnButton(clients + 2)
   }

   return <div className="App">
      <button onClick={clickHandler}>+1</button>
      <div>{clients}</div>

   </div>
}
export default AppUseState;
