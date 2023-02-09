import React,{useState,useEffect} from 'react'
import banner from '../assets/banner.jpg'
import frite from '../assets/Frite.jpg'
import repas from '../assets/repas.jpg'
import frite2 from '../assets/frite2.jpg'
import burger from '../assets/burger.jpg'
import poulet from '../assets/poulet.jpg'
import { killer } from '../../constants/index.js'
const Banner = () => {
  const [background, setBackground]= useState(banner)
  const bgArray = [banner,frite,repas,frite2,burger,poulet]
  useEffect(()=>{
    const changeBackground=(last)=>{
      const id = Math.floor(Math.random()*bgArray.length)
      console.log(id)
      setBackground(bgArray[id])
      if(last=== bgArray[id]){
        changeBackground(last)
      }
    }
    const myInter = setTimeout(()=>changeBackground(background),5000)
    // clearInterval(myInter)
  })
  return (
    <section   className='banner w-full text-black h-[80vh]  bg-cover transition-all duration-700 ease-in' style={{backgroundImage:`url(${background})`}}>
  <div className=' text-white w-6/12 ml-[20%] pt-24 ' >
    <p className='text-2xl mb-2'>Easy, Fresh & Convenient</p>
    <p className='text-8xl font-bold mb-5'>Stock Up on <br /> Daily Essentials</p>
    <p className='text-4xl font-bold mb-2 leading-10'>Save Big on Your <br /> Favorite Brands</p> 
    <button  className='w-32 h-12 rounded-2xl font-bold bg-red-700'>Shop now</button>
  </div>
  <div className='w-full h-[350px] flex  gap-12 items-center justify-center mt-10'>
    {
      killer.map((item,id)=><div className='flex gap-3 items-center justify-center'>
        < item.logo className=' w-20 h-20 text-red-700'/ >
          <div>
            <p className='font-bold text-2xl '>{item.title}</p>
            <p>{item.text}</p>
          </div>
      </div>)
    }
  </div>
    </section >
  )
}

export default Banner
