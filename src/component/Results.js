import { useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../context/ResultContextProvider';

export const Results = () => {
  const {results, SearchTerm,isLoading,getResults} = useResultContext();
  const location = useLocation();
       
    useEffect(()=>{
      if(SearchTerm){
        if(location.pathname ==='/videos'){
          getResults(`/?query=${SearchTerm} videos`);
        }else{
          getResults(`/?query=${location.pathname}=${SearchTerm}&limit=20`)
        }
      }
     
    },[SearchTerm,location.pathname])
  ///?query=elonmusk&limit=20'

    console.log(location.pathname)
     
    switch (location.pathname) {
      case '/search':
       return ( 
           <div className=' flex flex-wrap justify-between space-y-6 sm:px-56'>
             {results?.results?.map(({title,url},index)=>(
              <div key={index} className='md:w-2/5 w-full'>
                 <a href={url}>
                  <p className='text-sm'>
                     {url.length > 30 ? url.substring(0,30): url}
                   </p>
                   <p className='text:lg hover:underline dark:text-blue-400 text-blue-700'>
                       {title}
                   </p>
                   </a> 
               </div>
             ))}
           </div>
       )
       case '/images':

        return (
          <div className='flex flex-wrap justify-center items-center'>
            {results?.results?.map(({image,url:{href ,title}}, index)=>(
              <a className='sm:p-3 p-5' href={href} key={index}>
                  <p className='w-36 break-words text-sm mt-2'>
                  <img src={image?.src} alt={title} loading='lazy'/>
                  </p>
              </a>
            ))}

          </div>
        )
        case '/news':
          
          case '/videos':
            return 'search'
    
      default:
        break;
    }
}
