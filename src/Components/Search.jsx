import React from 'react'

function Search({
  text,
  onTextChange,
  setAnswer,
  setLoader
})
{ 
  // const searchfunc= ()=>
  // {
  //   console.log("Text=",text)
    
  // }
  const searchfunc = async () => {
    const endpoint = 'https://internet-search.onrender.com/fetch';
    const payload = {
      query: text
    };

    try {
      setLoader(true);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setLoader(false);
      setAnswer(data.response)
      // Handle the API response as needed
    } catch (error) {
      console.error('Error:', error);
      setLoader(false);
    }
  };
  return (
    <div className=' w-2/3'>
         <form
         
         onSubmit={(e) => {
          e.preventDefault();
          searchfunc()
         }}>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"
         id="default-search"  
         value={text} 
         onChange={(e) => onTextChange && onTextChange(e.target.value)}
         class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
        <button type="submit"  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    </form>
    </div>
  )
}

export default Search;