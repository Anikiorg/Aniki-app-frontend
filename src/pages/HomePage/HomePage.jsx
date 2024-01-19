import "./HomePage.css";
import {Link} from "react-router-dom"
import chainsaw from "../../assets/chainsaw.jpg"
import jujutsu from "../../assets/jujutsu.jpg"
import parasite from "../../assets/parasite.jpg"
import spy from "../../assets/spy.jpg"


function HomePage() {
  return (
      <div className="home-page">
        
      <div className="carousel w-4/6"> 
        <div id="slide1" className="carousel-item relative w-full">
        <img src={chainsaw} viewBox="0 0 24 24" alt="logo" className="w-full"/>
          {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full"/> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <a href="#slide4" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </a>
            <a href="#slide2" className="btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"> <path d="m9 18 6-6-6-6" /> </svg>
            </a>

          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
        <img src={spy} viewBox="0 0 24 24" alt="logo" className=""/>
          {/* <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full"/> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <a href="#slide1" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </a>
            <a href="#slide3" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </a>

          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
        <img src={jujutsu} viewBox="0 0 24 24" alt="logo" className=""/>

          {/* <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full"/> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <a href="#slide2" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </a>
            <a href="#slide4" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </a>

          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
        <img src={parasite} viewBox="0 0 24 24" alt="logo" className=""/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <a href="#slide3" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </a>
            <a href="#slide1" className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </a>

          </div>
        </div>
      </div>

      <Link to="/browse">
        <button className="btn text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          Browse
          </button>
      </Link>

      </div>
  );
}

export default HomePage;
