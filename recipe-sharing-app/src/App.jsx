import './App.css'
import {Outlet, Route} from 'react-router-dom'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import Root from './components/Root'
import AddRecipeForm from './components/AddRecipeForm'



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Root />}/>
      <Route path='recipes/:recipeid' element={<RecipeDetails />}/>
      
    </Route>
  )
)
function App() {

  return (
    <>
     <AddRecipeForm />
     <Outlet />  
    </>
  )
}

export default App;
