import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "../App";
import AllInvoice from "../invoice/allInvoice";
import AddInvoice from "../invoice/addInvoice";
import SearchInvoice from "../invoice/searchInvoice"
import SingleInvoice from "../invoice/singleInvoice"
import Home from "../home/home"

const router = createBrowserRouter([
    {
    path: "/",
    element: <App/>,
    children: [
        {
        path: "/",
        element: <Home/>
        },
        {
            path: "/allInvoice",
            element: <AllInvoice/>
        },
        {
            path: "/addInvoice",
            element: <AddInvoice/>
        },
        {
            path: "/searchInvoice",
            element: <SearchInvoice/>
        },
        {
            path: "/singleInvoice",
            element: <SearchInvoice/>
        }

    ]
    }
    
   
  
    
])

export default router