import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
 

const SocialLinks = () => {

    return (
      <div className='flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'><a href='https://www.linkedin.com/in/maryam-muhammadirfan-197ab3267/' target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'><>Linkedin <FaLinkedin size={30}/></></a></li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'><a href='https://github.com/MaryamMemon9?tab=overview&from=2023-02-01&to=2023-02-28' target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'><>Github <FaGithub size={30}/></></a></li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'><a href='maryammemon274@gmail.com' target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'><>Mail <HiOutlineMail size={30}/></></a></li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'><a href='portfolio-app/src/assests/image/WhatsApp Image 2024-02-07 at 11.56.21 PM.jpeg' target='_blank' rel="noreferrer" download="true" className='flex justify-between items-center w-full text-white'><>Resume <BsFillPersonLinesFill size={30}/></></a></li>
        </ul>
      </div>
  )
}

export default SocialLinks