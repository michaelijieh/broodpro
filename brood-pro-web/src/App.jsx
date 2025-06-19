import './App.css'
import logo from './logos/logo4.png'
import heroImage from './images/Gemini_Generated_Image_h25qwth25qwth25q-Photoroom 2.png'

function App() {

  const navButton =
    <div className='nav-hm-button-container'>
      <div className='nav-hm-button on'>
        <div className='nav-hm-line'></div>
        <div className='nav-hm-line'></div>
        <div className='nav-hm-line'></div>
      </div>
    </div>



  return (
    <>
        <div className='header'>
          <div className='logo'>
            <img className="logo-photo" src={logo} alt='logo'/>
            <h1 className='logo-text'>Broodpro</h1>
          </div>
          <nav className='nav-lists'>
            <p className='nav-item'>Apply now</p>
            {navButton}
          </nav>
        </div>
      <body>
          <div className='hero-container'>
            <div className='hero-section'>
              <div className='hero-text-container'>
                <h1 className='hero-text'>Stay in</h1>
                <h1 className='hero-text'>school</h1>
                <h1 className='hero-text'>peeps</h1>
              </div>
              <p className='hero-subtext'>And yes. We can help make that a reality.</p>
            </div>
            <div className='button-container'><p className='button-text'>Join the program</p></div>
          </div>
      </body>
      <div className='hero-image'><img src={heroImage} alt='graduants'/></div>
    {/* <h2 style={{color: 'grey'}}>Coming soon...</h2> */}
    </>
  )
}

export default App
