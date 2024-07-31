import React, { useEffect, useState }  from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea, Datepicker } from "flowbite-react";

const addInvoice = () => {

  const handleInvoiceSubmit = (event) => {
    event.preventDefault();
    const form = event.target

    const companyName = form.companyName.value;
    const date = form.date.value;
    const workDate = form.workDate.value
    //const unitNumber = from.unitNumber.value;
    const licencePlate = form.licencePlate.value;
    const phoneNumber = form.phoneNumber.value;
    const vin = form.vin.value;
    const miles = form.miles.value;
    const labourDescription = form.labourDescription.value;
    const labourCost = form.labourCost.value;
    const labourCount = form.labourCost.value;
    const labourTotal = form.labourTotal.value;
    const parts = form.labourDescription.value;
    const partsCost = form.labourCost.value;
    const partsCount = form.labourCost.value;
    const partsTotal = form.labourTotal.value;
    const caTireFee = form.caTireFee.value;
    const tireCount = form.tireCount.value;
    const creditCardFee = form.creditCardFee.value;
    const shopSupply = form.shopSupply.value;
    const subtotal = form.subtotal.value;
    const tax = form.tax.value;
    const total = form.total.value;
    const comments = form.comments.value;
    const paymentMethod = form.paymentMethod.value;

    const invoiceObj = {
      companyName, date, workDate, /*unitNumber*/ licencePlate, phoneNumber, vin, miles, labourDescription, labourCost, labourCount, labourTotal, parts, partsCost, partsCount
      , partsTotal, caTireFee, tireCount, creditCardFee, shopSupply, subtotal, tax, total, comments, paymentMethod 
    }

    console.log(invoiceObj)
    

    fetch("http://localhost:5000/upload-invoice", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(invoiceObj)
    }).then(res => res.json()).then(data =>{
       console.log(data)
       alert("Invoice Upload Succesful")
       form.reset()
    })


  };




  return (
    <div>
    <div>Add Invoice</div>

    <form onSubmit={handleInvoiceSubmit}>
      <div className='flex gap-8'>
        <div className='lg:w-auto'>
          <div className='mb-2 block'>
            <Label
              htmlFor='companyName'
              value='companyName'
            />
          </div>
        <TextInput
          id="companyName"
          name="companyName"
          type="text"
          placeholder='Company Name'
          required
        />
        </div>
      </div>

      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label
              htmlFor='date'
              value='date'
            />
          </div>
        <Datepicker
          id="date"
          name="date"
          required
        />
        </div>

        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label
              htmlFor='workDate'
              value='workDate'
            />
          </div>
        <Datepicker
          id="workDate"
          name="workDate"
          required
        />
        </div>
      </div>
    <div className="flex gap-8">
        <div className='lg:w-1/3'>
            <div className='mb-2 block'>
              <Label
                htmlFor='unitNumber'
                value='unitNumber'
              />
            </div>
          <TextInput
            id="unitNumber"
            name="unitNumber"
            type="text"
            placeholder='unitNumber'
            required
          />
        </div>

        <div className='lg:w-1/3'>
            <div className='mb-2 block'>
              <Label
                htmlFor='licencePlate'
                value='licencePlate'
              />
            </div>
          <TextInput
            id="licencePlate"
            name="licencePlate"
            type="text"
            placeholder='licencePlate'
            required
          />
        </div>

        
        <div className='lg:w-1/3'>
            <div className='mb-2 block'>
              <Label
                htmlFor='phoneNumber'
                value='phoneNumber'
              />
            </div>
          <TextInput
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder='phoneNumber'
            required
          />
        </div>


    </div>
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='vin'
            value='vin'
          />
        </div>
        <TextInput
          id='vin'
          name='vin'
          type='text'
          placeholder='vin'
        />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='miles'
            value='miles'
          />
        </div>
        <TextInput
          id='miles'
          name='miles'
          type='text'
          placeholder='miles'
        />
      </div>
    </div>
    <div className='flex gap-10'>
      <div className='lg:w-auto'>
        <div className='mb-2 block'>
          <Label
            htmlFor='labourDescription'
            value='labourDescription'
          />
        </div>
        <Textarea
          id="labourDescription"
          name="labourDescription"
          placeholder="Write labour description..."
          required
          className='w-full'
          rows={6}
        />
      </div>
    </div>
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='labourCost'
            value='labourCost'
          />
        </div>
        <TextInput
          id='labourCost'
          name='labourCost'
          type='text'
          placeholder='labourCost'
        />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='labourCount'
            value='labourCount'
          />
        </div>
        <TextInput
          id='labourCount'
          name='labourCount'
          type='text'
          placeholder='labourCount'
        />
      </div>
    </div>
    <div className="flex gap-8">
      <div className="lg:w-auto">
        <div className='mb-2 block'>
          <Label
            htmlFor='labourTotal'
            value='labourTotal'
          />   
        </div>
        <TextInput
        id='labourTotal'
        name='labourTotal'
        type='text'
        placeholder='labourTotal'
        />
      </div>
    </div>



    <div className='flex gap-10'>
      <div className='lg:w-auto'>
        <div className='mb-2 block'>
          <Label
            htmlFor='parts'
            value='parts'
          />
        </div>
        <Textarea
          id="parts"
          name="parts"
          placeholder="Write parts description..."
          required
          className='w-full'
          rows={6}
        />
      </div>
    </div>
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='partsCost'
            value='partsCost'
          />
        </div>
        <TextInput
          id='partsCost'
          name='partsCost'
          type='text'
          placeholder='partsCost'
        />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='partsCount'
            value='partsCount'
          />
        </div>
        <TextInput
          id='partsCount'
          name='partsCount'
          type='text'
          placeholder='partsCount'
        />
      </div>
    </div>
    <div className="flex gap-8">
      <div className="lg:w-auto">
        <div className='mb-2 block'>
          <Label
            htmlFor='partsTotal'
            value='partsTotal'
          />   
        </div>
        <TextInput
        id='partsTotal'
        name='partsTotal'
        type='text'
        placeholder='partsTotal'
        />
      </div>
    </div>

    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='caTireFee'
            value='caTireFee'
          />
        </div>
        <TextInput
          id='caTireFee'
          name='caTireFee'
          type='text'
          placeholder='caTireFee'
        />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='tireCount'
            value='tireCount'
          />
        </div>
        <TextInput
          id='tireCount'
          name='tireCount'
          type='text'
          placeholder='tireCount'
        />
      </div>
    </div>

    <div className='flex gap-8'>
      <div className='lg:w-1/4'>
        <div className='mb-2 block'>
          <Label
            htmlFor='creditCardFee'
            value='creditCardFee'
          />
        </div>
        <TextInput
          id='creditCardFee'
          name='creditCardFee'
          type='text'
          placeholder='creditCardFee'
        />
      </div>

      <div className='lg:w-1/4'>
        <div className='mb-2 block'>
          <Label
            htmlFor='shopSupply'
            value='shopSupply'
          />
        </div>
        <TextInput
          id='shopSupply'
          name='shopSupply'
          type='text'
          placeholder='shopSupply'
        />
      </div>

      <div className='lg:w-1/4'>
        <div className='mb-2 block'>
          <Label
            htmlFor='subtotal'
            value='subtotal'
          />
        </div>
        <TextInput
          id='subtotal'
          name='subtotal'
          type='text'
          placeholder='subtotal'
        />
      </div>

      <div className='lg:w-1/4'>
        <div className='mb-2 block'>
          <Label
            htmlFor='tax'
            value='tax'
          />
        </div>
        <TextInput
          id='tax'
          name='tax'
          type='text'
          placeholder='tax'
        />
      </div>
    </div>

    <div className="flex gap-8">
      <div className="lg:w-auto">
        <div className='mb-2 block'>
          <Label
            htmlFor='total'
            value='total'
          />   
        </div>
        <TextInput
        id='total'
        name='total'
        type='text'
        placeholder='total'
        />
      </div>
    </div>
    
    <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='comments'
            value='comments'
          />
        </div>
        <TextInput
          id='comments'
          name='comments'
          type='text'
          placeholder='comments'
        />
      </div>

      <div className='lg:w-1/2'>
        <div className='mb-2 block'>
          <Label
            htmlFor='paymentMethod'
            value='paymentMethod'
          />
        </div>
        <TextInput
          id='paymentMethod'
          name='paymentMethod'
          type='text'
          placeholder='paymentMethod'
        />
      </div>
    </div>




    

    

    

      <Button type="submit" className='mt-5 text-black'>
                    Upload Invoice
      </Button>
    
    </form>
    </div>
  )
}

export default addInvoice