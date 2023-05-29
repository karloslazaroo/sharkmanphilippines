import picture from '../../assets/Rectangle 1.png'
import SplitType from 'split-type'
import { gsap } from "gsap";
import header from '../../assets/header.jpg'
import pic1 from '../../assets/1.jpg'


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

const callback = function (entries: any) {
  entries.forEach((entry: any) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

  return(
    <>
    <div className="bg-wild-sand-500 w-screen h-auto">
    <img src={picture} className='mx-auto mt-10'></img>
    <p id="my-text" className='absolute top-2/4 left-56 mt-12 text-left tracking-widest text-8xl text-gray-900 dark:text-white font-extrabold clip-path'>THE SOURCE <br></br>OF POWER</p>
    
    
    <div className='bg-zinc-800 rounded-3xl w-3/4 h-3/4 mx-auto mb-11'>
    <div className='mt-56 p-6'>
      <p className='text-center mt-3  text-5xl text-amber-500 dark:text-white font-extrabold'>WHY CHOOSE SHARK</p>
      <p className='text-gray-400 text-center mt-3'>In Shark, product quality is regarded as the life of the enterprise.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 h-auto mt-12 mb-28 js-show-on-scroll">
       <div>
        <img src={pic1} alt="" className='h-96 w-96 mx-auto rounded-lg'/>
        </div>
       <div className='text-center p-9'>
        <div className='text-left text-white mb-9 '>
        TECHNOLOGY INNOVATION <br></br>
        Shark always adhere to technology innovation as the core. Over the years, Shark people have been 
        concentrating on researching new materials and new processes for internal combustion engines, 
        electronic control technology and power products
        </div>
        <div className='text-left text-white mb-9'>
        PRODUCTION & QUALITY MANAGEMENT <br></br>
        The machining accuracy of components has an extraordinary impact on the product quality. Shark performs 
        calibration and precision machining on key engine components to ensure the precision of each component. 
        </div>
        <div className='text-white text-left mb-9'>
          
        BRAND BUILDING <br></br>
        Shark has always been based on the harmonious coexistence of customers, 
        society and environment. We constantly challenge and improve traditional technologies.
        </div>
       </div>
      
    </div>
    </div>
    </div>

   

    
    
     
      
    </>
  )
}