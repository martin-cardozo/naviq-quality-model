import "./App.css"
import About from "./components/About"
import Chart from "./components/Chart"
import Footer from "./components/Footer"
import Home from "./components/Home"
import ListComponents from "./components/ListComponents"
import Navbar from "./components/Navbar"
import TreeComponent from "./components/TreeComponent/TreeComponent"
import Work from "./components/Work"


function App() {
  return (
    <>
      <Navbar/>
      <div className="App">
        <Home />
        <ListComponents />
        <Work />
        <Chart />
        <About />
        <TreeComponent />
        <Footer />
      </div>
    </>
  )
}

export default App
