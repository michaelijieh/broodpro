import './App.css'
import logo from './logos/logo4.png'
import logoText from './logos/logo3.png'

function App() {

  return (
    <>
    <div className='logo'>
      <img className="logo-photo" src={logo} alt='logo'/>
      <h1 className='logo-text'>Broodpro</h1>
    </div>
    <body>
        <h1 className='hero-text'>Stay in</h1>
        <h1 className='hero-text'>school</h1>
        <h1 className='hero-text'>peeps</h1>
    </body>
    <p>And yes. We can help you stay</p>
    <h2 style={{color: 'grey'}}>Coming soon...</h2>
  
    </>
  )
}

export default App
