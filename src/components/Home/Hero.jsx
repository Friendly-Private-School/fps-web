import React from 'react'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'
import { Link } from 'react-router-dom'


const Hero = () => {

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
    <div className='text-white'>
        <div className='custom-class w-full h-[78vh] bg-cover bg-center'>
            <div ref={ref} className='container h-full mx-auto flex flex-col justify-center py-10 px-20 gap-20 items-start'>
                {/* FPS */}
                <motion.div className='z-40'
                    animate={animation}
                >
                    <motion.div className=' bg-[#00000065] border-[#33ff00] border-l-8 pl-8 pr-4 py-2 md:text-7xl sm:text-5xl text-4xl font-bold '>
                        <h1>Friendly Private</h1>
                        <h1>School</h1>
                    </motion.div>
                </motion.div>
                {/* Call to Action Buttons */}
                <div className='flex gap-4'>
                    <motion.button 
                        animate={animation}
                        whileHover={{scale:1.1}}
                        transition={{duration:0.4}}
                         className='rounded-lg bg-[#42b426] hover:bg-[#3a9822] px-4 py-2 uppercase font-bold'>
                        <Link to='contact'>Enquire</Link>
                    </motion.button>
                    <motion.button 
                        animate={animation}
                        whileHover={{scale:1.1}}
                        transition={{duration:0.4}}
                         className='rounded-lg bg-[#000000a8] hover:bg-[#0000004a] px-4 py-2 uppercase font-bold border-2 border-white shadow-xl'>
                        <Link to='about'>About</Link>
                    </motion.button>
                </div>
                {/* <WaveLine /> */}
                <svg className='absolute top-32 left-0 z-10' viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path className='z-10' d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" 
                    initial={{strokeOpacity:0, pathLength:0, pathOffset:1}}
                    animate={{strokeOpacity:0.7, pathLength:1, pathOffset:0}}
                    transition={{duration:4, ease:'easeInOut'}}
                    stroke="#33ff00" strokeOpacity="0.1" strokeWidth="10"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Hero