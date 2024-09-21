import React from 'react'
import { useLoaderData } from 'react-router-dom'

const singleInvoice = () => {
  const {companyName, date, workDate, licensePlate, phoneNumber, vin, miles, labourDescription, labourCount, labourCost, labourTotal, parts, partsCost, partsCount, partsTotal,
    caTireFee, tireCount, creditCardFee, shopSupply, subtotal, tax, total, comments, paymentMethod
   } = useLoaderData()
  return (
    <div>
      {companyName}
      <div className='flex items-center justify-center'>
        Phone Number: {phoneNumber}
      </div>
      
      <div className='flex gap-8 items-center justify-center'>
        <div className='mb-2 block'>
        Date: {date}
        </div>
        <div className='mb-2 block'>
        Work Date: {workDate}
        </div>
      </div>
      
      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Licence Plate: {licensePlate}
        </div>
        <div className='mb-2 block'>
          Vin: {vin}
        </div>
        <div className='mb-2 block'>
          Miles: {miles}
        </div>
      </div>
      
      
      
      <div className='flex gap-12 items-center justify-center'>
      <div className='mb-2 block'>
          Labour: 
          <div className='flex'>
          {labourDescription}
          </div>
          
        </div>
      </div>

      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Labour Cost: {labourCost}
        </div>
        <div className='mb-2 block'>
          Labour Count: {labourCount}
        </div>
        <div className='mb-2 block'>
          Labour Total: {labourTotal}
        </div>
      </div>


      <div className='flex gap-12 items-center justify-center'>
      <div className='mb-2 block'>
          Parts: 
          <div className='flex'>
          {parts}
          </div>
          
        </div>
      </div>

      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Parts Cost: {partsCost}
        </div>
        <div className='mb-2 block'>
          Parts Count: {partsCount}
        </div>
        <div className='mb-2 block'>
          Parts Total: {partsTotal}
        </div>
      </div>


      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          CA Tire Fee: {caTireFee}
        </div>
        <div className='mb-2 block'>
          Tire Count: {tireCount}
        </div>
        <div className='mb-2 block'>
          Credit Card Fee: {creditCardFee}
        </div>
        <div className='mb-2 block'>
          Shop Supply: {shopSupply}
        </div>
      </div>


      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Subtotal: {subtotal}
        </div>
        <div className='mb-2 block'>
          Tax: {tax}
        </div>
      </div>

      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Total: {total}
        </div>
      </div>

      <div className='flex gap-12 items-center justify-center'>
        <div className='mb-2 block'>
          Comments: {comments}
        </div>
        <div className='mb-2 block'>
          Payment Method: {paymentMethod}
        </div>
      </div>





    </div>
  )
}

export default singleInvoice