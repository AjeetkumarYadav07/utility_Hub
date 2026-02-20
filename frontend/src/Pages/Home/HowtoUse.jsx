import React from 'react'

const HowtoUse = () => {
  return (
    <>
     <section className='w-full bg-purple-200 '>
        <div className='max-w-[1220px] mx-auto px-5  py-[30px] md:py-[50px]   '>
              {/* text-section */}
            <div className='text-center items-center'>
             <h1 className='font-lato font-bold text-purple-500  text-xl sm:text-2xl md:text-[40px]'>How to use Utility Hub</h1>
             <p className='font-lato text-xs sm:text-sm md:text-2xl '>Easily use our tools with these simple steps </p>
            </div>
           <img  
           src="../../assets/HomePage/howtouse_section_img.png" alt="howtouse_section_img" />
        </div>
     </section>
    
    </>
  )
}

export default HowtoUse