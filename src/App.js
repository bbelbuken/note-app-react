import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  ); //for new users they don't have a local storage so we assign a new array that program doesn't crashes at start

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  /*   useEffect(() => { // if we don't put [] at the end, it will run all the time for every render. now its only running  at the app load. bc this array never changes and this is a dependency
    console.log('load time');  
  }, [])
 */
  /* 
  console.log('before useEffect'); //logs every time app renders
  

  useEffect(() => { //changing every time items being added or deleted
    console.log('updating items state');
  }, [items])

  console.log('after useEffect');//logs every time app renders
 */

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]); 

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if the value is blank
    if (!newItem) return;
    addItem(newItem);
    console.log(`Submitted: ${newItem}`);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
