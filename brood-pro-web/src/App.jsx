import './App.css'
import logo from './logos/logo1.png'
import logoText from './logos/logo3.png'

function App() {

  return (
    <>
    <div className='logo'>
      <img className='logo photo' src={logo} alt='logo'/>
      {/* <img src={logoText} alt='logo text'/>  */}

    </div>
    <p>Platform for student financial aid</p>
    <h2 style={{color: 'grey'}}>Coming soon...</h2>
  
    </>
  )
}

export default App
