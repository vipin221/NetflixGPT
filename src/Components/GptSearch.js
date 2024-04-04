import { Search } from 'lucide-react'
import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearch = () => {
    const langKey = useSelector(store => store.languages.language);
  return (
    <div className='w-5/12 flex justify-center '>
          <form onSubmit={(e) => e.preventDefault()} className='grid grid-flow-col w-full border rounded-lg overflow-hidden shadow-md shadow-gray-600'>
              <input type='text' className='col-span-9 px-3 py-2 focus:outline-blue-600 rounded-l-lg' placeholder={lang[langKey].gptPlaceHolder}/>
              <button className='col-span-3 flex items-center justify-center gap-2 font-semibold text-white  bg-red-600'> {lang[langKey].search}<Search/></button>
    </form>
      
    </div>
  )
}

export default GptSearch
