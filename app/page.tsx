import Navbar from './components/main/Navbar/Navbar'
import Era from './components/main/Era'
import Possibilities from './components/main/Possibilities/Possibilities'
import Ticket from './components/main/Ticket/Ticket'
import Cuisine from './components/main/Cuisine'
import Experience from './components/main/Experience/Experience'
import Place from './components/main/Place'
import Footer from './components/main/Footer'
import "./page.css";

export default function Home() {
  return (
    <div className=''>
      <div className='topDiv-wrap'>
        <div className="topDiv">
          <Navbar />
          {/* <Era /> */}
        </div>
      </div>
      <div className='midDiv'>
        <Possibilities />
        <Ticket />
        <Cuisine />
        <Experience />
        <Place />
        <Footer />
      </div>
    </div>

  )
}