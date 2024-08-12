import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CreateBook from './Pages/CreateBook'
import About from './Pages/About'
import EditPage from './Pages/EditPage'
import {Provider} from "react-redux"
import appStore from './utils/appStore'
function App() {
  return (
<div>
  <Provider store={appStore}>
  <BrowserRouter>
  
  <Routes>
  
  <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<CreateBook/>}></Route>
    <Route path='/details/:id' element={<About/>}></Route>
    <Route path='/edit/:id' element={<EditPage/>}></Route>
   
   
  </Routes>
 
  </BrowserRouter>
  </Provider>
  
</div>
  )
}

export default App