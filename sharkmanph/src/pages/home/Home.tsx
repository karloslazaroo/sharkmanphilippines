import picture from '../../assets/Rectangle 1.png'
import SplitType from 'split-type'
import { gsap } from "gsap";


export function Home() {
  let text = new SplitType("#my-text");
  let characters = document.querySelectorAll('.char');
  
  for(let i=0; i<characters.length; i++){
    characters[i].classList.add('translate-y-full');
  }
  
  


gsap.to('.char', {
  y: 0,
  stagger: 0.05,
  delay: 0.02,
  duration: 0.8
}
)

  return(
    <>
    <div className="bg-wild-sand-500 w-screen h-screen">
    <img src={picture} className='mx-auto mt-10'></img>
    <p id="my-text" className='absolute top-2/4 left-56 mt-12 text-left tracking-widest text-8xl text-gray-900 dark:text-white font-extrabold clip-path'>THE SOURCE <br></br>OF POWER</p>
  
    
    </div>

    
    
     
      
    </>
  )
}