import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Lazy load the components
const Auth = lazy(() => import('./pages/auth'));
const Chat = lazy(() => import('./pages/chat'));
const Profile = lazy(() => import('./pages/profile'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Navigate to='/auth' replace />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
