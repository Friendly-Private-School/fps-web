import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'


const Upcoming = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
      useEffect(() =>{
        console.log("use effect hook, inView =", inView)
        if(inView){
            animation.start({
                x:0,
                transition:{
                    type:'spring', duration: 1.2, bounce:0.3
                }
            });
        }
        if(!inView){
            animation.start({
                x:'-100vw'
            })
        }
        
      }, [inView]);

  return (
    <div ref={ref} className='w-full bg-yellow-500 px-5 pt-10 pb-3'>
        <motion.h1  className='text-center font-bold text-3xl py-5 text-white uppercase'>Upcoming Events</motion.h1>
        <div className='w-full h-[80rem] sm:h-[60rem] lg:h-[30rem] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 gap-4'>
            
            <motion.div animate={animation} className='flex flex-col'>
                <div className='w-full h-[70%] sm:h-[80%] bg-cover bg-center whk-background'></div>
                <div className='w-full h-[30%] sm:h-[20%] bg-white flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl md:text-3xl'>Windhoek Tour</h1>
                    <h2 className=' text-lg text-gray-500'>May 2023</h2>
                    <h2 className='text-lg text-gray-500'>Grade 5-7</h2>
                </div>
            </motion.div>

            <motion.div animate={animation} className='flex flex-col'>
                <div className='w-full h-[70%] sm:h-[80%] bg-cover bg-center swakop-background'></div>
                <div className='w-full h-[30%] sm:h-[20%] bg-white flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl md:text-3xl'>Swakopmund Tour</h1>
                    <h2 className='text-lg text-gray-500'>June 2023</h2>
                    <h2 className='text-lg text-gray-500'>Grade 8-10</h2>
                </div>
            </motion.div>

            <motion.div animate={animation} className='flex flex-col'>
                <div className='w-full h-[70%] sm:h-[80%] bg-cover bg-center entre-background'></div>
                <div className='w-full h-[30%] sm:h-[20%] bg-white flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl md:text-2xl'>Entrepreneurship <span className='hidden md:inline-block'>Day</span></h1>
                    <h2 className='text-lg text-gray-500'>September 2023</h2>
                    <h2 className='text-lg text-gray-500'>Grade N/A</h2>
                </div>
            </motion.div>
        </div>

        <div className='mx-auto flex justify-center py-10'>
        <button className='px-4 py-2 bg-gray-200 font-bold rounded-md text-center'>Load More...</button>
        </div>
        
    </div>
  )
}

export default Upcoming