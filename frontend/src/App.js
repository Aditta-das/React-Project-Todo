import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Route component={LoginPage} path='/' exact/>
          <PrivateRoute component={HomePage} path='/home'/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
