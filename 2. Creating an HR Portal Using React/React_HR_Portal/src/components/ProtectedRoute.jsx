import { Navigate } from "react-router-dom";


function ProtectedRoute({children, allowedRoles}) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');
    const employeeId = localStorage.getItem('employeeId');

    if (!isLoggedIn) {
        return <Navigate to='/' replace />
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        if (role === 'HR') {
            return <Navigate to='/hrportal/dashboard' replace />;
        }
        if (role === 'Employee') {
            return <Navigate to={employeeId ? `/employee/${employeeId}/home` : '/'} replace />;
        }

    }

  return children;
}

export default ProtectedRoute;