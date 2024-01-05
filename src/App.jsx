import { useState } from 'react'
import {Search} from './Components'
import {Loader} from './Components'
import {Navbar} from './Components'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState(`Tap the search button to get your results`)
  const [isLoading, setLoader]=useState(false)
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center  h-screen p-16">
      <Search
      text={text}
      onTextChange={(text) => setText(text)}
      setAnswer={setAnswer}
      setLoader={setLoader}
      />
      <Loader
      isLoading={isLoading}
      />
      <div className="flex flex-col bg-gray-100 border-dotted border-2 border-gray-300 rounded-lg p-4 mt-10 items-center w-full h-56 overflow-auto">
      <p className="text-lg text-gray-700">{answer}</p>
      </div>
      </div>
    </div>
    
  )
}

export default App
