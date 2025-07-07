import { useState } from "react";


export const App = () => {
   const [inputValue, setInputValue] = useState('')
   // useState --- пустая строка - т.к. проверка input'a - чтобы он не добавлял пустую ячейку с пустой строкой (если ничего не вводим...а жмём "Добавить" --- пустой list item --- не будет добавляться) 


   //setTodo ==> setNewTask
   const [todoList, setNewTask] = useState([
      { id: 1, name: "Купить шкаф Валерке", isChecked: false, },
      { id: 2, name: "Установить золотые ручки на ящкики (6шт.) - белый шкаф", isChecked: false, },
      { id: 3, name: "Измерить ДВП в детском ящике", isChecked: true, },
      { id: 4, name: "Заказать ДВП в АБРИСЕ", isChecked: false, },
      { id: 5, name: "Измерить кусочки ДСП в ящиках десткого шкафа (накладки) - 4 шт.", isChecked: false, },
      { id: 6, name: "Заказать накладки для ящиков (4шт.) в АБРИСЕ", isChecked: false, },])


   //setTodo ==> setNewTask
   const addHandler = () => {
      if (inputValue) {
         // проверка -- if -- сделана для того чтобы добавлять только в том случае, когда в поле инпута хоть что-то введено.... а не пустая строка...null, undefined и не 0 и не false значение. 

         setNewTask([...todoList, { id: Math.random(), name: inputValue, isChecked: false, }])
         //  ====>>> МОЖНО И НЕ ПИСАТЬ ЭТУ ПЕРЕМННУЮ --- А СРАЗУ ===>>>  ОТПРАВИТЬ НОВЫЙ МАССИВ ЧЕРЕЗ (setNewTask) <<<======
         // setNewTask([...todoList, "сделать"])

         setInputValue('')
         // пустая строка --- для того чтобы после добавления новой задачи - инпут опустошался.      }
      }
   }

   const deleteHandler = (argId) => {
      const refreshedToDoListAfterDeletingItem = todoList.filter((el) => el.id !== argId)
      setNewTask(refreshedToDoListAfterDeletingItem);
   }

   const inputHandler = (event) => {
      setInputValue(event.target.value)
   }
   console.log(todoList);
   return (
      <div className="App">
         <div className="topInputAddBlock">
            <input
               className="topInput"
               value={inputValue}
               onChange={(event) => inputHandler(event)}
            />
            <button
               className="topButton"
               onClick={addHandler}>Добавить
            </button>
         </div>

         {todoList.map((item) => (
            <div className="block">
               <div className="blockName">
                  <input type="checkbox" checked={item.isChecked} />
                  <div className="doneLinedItem">{item.name}</div>
               </div>
               <div onClick={() => deleteHandler(item.id)}>X</div>
            </div>
         ))}
      </div>
   )
}