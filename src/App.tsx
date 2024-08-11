 import './App.css'
 import  {Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider,
  
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />}  />
       {/* <Route path='/items' element={<ItemPage({param.id}) />}  /> */}
        {/* <Route path='*' element={<NotFoundPage />}  /> */}
      </Route>
    )
    
  );
  return <RouterProvider router={router} />
}
export default App