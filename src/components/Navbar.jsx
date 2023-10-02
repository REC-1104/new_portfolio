import React,{useState} from 'react'
import {CgClose,CgMenu} from 'react-icons/cg'
import {SlPaperPlane} from 'react-icons/sl'


const Navbar = () => {
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
        if(nav){
        document.querySelector('.container').style.display = 'none'
        document.querySelector('#prof').style.display= 'none'
        document.querySelector('#project').style.display= 'none'
        document.querySelector('#blogs').style.display= 'none'
        document.querySelector('#contact').style.display= 'none'
        }
        else{
            document.querySelector('.container').style.display = 'block' 
            document.querySelector('#prof').style.display= 'block'
            document.querySelector('#project').style.display= 'block'
            document.querySelector('#blogs').style.display= 'block'
            document.querySelector('#contact').style.display= 'block'
        }
    }

    return (
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white z-[4]'>
           <i className='font-bold text-white' id='navHead'>Obviously its a </i><h1 className='w-full text-4xl font-bold text-[#00df9a]'>PORTFOLIO.</h1> 
           <ul className= 'hidden md:flex z-[4]'>
            <li className='p-4 '>
              <a href="#project">Projects</a> 
            </li>
            <li className='p-4 '>
               <a href="#blogs">Blogs</a> 
            </li>
            <li className='p-4 '>
              <a href="#contact">Contact</a>  
            </li>
           </ul>
           {/* <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {!nav ? <CgClose size={20} /> : <CgMenu size={20}/>}
           </div>
           <div id ="handler"className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#120411] ease-in-out duration-500':'fixed left-[-100%]'}>
        <div className='flex justify-center items-center m-5'>
           <SlPaperPlane color='#00df9a' size={40} />
        </div>
        <div className='flex justify-center items-center m-2'>
        <h1 className='text-[#00df9a] uppercase font-bold'>Jump To ?</h1>
        </div>
            <ul className='pt-12 uppercase p-4' >
            <li className='p-4 border-b border-gray-600'>
                <a href="#project">Projects</a>
            </li>
            <li className='p-4 border-b border-gray-600'>
                <a href="#blogs">Blogs</a>
            </li>
            <li className='p-4'>
               <a href="#contact">Contact</a> 
            </li>
            </ul>
            </div> */}
           </div>
        
    )
}

export default Navbar