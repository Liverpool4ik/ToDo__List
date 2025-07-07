import { useState } from 'react';
import './App.css';
import { Card } from './Components/Card.jsx';
import cardImage from './images/1.jfif'



const AppConditionalRendering = () => {
   const [showMessage, setHideMessage] = useState(false);

   const clickHandler = () => {
      setHideMessage(!showMessage);
   }



   return <div className="App">
      <button onClick={clickHandler}>show/hide</button>
      {showMessage && <h1>Заголовок</h1>}
   </div>
}


export default AppConditionalRendering;




///============== TWO BUTTONS & TWO const..s (clickSow + clickHide)

// const AppConditionalRendering = () => {
//    const [showMessage, setHideMessage] = useState(false);

//    const clickShow = () => {
//       setHideMessage(true);
//    }

//    const clickHide = () => {
//       setHideMessage(false);
//    }

//    return <div className="App">
//       <button onClick={clickShow}>show</button>
//       <button onClick={clickHide}>hide</button>
//       {showMessage && <h1>Заголовок</h1>}
//    </div>
// }


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


