import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import HomeScreen from './screens/HomeScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Loader from './screens/Loader';
import ProfileScreen from './screens/ProfileScreen';
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // logged in
        // console.log(user);
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }
      else{
        // logged out
        dispatch(logout())
      }
    })

    return ()=>{
      unsubscribe();
    };

  }, [dispatch])

  const {user,isLoading} = useSelector(selectUser);
  console.log(user,isLoading);
  if(isLoading){
    return <Loader/>
  }
  return (
    <div className="app">

      {/* <HomeScreen/> */}
      <BrowserRouter>
        {
          !user ? (<LoginPage />)
            :
            (
              <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/profile' element={<ProfileScreen />}></Route>
              </Routes>
            )
        }

      </BrowserRouter>

    </div>
  );
}

export default App;
