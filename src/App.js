import { Container } from "react-bootstrap";
import { Category } from "./components/catygory";
import { Header } from "./components/header";
import { ItemsList } from "./components/itemsList";
import { NavBar } from "./components/navBar";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items)
  const allCategory = ['الكل', ...new Set(items.map ((i) => i.category))]
  console.log(allCategory)

  const filterByCategory = (cat) => {
    if ( cat === "الكل") {
      setItemsData(items)
    } else {
    const newArr = items.filter( (item) => item.category === cat)
    setItemsData(newArr)
    }
  }
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter( (item) => item.title === word)
      setItemsData(newArr)
    }
  }
 
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />

      <Container>
      <Header/>
       <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
      <ItemsList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
