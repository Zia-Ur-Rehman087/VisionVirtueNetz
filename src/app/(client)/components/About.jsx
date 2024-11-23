'use client'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Grid from '@mui/material/Grid';
import HireBtn from '../../../../reusable/HireBtn';
import emage from '../../../../public/portfolioImage.png'


export default function About() {
      return (
            (
                  <>
                        <div className='py-10'>
                              <div className="text-center my-5">
                                    <h1 className="font-bold text-2xl text-[#959595]">About me</h1>
                                    <p className="text-[#707070]">Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam</p>
                              </div>
                              <Grid container spacing={5}>
                                    <Grid item xs>
                                          <div className="rightImage p-5 relative *:
            after:content-[''] after:bg-[#1B1B1B] !after:w-[50px] after:h-[200px] after:md:w-[470px] after:md:h-[470px] after:rounded-t-full after:absolute after:top-[7.8rem] after:sm:left-[0.5rem] after:left-[5.5rem] after:md:left-[4.5rem] after:-z-10 
            ">
                                                <div className="image overflow-hidden w-64 md:w-96 mx-auto">
                                                      <img src={emage.src} alt='myImage' className='mix-blend-luminosity object-cover' />
                                                </div>
                                                <div>
                                                </div>
                                          </div>
                                    </Grid>
                                    <Grid item xs className='flex flex-col items-start justify-center gap-5'>
                                          <p>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
                                          <div  className={`flex gap-2 btn text-sm md:text-lg capitalize py-2 px-5 md:px-8 rounded-lg bg-[#FD6F00]
                         border border-2 border-transparent
                            hover:bg-transparent hover:border hover:border-2 hover:border-[#959595]`}>
                                          <SaveAltIcon /> 
                                                 < HireBtn text='Download CV'> </HireBtn>
                           
                                          </div>
                                        
                                    </Grid>
                              </Grid>
                        </div>
                  </>
            )
      );
}
