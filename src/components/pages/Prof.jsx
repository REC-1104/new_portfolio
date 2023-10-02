import React from 'react'
import Typed from 'react-typed'
import { Canvas } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Prof = () => {
  
  const handleModal = () => {
    document.querySelector('#modal-box').style.display = 'block'
  }

  const closeModal = () => {
    document.querySelector('#modal-box').style.display = 'none'
  }

  return (
    <div className='text-white h-full' id='prof'>
       <div id="video-overlay">
       <div class="sky">
        <div class="container">
  <div class="clyde">
    <div class="clydetop">
      <div class="righteye">
        <div class="iris"></div>
      </div>
      <div class="lefteye">
        <div class="iris"></div>
      </div>
    </div>
    <div class="tail">
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
      <div class="triangle"></div>
    </div>
  </div>
</div>
<div class="blob">
        <Canvas id='canvas' className='z-[-2]'>
      <OrbitControls enableZoom={false}  />
      <ambientLight intensity={2} />
      <directionalLight position={[6,4,2]} />
       <Sphere args={[1.2,200,400]} scale={2.3}>
       <MeshDistortMaterial color="#9D00FF" attach="material" distort={0.4} speed={2} />
       </Sphere>
     </Canvas>
     </div>
<div id="modal-box" class="modal">
  <div class="modal-content">
      <h2 className='font-bold'>FATAL !</h2>
      <img src={require('../../assets/warn.webp')} alt="warning" className='h-[100%] w-full' />
      <div className='flex justify-between'>
        <a href="https://www.youtube.com/watch?v=LNvKGjOYiOY&ab_channel=JackNowzaraden" target='_blank'><h1 className='ml-4 cursor-not-allowed'>Continue</h1></a>
        <h1 className='mr-4 cursor-pointer' id="cross" onClick={closeModal}>Go Back !</h1>
      </div>
  </div>
</div>
   <div className='w-full text-center flex flex-col justify-center items-center'>
    <h1 className='w-full text-5xl font-bold text-[#ffffff] mt-[-80px] z-[5]' id='MH'>REC-1104.</h1>
    <div className='mt-[100px] z-4'>
        <p>Just a <i onClick={handleModal} className='font-bold text-[#9D00FF]' id="warn">Regular Everyday Coder</i>  aiming to hone my skills and trying to contribute.</p>
        
    <p className='inline'>I'm a </p><Typed strings={['Frontend Developer.','Data Science Enthusiast.','Anime Lover.']} typeSpeed={120} backSpeed={140} loop className='text-[#00df9a] uppercase font-bold font-3xl'/>
    </div>
    <button id='explore' className='bg-[#00df9a] w-[200px] rounded-md my-6 py-3 text-black'>Explore !</button>
    <div id="scrollf"></div>
   </div>
    </div>
    </div>
    </div>
  )
}

export default Prof