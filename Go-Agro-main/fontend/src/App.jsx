import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar3 } from './components/navbar/NavBar3'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Complaint } from './pages/Complaint'
import ShowAll from './pages/ShowAll'
import CreateReview from './pages/CreateReview'
import ShowReview from './pages/ShowReview'
import EditReview from './pages/EditReview'
import DeleteReview from './pages/DeleteReview'
import Notification from './pages/Notification'
import FullNotification from './pages/FullNotification'
import SubmitPage from './pages/SubmitPage'
import DeletePage from './pages/DeletePage'
import CreateNotification from './pages/CreateNotification'


const App = () => {
  return (
    <div>
      <NavBar3 />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/signup' element={<SignUp />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/compaint' element={<Complaint />} />
        <Route path='/reviews/show' element={<ShowAll />} />        
        <Route path='/reviews/create/:ordernumber' element={<CreateReview />} />
        <Route path='/reviews/details/:id' element={<ShowReview />} />
        <Route path='/reviews/edit/:id' element={<EditReview />} />
        <Route path='/reviews/delete/:id' element={<DeleteReview />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/notifications/details/:id' element={<FullNotification />} />
        <Route path='/submit' element={<SubmitPage />} />
        <Route path='/DeletePage' element={<DeletePage />} />
        <Route path='/createNotifi' element={<CreateNotification />} />
      </Routes>
    </div>
  )
}

export default App
