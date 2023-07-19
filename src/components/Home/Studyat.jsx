import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'

const Studyat = () => {

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
    <div ref={ref} className='w-full h-[13rem] bg-gray-100'>
        <div className='h-full container mx-auto border-5 border-yellow-600 flex flex-col items-center justify-center gap-10'>
            <motion.h1 animate={animation} className='hidden sm:block text-black md:text-3xl text-2xl font-bold uppercase'>Study at Friendly Private School</motion.h1>
            <motion.div animate={animation} className='block sm:hidden'>
                <h1 className='text-2xl font-bold text-black uppercase'>Study at Friendly</h1>
                <h1 className='text-2xl font-bold text-black uppercase'>Private School</h1>
            </motion.div>
            <div>
                <motion.button animate={animation} className=' bg-primary hover:bg-[#3a9822] text-white px-4 py-2 rounded-md'>
                    Application Form
                </motion.button>
            </div>
        </div>
        
    </div>
  )
}

export default Studyat