import {Routes, Route} from 'react-router-dom'
import './global.css'
import {Home} from './_root/pages'
import SignInform from './_auth/forms/SignInform';
import SignUpform from './_auth/forms/SignUpform';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public Routes */}
            <Route path="/sign-in" element={< SignInform />}/>
            <Route path="/sign-up" element={< SignUpform />}/>



            {/* Private Routes */}
            <Route path='/index' element = {<Home/>}/>
        </Routes>
    </main>
  )
}

export default App
