import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'


const Blogs = () => {
  return (
    <div id='blogs'>
        <h1 className='w-full text-5xl font-bold text-center mx-auto pt-7 text-[#00df9a] blogsTitle' >Work in progress :)</h1>
        <h1 className='w-full text-3xl font-bold text-center mx-auto pt-2 text-[#00df9a] blogsTitle' >&lt;&gt;</h1>
        <h6 className='w-full text-4xl font-bold text-center mx-auto pt-2 text-[#00df9a] blogsTitle'>PS :</h6>
        <h6 className='w-full text-4xl font-bold text-center mx-auto pt-2 text-[#00df9a] blogsTitle'>- Clicking on purple text must be <i id='warning'>AVOIDED</i>.</h6>
        <h6 className='w-full text-4xl font-bold text-center mx-auto pt-2 text-[#00df9a] blogsTitle'>- You can play around with cube.</h6>
        <h1 className='w-full text-3xl font-bold text-center mx-auto pt-2 text-[#00df9a] blogsTitle' >&lt;/&gt;</h1>
        <div id='canva'>
        <Canvas camera={{fov :25,position:[5,5,5]}}>
      <OrbitControls enableZoom={false}  />
      <ambientLight intensity={1} />
      <directionalLight position={[3,2,1]} />
        <Cube />
     </Canvas> 
     </div>
     </div>
  )
}

export default Blogs