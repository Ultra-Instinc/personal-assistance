import Cortana from '../assets/cortana.png'
import Alexa from '../assets/alexa.png'
import Siri from '../assets/siri.png'

const Experience = () => {

    const technologies=[
        {
            id:1,
            imgData:Alexa,
            name:'Alexa',
            style:'shadow-blue-500 text-blue-500'
        },
        {
            id:2,
            imgData:Cortana,
            name:'Cortana',
            style:'shadow-gray-400 text-gray-400'
        },
        {
            id:3,
            imgData:Siri,
            name:'Siri',
            style:'shadow-pink-500 text-pink-500'
        },
        
        
    ]


    return ( 
    <div name='experience' className='bg-gradient-to-b from-gray-800 via-black to-black w-full lg:h-screen'>
        
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col  justify-around w-full text-white'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-6xl font-signature font-bold   p-2 inline'>My Favourite Assistants</p>
            </div>
            <div className=' w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 sm:gap-5 md:gap-10 lg:gap-15 text-center py-8 px-12 sm:px-0'>

                {technologies.map(({id,imgData,name,style})=>{
                    return (
                        <div key={id} className={` flex flex-col justify-between shadow-md  duration-500 py-2 rounded-lg ${style}`}>
                            <img src={imgData} alt="random" className=' hover:scale-105 duration-300 rounded-t-lg  w-[100%] h-[65%] mx-auto' />
                            <div className='flex h-full justify-center items-center'>
                                <p className=' font-bold text-4xl font-signature mt-4'>{name}</p>
                            </div>
                </div>
                    )
                })}


                
            </div>
        </div>
        
    </div> );
}
 
export default Experience;