

import MyNav from "./components/MyNav"
// import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import OneBook from "./components/OneBook"
import fantasy from "./data/fantasy.json"
import BookList from "./components/BookList"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {


  return (
    <>

      <Welcome />
      <MyNav />
      {/* <OneBook book={fantasy[1]} /> */}
      <BookList books={fantasy} />
      {/* <AllTheBooks /> */}

      <MyFooter />
    </>
  )
}

export default App

