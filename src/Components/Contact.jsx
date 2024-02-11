import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-whie'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg max-auto h-full'>
            <div className='pb-0'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 text-white '>Contact</p>
                <p className='py-6 text-white'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/68940116-c066-487b-959b-69d57997b4d9' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name='email' placeholder='enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' placeholder='enter your message' rows={10}  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 from-blue-500 px-6 py-3 my-8 max-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact