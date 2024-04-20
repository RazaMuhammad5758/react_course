import {Routes, Route} from 'wouter'
import './global.css'

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public Routes */}
            <Route path='/sign-in' element = {<SignInForm/>}/>



            {/* Private Routes */}
            <Route path='/index' element = {<Home/>}/>
        </Routes>
    </main>
  )
}

export default App
