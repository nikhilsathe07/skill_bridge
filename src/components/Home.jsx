import '../styles/home.css'
import Home_hero from './home_hero'
import Home_learn from './home_learned'
import Home_trend from './home_trend'
import Partners from './home_trust'

const Home=()=>{

    return(
        <>
            
          <div className='heroImg'>
              <h1>Preserving Skills, Empowering Generations</h1>
          </div>
          <Home_hero/>
          <Home_learn/>
          <Home_trend/>
          <Partners/>
        </>
    )
}

export default Home