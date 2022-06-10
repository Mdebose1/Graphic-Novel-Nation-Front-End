import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './views/Home'
import { Popular } from './views/Popular'
import { Profile } from './views/Profile'
import { Genre } from './views/Genre'
import { Shop } from './views/Shop'
import { Signin } from './views/Signin'
import { Cart } from './views/Cart'
import { Items } from './views/Items'




export const App = () => {
  return (
  <>
    <header>
      <Navbar />
    </header>

    <main className="container mt-4">
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route exact path='/users/profile' element={ <Profile /> } />
        <Route exact path='/signin' element={ <Signin /> } />
        <Route exact path='/genre' element={ <Genre /> } />
        <Route exact path='/popular' element={ <Popular /> } />
        <Route exact path='/shop' element={ <Shop /> } />
        <Route exact path='/genre' element={ <Genre /> } />
        <Route exact path='/cart' element={ <Cart /> } />
        <Route exact path='/items' element={ <Items /> } />


      </Routes>
    </main>

    <footer>
      
    </footer>
  </>

  )
}

