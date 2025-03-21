import * as motion from 'motion/react-client'
import { useForm, ValidationError } from '@formspree/react'
import { AnimatePresence } from 'motion/react';
import React, { useState } from 'react'

export const ContactForm = () => {

    const [state, handleSubmit] = useForm('mrbppgej');
    const [submitValidation, setSubmitValidation] = useState(false);
    const [userHasSent, setUserHasSent] = useState(false);
    const [formKey, setFormKey] = useState(Date.now());

    const submitWithValidation = (event) => {

        event.preventDefault();

        handleSubmit(event)
        setSubmitValidation(true);
        setUserHasSent(true);

        event.target.reset();


        setTimeout(() => {
            setSubmitValidation(false);
            setFormKey(Date.now());
        }, 2000);

    }



  return (
    <>
    
        <div className='w-full h-full flex flex-col items-center'>


            {
                !submitValidation?
                <motion.div
                    key={formKey}
                    initial={!submitValidation && userHasSent? {scale: 0} : {scale: 1}}
                    animate={!submitValidation && userHasSent && {scale: 1}}
                    className='w-full'
                >
                
                    <div className='w-full flex justify-start mb-3'>
                        <h2 className='text-start text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium'>Contact Me</h2>
                    </div>

                    <form 
                        onSubmit={submitWithValidation}
                        className='w-full h-full flex flex-col justify-center items-center gap-4'
                    >

                        <input
                            id="name"
                            type="name" 
                            name="name"
                            placeholder='name'
                            className='w-full bg-white rounded-full p-4 placeholder-black cursor-none focus:outline-0'
                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className='text-white'
                        />
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            placeholder='email'
                            className='w-full bg-white rounded-full p-4 placeholder-black cursor-none focus:outline-0'
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className='text-white'
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Message'
                            className='bg-white w-full rounded-4xl p-4 h-32 placeholder-black cursor-none focus:outline-0 resize-none'
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                            className='text-white'
                        />
                        <button className='bg-blue-400 text-white text-[1.1rem] px-7 py-2 flex items-center rounded-4xl cursor-none' type="submit" disabled={state.submitting}>
                            Send
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="1.2rem" 
                                viewBox="0 -960 960 960" 
                                width="1.2rem" 
                                fill="#fff"
                                className='ms-1'
                                >
                                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
                            </svg>
                        </button>

                    </form>
                
                </motion.div>

                :

                <AnimatePresence>
                    <div className='w-full h-full flex justify-center items-center'>
                        <motion.h2 
                            className='text-xl font-medium text-white'
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            exit={{scale: 0}}
                            transition={{duration: 0.3, ease: 'easeInOut'}}
                        >
                            Thanks For Sending
                        </motion.h2>
                    </div>
                </AnimatePresence>
            }
    

        </div>
    
    </>
  )
}
