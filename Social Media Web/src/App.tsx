import {Routes, Route} from 'react-router-dom'
import './global.css'
import {Home} from './_root/pages'
import SignInform from './_auth/forms/SignInform';
import SignUpform from './_auth/forms/SignUpform';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';


const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout/>} >
                <Route path="/sign-in" element={< SignInform />}/>
                <Route path="/sign-up" element={< SignUpform />}/>

            </Route>




            {/* Private Routes */}
            
            <Route element={<RootLayout/>}>

            <Route index element = {<Home/>}/>

            </Route>
        </Routes>
    </main>
  )
}

export default App
