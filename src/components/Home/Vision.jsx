import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'

const Vision = () => {

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() =>{
    console.log("use effect hook, inView =", inView)
    if(inView){
        animation.start({
            x:0,
            transition:{
                type:'spring', duration: 1.2, bounce:0.3, delay:0.2
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
    <div className='bg-[#072033] w-full'>
        <div ref={ref} className='container h-full mx-auto pt-10 pb-10'>
                <motion.h1 animate={animation} className='text-primary text-center text-3xl uppercase font-bold'>Our Vision</motion.h1>
                <div className='w-[75%] md:w-[60%] mx-auto  text-white px-4 py-2 rounded-md mt-10'>
                    <motion.p animate={animation}>
                    To provide a stimulating learning environment across the whole curriculum, which maximizes individual potential and ensures learners of all. Ability levels are well equipped to meet the challenges of education and life.
                    </motion.p>
                </div>
        </div>
    </div>
  )
}

export default Vision