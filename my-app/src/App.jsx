import React from 'react'
import Card from './card'
import './App.css'
import Header from './header'
import Footer from './footer'
import Info from './info'
import MenuItem from './menuItem'
import Pagination from './Pagination'
function App() {
  // const [data, setData] = useState(0)

  // var url = '';
  // useEffect(() => {
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     }).then((data => {
  //       setData(data);
  //       console.log(data);
  //     }))
  //   }, [])

  var info = {
    name : "Emma Gonzalez's Recipe Box",
    description : "Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights. ",
    countSubscribers : "6k5",
    url : "people.png"
  }

  var labels = ['What to cook', 'Recipes', 'Ingredients','Occasions','About Us']
  var items = [
    {
      url: "1.jpg",
      name: "Italian-style tomato salad",
      time: "14 minutes",
    },
    {
      url: "2.jpg",
      name: "Vegetable and shrimp spaghetti",
      time: "15 minutes",
    },
    {
      url: "3.jpg",
      name: "Lotus delight salad",
      time: "20 minutes",
    },
    {
      url: "4.jpg",
      name: "Snack cakes",
      time: "21 minutes",
    },
    {
      url: "1.jpg",
      name: "Salad with cabbage and shrimp",
      time: "32 minutes",
    },
    {
      url: "2.jpg",
      name: "Bean, shrimp, and potato salad",
      time: "32 minutes",
    },
    {
      url: "3.jpg",
      name: "Sunny-side-up fried eggs",
      time: "32 minutes",
    },
    {
      url: "4.jpg",
      name: "Lotus delight salad",
      time: "32 minutes",
    },
  ];
  var menuItem = [
    'Save Recipes','Folders','Recipes by Genevieve'
  ]
  
  
  
  

  return (
    <>
      <Header labels = {labels}></Header>
      <div className='menucon'><h2>Home</h2> <span className='menucon'>{'>'}</span> <h2>Your Recipe Box</h2></div>
      <Info info={info}></Info>
      <MenuItem menuList={menuItem}></MenuItem>
      <Card items={items}></Card>
      <Pagination totalPages ={11}></Pagination>
      <Footer></Footer>
     


    </>
  )
}

export default App
