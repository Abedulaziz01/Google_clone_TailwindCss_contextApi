import React, {createContext, useContext , useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-web-search1.p.rapidapi.com'

export const ResultContextProvider = ({children}) =>{
  
const [results, setresults]= useState([])
const [isLoading,SetIsLoading]= useState(false)
const[SearchTerm, SetSearchTerm]=useState('elon musk')

 const getResults = async (type) => {
       SetIsLoading(true);
       
       const response = await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '650a57799fmshd84a73c83384b9ap125e42jsn4f32733d56d1',
          'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
        }
       }); 
       const data = await response.json();

       console.log(data)
       if(type.includes('/news')){
        setresults(data.entries)
       }else if(type.includes('/image')){
        setresults(data.image_results)
       }
       else{
        setresults(data.results)
       }
       setresults(data)
       SetIsLoading(false)
 }
 return (
    <ResultContext.Provider value= {{getResults, results, SearchTerm,SetSearchTerm,isLoading}}>
                {children}
    </ResultContext.Provider>
  ) ;

}

export const useResultContext = () => useContext(ResultContext);

