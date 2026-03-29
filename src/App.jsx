import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import Tab from './components/Tab'
import Products from './components/Products'

function App() {
const productPromise = fetch("/products.json").then((res)=>res.json());

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <Tab></Tab>
      <Suspense>
        <Products productPromise={productPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
