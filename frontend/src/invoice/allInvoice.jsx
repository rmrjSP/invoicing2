import React, {useEffect, useState} from 'react'

import { Card } from "flowbite-react";

const allInvoice = () => {
  const [invoices, setInvoices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-invoice").then(res => res.json()).then(data => setInvoices(data))  
  }, []);
  return (
    <div className='mt-28 px-4 lg;px-24 bg-sky-blue'>
      <header className='display:flex '>
      <h2 className='text-5x1 font-bold text-center text-2xl'>All Invoices</h2>
     
    </header>
    <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
      {
        invoices.map(invoice => <Card>
          <div className='border-2'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>
                {invoice.companyName}
              </p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
              {invoice.labourDescription}
              
              
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              
              {invoice.workDate}
              
              
            </p>
            

            <a href={'/singleInvoice/' + `${invoice._id}`}>
              {<button className='bg-gunmetal font-semibold text-black py-2 rounded'>More</button>}
            </a>
            </div>
        </Card>)
      }
    </div>
    

    </div>
  )
}

export default allInvoice