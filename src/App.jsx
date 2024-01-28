import { useState, useEffect } from 'react'
import {Search} from './Components'
import {Loader} from './Components'
import {Navbar} from './Components'
import {About} from './Components'
import { ThemeProvider } from './context/theme'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState(`Search anything!`)
  const [isLoading, setLoader]=useState(false)
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <main>
      <div className='main'>
        <div className='gradient' />
      </div>
    <div className='dark:bg-gray-800'>
      <Navbar />
      <div className="flex flex-col items-center  h-screen p-10 ">
      <h1 className='head_text'>
        Search the Internet using<br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc mb-5'>
      Whether you're tracking global events, industry trends, or local news, BrainSearch tailors its responses to your preferences
      </h2>
      <Search
      text={text}
      onTextChange={(text) => setText(text)}
      setAnswer={setAnswer}
      setLoader={setLoader}
      />
      <Loader
      isLoading={isLoading}
      />
      <div className="flex flex-col bg-white border-2 rounded-lg p-4 mt-10 items-center w-full h-40 overflow-auto">
      <p className="text-lg text-gray-700">{answer}</p>
      </div>
      </div>
    </div>
    </main>
    </ThemeProvider>
   
  )
}

export default App
