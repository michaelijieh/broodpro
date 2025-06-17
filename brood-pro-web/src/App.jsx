import './App.css'
import logo from './logos/logo4.png'
import logoText from './logos/logo3.png'

function App() {

  return (
    <>
    <div className='logo-text'>
      <img src={logo} alt='logo'/>
      <h1>Broodpro</h1>
    </div>
    <p>Platform for student financial aid</p>
    <h2 style={{color: 'grey'}}>Coming soon...</h2>
  
    </>
  )
}

export default App
