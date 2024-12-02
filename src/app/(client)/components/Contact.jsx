'use client'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import z from 'zod'
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import Textarea from '@mui/joy/Textarea';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'
import { useState } from 'react';
const validationSchema = z.object({
  username: z
    .string()
    .nonempty("Name is required"),
  phoneNumber: z
    .string()
    .regex(/^\+\d{1,3}\d{7,15}$/, "Invalid phone number format."),
  Timeline: z
    .string()
    .min(5, 'Timeline should include at least 5 characters.')
    .max(20, 'Timeline should not exceed 20 characters.'),
  email: z
    .string()
    .email("Please enter a valid email."),
  options: z
    .string()
    .nonempty("Please choose at least one option."),
  text: z
    .string()
    .min(5, "Please write at least 5 characters.")
});

function Contact() {
const {register,handleSubmit,formState:{errors}} = useForm({
  resolver: zodResolver(validationSchema)
});
const submitForm = (data) => {
  alert(`Form submitted with data: ${JSON.stringify(data)}`);
};
const [value,setValue] = useState(null)
    return ( 
        <>
 <div className="parent pb-[100px] md:pb-[150px]" id='contact'>
 <div className="text-center flex flex-col gap-4 md:gap-8 pb-24px md:pb-[40px] lg:[60px]">
        <h1 className="font-bold text-2xl text-black dark:text-[#959595]  dark:text-white text-[24px] md:text-[40px] capitalize">Contact me</h1>
        <p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
        </div>

        <form onSubmit={handleSubmit(submitForm)}>
    <Grid container spacing={2} className='w-full' >
    <Grid item md={6} lg={6} xl={6} className='flex flex-col gap-5 w-full items-center  lg:items-end'> 
           <input type="text" name="username" placeholder='Name' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] text-black dark:text-[#959595] w-3/4 p-3 placeholder:dark:text-[#959595] focus:outline-none placeholder:indent-2 indent-2 border-[1px] border-[#FD6F00] dark:border-none' 
           {...register('username')}
           />
           {errors.username && <p className='!text-start text-[FD6F00] dark:text-red-500'>{errors.username.message}</p>}
           {/* <input type="number" name="phoneNumber" placeholder='+921234567890' className='peer/phone bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] text-black dark:text-[rgb(149,149,149)] w-3/4 p-3 placeholder:dark:text-[#959595] focus:outline-none placeholder:indent-2 indent-2 border-[1px] border-[#FD6F00] dark:border-none'
           {...register('phoneNumber')}
           /> */}
     {/* <PhoneInput
         defaultCountry="PK"
         value={value}
         onChange={setValue}
         flags={flags}
        inputClass='bg-transparent'
      name="phoneNumber"
       placeholder='+921234567890' className='peer/phone bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] text-black dark:text-[rgb(149,149,149)] w-3/4 p-3 placeholder:dark:text-[#959595] focus:outline-none placeholder:indent-2 indent-2 border-[1px] border-[#FD6F00] dark:border-none'
           {...register('phoneNumber')}
      /> */}
      <PhoneInput
  defaultCountry="PK"
  value={value}
  onChange={setValue}
  flags={flags}
  name="phoneNumber"
  placeholder='+921234567890'
  className="
    peer/phone 
    bg-transparent 
    rounded-lg 
    text-black 
    dark:text-[rgb(149,149,149)] 
    w-3/4 
    p-3 
    placeholder:dark:text-[#959595] 
    focus:outline-none 
    placeholder:indent-2 
    indent-2 
    border-[1px] 
    border-[#FD6F00] 
    dark:bg-[#FFFFFF0A] 
    dark:border-none
  "
  inputClass="bg-transparent" // Explicit input background transparent for light mode
  {...register('phoneNumber')}
/>

      
  
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
           <input type="text" name="Timeline" placeholder='Timeline' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] text-black dark:text-[#959595] w-3/4 p-3 placeholder:dark:text-[#959595] focus:outline-none placeholder:indent-2 indent-2 border-[1px] border-[#FD6F00] dark:border-none'
           {...register('Timeline')}
           />
           {errors.Timeline && <p>{errors.Timeline.message}</p>}
    </Grid>
    <Grid item md={6} lg={6} xl={6} className='flex flex-col gap-5 w-full text-start items-center  lg:items-start'> 
        <input type="email" name="email" placeholder='Email' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] text-black dark:text-[#959595] w-3/4 p-3 placeholder:dark:text-[#959595] focus:outline-none placeholder:indent-2 indent-2 border-[1px] border-[#FD6F00] dark:border-none' 
        {...register('email')}
        />
{errors.email && <p>{errors.email.message}</p>}
  <select id="countries" name='option'  className="bg-[#FFFFFF0A] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#FD6F00] block p-2.5 dark:bg-[#FFFFFF0A] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#959595] dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none p-4 w-3/4 border-[1px] border-[#FD6F00] dark:border-none"
  {...register('option')}
  >
    {/*  */}
    {/* <option>Service of Interest</option> */}
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select> 
  {errors.option && <p>{errors.option.message}</p>}
  <Textarea
    placeholder="Project Details"
    name='text'
    className='w-3/4 h-28 bg-[#FFFFFF0A] border-0 outline-none focus:outline-none shadow-none focus:shadow-none !placeholder:text-[#959595] !text-[#959595] border-[1px] border-[#FD6F00] dark:border-none'
    sx={{ mb: 1,
    '--Textarea-focusedHighlight' : {
    color:'transparent',
    }

     }}

{...register('text')}
     
  />
  {errors.text && <p>{errors.text.message}</p>}
<div className="button flex  justify-center lg:justify-end w-3/4">
<Button variant="outlined"  type='submit' className='w-fit md:px-7 px-10 text-[#959595] border-1 border-[#FD6F00] dark:text-white  dark:border-white hover:text-white hover:bg-[#FD6F00] hover:dark:border-transparent hover:border-transparent' 
>Send</Button>
  </div>
    </Grid>
    </Grid>  
        </form>
</div>
        </>
     );
}

export default Contact;