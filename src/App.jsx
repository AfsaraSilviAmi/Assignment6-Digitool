import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import Tab from './components/Tab'
import Products from './components/Products'
import Cart from './components/Cart'
import { toast, ToastContainer } from 'react-toastify'
import Step from './components/Step'
import PricingDiv from './components/PricingDiv'

function App() {
const productPromise = fetch("/products.json").then((res)=>res.json());
const [toggle, setToggle] = useState("productSec");
const [goCart, setGoCart]= useState([]);
const handleCart = (items) =>{
  const existItems = goCart.filter(cartItem => cartItem.id === items.id)

  if(existItems.length===0){
    setGoCart(prev =>[...prev, items])
    toast.success(`(${items.name}) added to Cart!`)
  }
  
}

const handleDelete = (item)=>{
  setGoCart(cartDel => cartDel.filter(Cartitem => Cartitem.id !== item.id))
  toast.error(`(${item.name}) Remove from Cart!`)
}

const handleCheckOut = ()=>{
  setGoCart([]);
  toast.success("Your Payment is Succssful! 🥳🥳")
}

  return (
    <>
      <NavBar goCart={goCart}></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tab toggle={toggle} setToggle={setToggle} goCart={goCart}></Tab>
      <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-spinner loading-xl text-accent"></span></div>}>
       {
        toggle === "productSec" &&  <Products goCart={goCart} handleCart={handleCart} productPromise={productPromise}></Products>
       }
       {
        toggle === "cart" && <Cart handleCheckOut={handleCheckOut} handleDelete={handleDelete} goCart={goCart}></Cart>
       }
      </Suspense>
      <Step></Step>
      <PricingDiv></PricingDiv>
      <ToastContainer/>
    </>
  )
}

export default App
