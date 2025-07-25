import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client'
import { Link } from 'react-router';
import { AnimatePresence } from 'motion/react';
import { useAnimations } from '../hooks/useAnimations';
import { VideoProjectModal } from './VideoProjectModal';

export const ProjectCard = ({image, title, technologies, desc, linkN, linkGH, video}) => {

    const [cardClicked, setCardClicked] = useState({validation: false, card: ''});
    const [animationFirstDiv, setAnimationFirstDiv] = useState(true);
    const [animationSecondDiv, setAnimationSecondDiv] = useState(false);
    const [modalVideoIsOpen, setModalVideoIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const {screenWidth} = useAnimations();

    const descCut = desc.slice(0, 300);
    const descCutMd = desc.slice(0, 150);
    const technologiesCut = technologies.slice(0, 4);

    

    const handleCardClicked = () => {
        setAnimationFirstDiv(false);
        setTimeout(() => {
            setCardClicked({validation: true, card: title});
        }, 500);
        setTimeout(() => {
            setAnimationSecondDiv(true);
        }, 800);
    }

    const onSetModalVideoIsOpen = () => {
        setModalVideoIsOpen(!modalVideoIsOpen);
    }


    const onClose = () => {

        setAnimationSecondDiv(false);


        setTimeout(() => {
            setIsClosing(true);    
        }, 500);

        setTimeout(() => {
            setCardClicked({validation: false, card: ''});
            setIsClosing(false);
            setAnimationFirstDiv(true);
        }, 800);
    }




    const getBgColor = (tecnology) => {

        let bgColor = ''; 

       switch (tecnology) {
        case 'React JS':
            bgColor = 'bg-yellow-600';
            break;
        case 'React Native JS': 
            bgColor = 'bg-yellow-600';
            break;
        case 'Tailwind CSS':
            bgColor = 'bg-blue-400';
            break;
        case 'CSS':
            bgColor = 'bg-fuchsia-600';
            break;
        case 'Bootstrap':
            bgColor = 'bg-violet-700';
            break;
        case 'Expo' : 
            bgColor = 'bg-black';
            break;
        case 'Firebase' : 
            bgColor = 'bg-amber-700';
            break;
        case 'Convex' : 
            bgColor = 'bg-orange-500';
            break;
        case 'Motion' : 
            bgColor = 'bg-yellow-500';
            break;
        case 'Clerk' : 
            bgColor = 'bg-blue-600';
            break;
        default:
            break;
       }

       return bgColor;
    }


    useEffect(() => {
        if(cardClicked.validation){
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [cardClicked])
    


  return (
    <>
    
        <div className='col-span-12 md:col-span-4 lg:col-span-4 min-h-[25rem] max-h-[25rem] sm:min-h-[20rem] sm:max-h-[20rem] md:min-h-[24rem] md:max-h-[33rem] lg:min-h-[22.5rem] lg:max-h-[27rem]'>
            <motion.div
                    layout
                    transition={{
                        layout: { duration: 0.2, ease: 'easeInOut' }
                    }}
                    className={`bg-neutral-900 flex flex-col h-full ${cardClicked.validation && cardClicked.card === title && !isClosing? 'fixed top-0 left-0 w-screen h-screen z-[1000] rounded-none p-10 overflow-y-auto' : isClosing? 'bottom-0 rounded-4xl' : 'rounded-4xl p-6 sm:p-6 md:p-4 lg:p-6 justify-center'} `}
                >
                
                
                <AnimatePresence>
                   {
                    animationFirstDiv?
                        // FIRST DIV
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.4, ease: 'easeInOut'}}
                            className='flex flex-col gap-3'
                        >
                            <div className='w-16 h-16'>
                                <motion.img 
                                    src={image} 
                                    alt="Logo" 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.2, ease: 'easeInOut'}}
                                    className='w-16 h-16' 
                                />
                            </div>
                            <h2 className='text-white text-xl font-semibold'>{title}</h2>
                            <p className='text-white text-sm'>{

                                desc.length > 300 && (screenWidth < 768 || screenWidth > 1024)? !cardClicked.validation? `${descCut}...` : desc : desc.length > 150 &&  !cardClicked.validation? `${descCutMd}...` : desc
                            
                            }</p>
                            <div className='flex flex-wrap items-center gap-2'>
                                {
                                    technologiesCut.map((tecnology, index) => {

                                        const bgColor = getBgColor(tecnology);

                                        return(
                                            <span
                                                key={index} 
                                                className={`py-1 px-2 rounded-xl ${bgColor} text-white text-xs `}
                                        
                                            >
                                                {tecnology}
                                            </span>
                                        )
                                        
                                    })
                                }
                            </div>

                            <span 
                                className={`${cardClicked.validation? 'hidden' : 'text-blue-500 p-1 hover:underline cursor-none'}`}
                                onClick={handleCardClicked}
                            >
                                See more →
                            </span>
                        </motion.div>

                        :

                        animationSecondDiv &&

                        // SECOND DIV

                        <>

                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.4, ease: 'easeInOut'}}
                                onClick={onClose}
                                className='absolute top-4 left-5 my-8 p-1'
                            >

                                <motion.svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    height="1.5rem" 
                                    viewBox="0 -960 960 960" 
                                    width="1.5rem" 
                                    fill="#fff">
                                        <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                                </motion.svg>

                            </motion.div>
                            
                        
                            <motion.div 
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.4, ease: 'easeInOut'}}
                                className='flex justify-center my-11'
                            >

                                <div className='flex flex-col lg:w-[70%] gap-3'>

                                
                                    <div className='w-16 h-16'>
                                        <motion.img 
                                            src={image} 
                                            alt="Austronaut logo" 
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            transition={{duration: 0.2, ease: 'easeInOut'}}
                                            className='w-16 h-16' 
                                        />
                                    </div>
                                    <h2 className='text-white text-xl font-semibold'>{title}</h2>
                                    <p className='text-white whitespace-pre-line text-sm'>{desc}</p>
                                    <div className='flex items-center gap-2'>
                                        {
                                            technologies.map((tecnology, index) => {

                                                const bgColor = getBgColor(tecnology);

                                                return(
                                                    <span
                                                        key={index} 
                                                        className={`py-1 px-2 rounded-xl ${bgColor} text-white text-xs `}
                                                
                                                    >
                                                        {tecnology}
                                                    </span>
                                                )
                                                
                                            })
                                        }
                                    </div>

                                    <div className='flex w-full gap-8 mt-16'>

                                    <a 
                                        className='w-[50%] sm:w-[40%] flex justify-center items-center cursor-none py-2.5 rounded-md text-white border border-white hover:scale-105 duration-200'
                                        href={linkGH}
                                        target='_blank'

                                    >

                                    See Code

                                    </a>

                                    <a 
                                        className={`w-[50%] sm:w-[40%] text-center flex justify-center items-center cursor-none py-2.5 rounded-md bg-blue-400 text-white hover:scale-105 duration-200 ${!linkN? 'hidden' : ''}`}
                                        href={linkN}
                                        target='_blank'
                                    >

                                    See Project In Production

                                    </a>

                                    <button 
                                        className={`w-[50%] sm:w-[40%] text-center flex justify-center items-center cursor-none py-2.5 rounded-md bg-blue-400 text-white hover:scale-105 duration-200 ${!video? 'hidden' : ''}`}
                                        onClick={() => onSetModalVideoIsOpen()}
                                    >

                                    Watch production project video

                                    </button>

                                    <VideoProjectModal
                                        video={video}
                                        modalIsOpen={modalVideoIsOpen}
                                        onSetModalVideoIsOpen={onSetModalVideoIsOpen}
                                    />

                                    </div>
                                </div>
                            </motion.div>
                        
                        </>
                   }
                </AnimatePresence>

                

            </motion.div>
        </div>
    
    </>
  )
}

