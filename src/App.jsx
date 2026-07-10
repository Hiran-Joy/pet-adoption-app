import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPet from './components/AddPet'
import ViewPet from './components/ViewPet'
import SearchPet from './components/SearchPet'
import DeletePet from './components/DeletePet'
import NavigationBar from './components/NavigationBar'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<AddPet/>}/>
          <Route path='/search' element={<SearchPet/>}/>
          <Route path='/delete' element={<DeletePet/>}/>
          <Route path='/view' element={<ViewPet/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App