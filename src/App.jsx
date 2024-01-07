import { useState, useEffect } from 'react'
import {Search} from './Components'
import {Loader} from './Components'
import {Navbar} from './Components'
import {About} from './Components'
import { ThemeProvider } from './context/theme'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState(`Tap the search button to get your results`)
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
    <div className='dark:bg-gray-800'>
      <Navbar />
      <div className="flex flex-col items-center  h-screen p-16 ">
      <Search
      text={text}
      onTextChange={(text) => setText(text)}
      setAnswer={setAnswer}
      setLoader={setLoader}
      />
      <Loader
      isLoading={isLoading}
      />
      <div className="flex flex-col bg-gray-100  border-2 border-dotted rounded-lg p-4 mt-10 items-center w-full h-56 overflow-auto">
      <p className="text-lg text-gray-700">{answer}</p>
      </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
