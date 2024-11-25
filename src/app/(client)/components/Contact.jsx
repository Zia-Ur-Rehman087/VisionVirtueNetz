import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


function Contact() {
    return ( 
        <>
    <div className="contact-info flex flex-col gap-2 md:gap-8 py-8">
        <h1 className='text-white font-medium text-center text-2xl md:text-4xl'>Contact me</h1>
        <p className='text-[#959595] text-center'>Cultivating Connections: Reach Out and Connect with Me</p>
    </div>
    <Grid container spacing={2} >
    <Grid item xs={12} md={6} > 
        <form className='flex flex-col gap-5 items-center md:items-end'>
           <input type="text" name="username" placeholder='Name' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
           <input type="number" name="phoneNumber" placeholder='Phone Number' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
           <input type="text" name="Timeline" placeholder='Timeline' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
        </form>
    </Grid>
    <Grid item xs={12} md={6} className='flex flex-col gap-5'> 
    <input type="email" name="email" placeholder='email' className='bg-[#FFFFFF0A] rounded-lg focus:bg-[#FFFFFF0A] w-3/4 p-3 placeholder:text-[#959595] focus:outline-none placeholder:indent-2 indent-2' />
  <select id="countries" className="bg-[#FFFFFF0A] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-none block p-2.5 dark:bg-[#FFFFFF0A] dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#959595] dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none p-4 w-3/4 border-none">
    <option >Service of Interest</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  <textarea id="w3review" name="w3review" rows="4" cols="50" className='bg-[#FFFFFF0A] focus:outline-none rounded p-3 text-[#959595] !w-[75%]'>
    Project Details
</textarea>
<Button variant="outlined" className='w-fit font-bold capitalize border border-2 border-white' sx={{color:'white',border:'#959595'}}>Send</Button>
    </Grid>
    </Grid>    
        </>
     );
}

export default Contact;