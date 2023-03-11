import './App.css';
import Categories from './components/productList/categories'
import Products from './components/productList/products'
import { useState } from 'react';



function App() {
   const [category, setCategory] = useState('All items')
   const handlerCategoryClick = (event) => {
      setCategory(event)
   }

   return (
      <div className="App">
         <h2 className='headTitle'>PRODUCTS</h2>
         <Categories onClick={handlerCategoryClick} activeCategory={category} />
         <Products prodCategory={category} />
      </div>
   );
}

export default App;
