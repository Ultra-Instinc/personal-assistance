import Cortana from '../assets/cortana.png'
import Alexa from '../assets/alexa.png'
import Siri from '../assets/siri.png'

const Experience = () => {

    const technologies=[
        {
            id:1,
            imgData:Alexa,
            name:'Alexa',
            style:'shadow-blue-500 text-blue-500',
            handle:'Handle @alexa99'
        },
        {
            id:2,
            imgData:Cortana,
            name:'Cortana',
            style:'shadow-gray-400 text-gray-400',
            handle:'Handle @cortana32'
        },
        {
            id:3,
            imgData:Siri,
            name:'Siri',
            style:'shadow-pink-500 text-pink-500',
            handle:'handle@siri01'
        },
        
        
    ]


    return ( 
    <div name='experience' className='bg-gradient-to-b z-10 from-gray-800 via-black to-black  lg:h-screen'>
        
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col  justify-around  h-full text-white'>
            <div className='flex flex-col justify-center over items-center '>
                <div className=' overflow-hidden'>
                <div className=' text-6xl font-signature text-transparent font-bold  p-2 overflow-hidden z-10 '> 
                    <span class="   text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        My Favourite Assistants
                    </span>
                </div>
               
                
                </div>
            </div>
            <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-5 md:gap-10 lg:gap-15 text-center py-8 px-12 sm:px-0'>

                {technologies.map(({id,imgData,name,style,handle})=>{
                    return (
                        <div key={id} className={` flex flex-col justify-between overflow-hidden hover:animate-pulse shadow-md  duration-500 py-2 rounded-lg ${style}`}>
                            <img src={imgData} alt="random" className=' hover:scale-105 duration-300 rounded-t-lg  w-[100%] h-[65%] mx-auto' />
                            <div className='flex h-full justify-center items-center flex-col'>
                                <p className=' font-bold text-4xl font-signature mt-4'>{name}</p>
                                <p>{handle}</p>
                            </div>
                </div>
                    )
                })}


                
            </div>
        </div>
        
    </div> );
}
 
export default Experience;