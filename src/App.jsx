import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage,{jobLoader} from "./components/JobPage";
import AddJobPage from "./pages/AddJobPage";



function App() {
  const  addJob=async (newJob)=>{
    const res=await fetch('http://localhost:8000/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob),
    });
    return;
  }
  
  const deleteJob=async(id)=>{
    const res=await fetch(`http://localhost:8000/jobs/${id}`,{
      method:'DELETE',
      
    });
    return;
  }

  const router=createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
    <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    <Route path='*' element={<NotFoundPage />} />  
    </Route>
    )
  );

  return (
   <RouterProvider router={router}/>
  );
}

export default App;


// 2:50:00