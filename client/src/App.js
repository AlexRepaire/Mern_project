import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/css/App.css'
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import NotFound from './components/layout/NotFound';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <section className='container'>
        <Alert />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/private' element={<PrivateRoute />}>
            <Route path='/private/dashboard' element={<Dashboard />} />
            <Route path='/private/create-profile' element={<CreateProfile />} />
            <Route path='/private/edit-profile' element={<EditProfile />} />
            <Route path='/private/add-experience' element={<AddExperience />} />
            <Route path='/private/add-education' element={<AddEducation />} />
            <Route path='/private/posts' element={<Posts />} />
            <Route path='/private/posts/:id' element={<Post />} />
          </Route>
        </Routes>
      </section>
    </Provider>
  )
};
export default App;
