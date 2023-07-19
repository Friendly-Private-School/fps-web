import React from 'react';


const About = () => {
    
  return (
    <div className='w-full bg-[#ececec]'>

        

        <div className='w-full grid grid-cols-4 h-[65vh]'>
            <div className='hidden sm:block col-span-1 h-full bg-[#072033]'>
                <div className='h-full flex items-center justify-center'>
                    <h1 className='text-white text-4xl font-semibold text-center'>
                        Our <span className='block'>Motto</span>
                    </h1>
                </div>
            </div>
            
            <div className='relative col-span-4 sm:col-span-2 about-background-1 bg-cover bg-center'>
                <div className='absolute bottom-10 block sm:hidden'>
                    <div className='flex justify-center items-center w-[80%] mx-auto h-full py-5 bg-[#ffffffcc]'>
                        <h1 className='text-black text-center text-5xl font-semibold'>
                            About Friendly Private School
                        </h1>
                    </div>
                    
                </div>
            </div>
            <div className='hidden sm:block col-span-1 h-full bg-yellow-500'>
                <div className='h-full flex items-center justify-center'>
                    <h1 className='text-white text-3xl md:text-4xl font-semibold text-center'>"Every Child <span className='block'>a Success"</span></h1>
                </div>
            </div>
            
        </div>

        <div className='container mx-auto flex gap-5 px-5 py-20 '>            
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='text-4xl font-semibold'>Our Mission</h1>
                <p className='md:w-1/2 sm:w-[75%] w-auto'>
                Steadfast in faint and aim to rise above the ordinary by developing education which can transform lives and communities, inspired by our faith in Christ and together with our parents and communities, we aim for each person to reach their full potential in body, mind, heart and spirit.
                </p>
            </div>
        </div>

        <div className='container mx-auto flex gap-5 px-5 pt-5 pb-20 '>            
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='text-4xl font-semibold'>Our Vision</h1>
                <p className='md:w-1/2 sm:w-[75%] w-auto'>
                To provide a stimultaing learning environment across the whole curriculum, which maximizes individual potential and ensures leaners of all. Ability levels are well equipped to meet the challenges of education and life.
                </p>
            </div>
        </div>


    </div>
  )
}

export default About