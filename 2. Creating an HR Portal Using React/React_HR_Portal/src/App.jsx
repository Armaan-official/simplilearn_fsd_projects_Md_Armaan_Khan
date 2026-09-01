import { Provider } from 'react-redux';
import store from './store/AppStore';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeProfile from './pages/EmployeeProfile';
import PageNotFound from './pages/PageNotFound'
import HRPortal from './components/hr-nested-components/HRPortal';
import SignUPForm from './components/employee-nested-components/SignUPForm'
import Dashboard from './pages/Dashboard';
import EmployeeDirectory from './pages/EmployeeDirectory';
import EmployeeHome from './pages/EmployeeHome';
import EmployeePortal from './components/employee-nested-components/EmployeePortal';
import LeaveApplication from './pages/LeaveApplication';
import LeaveManagement from './pages/LeaveManagement';


function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUPForm/>} />
        
        <Route 
          path='/hrportal' 
          element={
            <ProtectedRoute allowedRoles={['HR']}>
                <HRPortal/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to='dashboard' replace />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='employee-directory' element={<EmployeeDirectory />} />
          <Route path='manage-leave' element={<LeaveManagement />} />
        </Route>
        
          <Route 
            path='/employee/:id' 
            element={
              <ProtectedRoute allowedRoles={['Employee']}>
                  <EmployeePortal/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to='home' replace />} />
          <Route path='home' element={<EmployeeHome />} />
          <Route path='profile' element={<EmployeeProfile />} />
          <Route path='apply-for-leave' element={<LeaveApplication />} />
        </Route>

        <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App