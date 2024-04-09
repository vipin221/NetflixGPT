import { Search } from 'lucide-react'
import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'
import { options } from '../utils/constant'
import {useDispatch} from 'react-redux';
import { addGptMovieSearchResult } from '../utils/gptSlice'

const GptSearch = () => {
  const searchRef = useRef();

  const dispatch = useDispatch();

  // const findMoviesFromTmDb(movieName)
  
  const handleSearch =  async () =>{

    const findMoviesFromTmDb = async (movieName) =>{
      const moviedata = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&language=en-US&page=1', options);
      const json = await moviedata.json();
      return json.results;
    
    }
    
    const gptquery = "Act as a Movies Suggestion Bot and Give me Name of Five " + searchRef.current.value
     +" movies seperated by commas always give suggestion like the following example ahead whithout any bulletpoint of  numbering example: gadar,koi mil gya,kesari,krish,love"

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptquery }],
      model: 'gpt-3.5-turbo',

    });
    const gptmovieString = gptResults.choices[0]?.message?.content;
    console.log("gptmovieString", gptmovieString);

   const  moviesArray = gptmovieString.split(",");

    const PromiseArray = moviesArray.map(movie => findMoviesFromTmDb(movie));

    const tmdbResult = await Promise.all(PromiseArray);
    dispatch(addGptMovieSearchResult({ movieName: moviesArray, movieResult: tmdbResult }));
    

  }
  
  const langKey = useSelector(store => store.languages.language);
  return (
    <div className=' md:w-5/12 flex justify-center mt-5 '>
      <form onSubmit={(e) => e.preventDefault()} className='grid grid-flow-col w-full border rounded-lg overflow-hidden shadow-md shadow-gray-600'>
        <input type='text'
          ref={searchRef}
          className='col-span-9 px-3 py-2 focus:outline-blue-600 rounded-l-lg'
          placeholder={lang[langKey].gptPlaceHolder} />
        <button className='col-span-3 flex items-center justify-center gap-2 font-semibold text-white  bg-red-600' onClick={handleSearch}> {lang[langKey].search}<Search /></button>
      </form>

    </div>
  )
}

export default GptSearch
