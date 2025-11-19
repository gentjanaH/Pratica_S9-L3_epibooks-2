

import MyNav from "./components/MyNav"
// import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import OneBook from "./components/OneBook"
import fantasy from "./data/fantasy.json"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {


  return (
    <>

      <Welcome />
      <MyNav />
      <OneBook book={fantasy[0]} />
      {/* <AllTheBooks /> */}

      <MyFooter />
    </>
  )
}

export default App

