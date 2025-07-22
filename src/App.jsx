import  { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import  Loader  from './components/Loader.jsx'
import Page from './pages/Dashboard.jsx';


// Componentes lazy (carga perezosa)
const Home = lazy(() => import('./pages/Home.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Admin = lazy(() => import('./pages/Admin.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          } />
          <Route path="/dashboard" element={
            <Suspense fallback={<Loader />}>
              <Page />
            </Suspense>
          } />
          
          {/* Ruta protegida - usuarios normales */}
          <Route path="/" element={
           
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
          } />
          
          {/* Ruta protegida - solo admin */}
          <Route path="/admin" element={
              <Suspense fallback={<Loader />}>
                <Admin />
              </Suspense>
          } />
          
          {/* Manejo de errores */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;