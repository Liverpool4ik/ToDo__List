import { useState } from "react";


export const App = () => {
   const [inputValue, setInputValue] = useState('')
   // useState --- пустая строка - т.к. проверка input'a - чтобы он не добавлял пустую ячейку с пустой строкой (если ничего не вводим...а жмём "Добавить" --- пустой list item --- не будет добавляться) 
   //setTodo ==> setNewTask

   const [itemInputEditText, setItemInputEditText] = useState("")

   const [itemIdToEdit, setItemIdToEdit] = useState(null)

   const [todoList, setNewTask] = useState([
      { id: 1, name: "Купить шкаф Валерке", isChecked: false, },
      { id: 2, name: "Установить золотые ручки на ящкики (6шт.) - белый шкаф", isChecked: false, },
      { id: 3, name: "Измерить ДВП в детском ящике", isChecked: falseч, },
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

   const deleteHandler = (choosedItemId) => {
      const refreshedToDoListAfterDeletingItem = todoList.filter((el) => el.id !== choosedItemId)
      setNewTask(refreshedToDoListAfterDeletingItem);
   }

   const inputHandler = (event) => {
      setInputValue(event.target.value)
   }

   const checkedHandler = (someEl) => {
      const newArr = todoList.map((el) => {
         if (el.id === someEl) {
            const copyOfToDoListArray = { ...el }
            copyOfToDoListArray.isChecked = !copyOfToDoListArray.isChecked   // было el.isChecked === true,  но нам нужно убрать галочку --- поэтому отрицание
            return copyOfToDoListArray
         }
         return el
      })
      setNewTask(newArr)
   }


   const editHandler = (id, name) => {
      setItemIdToEdit(id)  /// **** первый State ==>>  чтобы понять --  у какого элемента отрисовывать INPUT
      setItemInputEditText(name) /// **** втторой State ==>>  чтобы в пустом поле input'а -->> не исчезал старый текст пункта

   }

   // const editHandler = (object) => {
   //    setItemIdToEdit(object.id)
   //    setItemIdToEdit(object.name)

   // }

   const changeTextItem = (someEl) => {
      const newArr = todoList.map((el) => {
         if (el.id === someEl) {
            const copyObj = { ...el }
            copyObj.name = itemInputEditText;
            return copyObj
         }
         return el
      })

      setNewTask(newArr)
      setItemIdToEdit(null)


      /// зануляем  STATE  ===>>> editedID (itemIdToEdit) ==>>> ЗАкрыли ИНПУТЫ     
   }



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
               {item.id === itemIdToEdit ?
                  (
                     <div>
                        <input
                           className="editedItemInput"
                           value={itemInputEditText}
                           onChange={(event) => setItemInputEditText(event.target.value)} />
                        <button onClick={() => changeTextItem(item.id)}>add</button>
                     </div>

                  )
                  :
                  (
                     <div className="blockName">
                        <input type="checkbox" checked={item.isChecked} onChange={() => checkedHandler(item.id)} />
                        <div className={item.isChecked ? "linedItem" : ""}>{item.name}</div>
                     </div>
                  )}
               <div className="icons">
                  <div className="editIcon" onClick={() => editHandler(item.id, item.name)}>&#x0270E;</div>

                  {/* <div onClick={() => editHandler(item)}>&#x070E;</div>   ===>>> можно и так --->>  передать полностью "ITEM" и віше в editHandlere получать name & id от айтема*/}

                  <div className="deleteIcon" onClick={() => deleteHandler(item.id)}>X</div>
               </div>
            </div>
         ))
         }
      </div >
   )
}









// const [inputValue, setInputValue] ===>>>  [inputValue, setInputValue]

//  const [itemInputEditText, setItemInputEditText] ===>>> [editedValue, setEditedValue]

//  const [itemIdToEdit, setItemIdToEdit] == >>>>   [editedId,setEditedId]

// const [todoList, setNewTask] ===>>> [todoList, setToDo]

// (event) = (e)

//    (item) = (i)


//editedItemInput ==>>> editedInput (className - of item inner input)