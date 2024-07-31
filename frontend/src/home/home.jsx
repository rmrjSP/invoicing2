import React from 'react'

const home = () => {
  return (
    <div>
    <p>Nav Services</p>
    <a href='/allInvoice' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'> All Invoices </a>
    <a href='/addInvoice' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'> Add Invoices </a>
    <a href='/searchInvoice' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'> Search Invoices </a>
    </div>
  )
}

export default home