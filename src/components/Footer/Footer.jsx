import "./Footer.css"

import AnikiLogo from "../../assets/AnikiLogo.png"

function Footer () {
    
    return (
        <footer className="footer gap-20 justify-around content-around items-center p-4 bg-neutral text-neutral-content">

        <aside className="items-center grid-flow-col">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
        <g transform="translate(-10.24,-10.24) scale(1.08,1.08)"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="translate(0,9.35357) scale(5.33333,5.33333)"><path d="M36,18c2,2 5,7 5,16c0,3.488 -4,3 -4,3z" fill="#616161"></path><path d="M12,18c-2,2 -5,7 -5,16c0,3.488 4,3 4,3z" fill="#616161"></path><path d="M31.467,9c-2.8,-2 -5.534,-2 -7.467,-2c-1.933,0 -4.667,0 -7.467,2c-2.8,2 -6.533,13 -6.533,21h14h14c0,-8 -3.733,-19 -6.533,-21z" fill="#616161"></path><path d="M33,46h-9v-6c0,0 11.495,-12.493 15,-10c0,11 -6,16 -6,16z" fill="#616161"></path><path d="M15,46h9v-6c0,0 -11.495,-12.493 -15,-10c0,11 6,16 6,16z" fill="#616161"></path><path d="M24,46c-8.271,0 -15,-6.626 -15,-16c0,-9.374 6.729,-17 15,-17c8.271,0 15,7.626 15,17c0,9.374 -6.729,16 -15,16z" fill="#616161"></path><ellipse cx="24" cy="31" rx="13" ry="14" fill="#ffe082"></ellipse><circle cx="18.5" cy="11.5" r="1.5" fill="#fafafa"></circle><circle cx="29.5" cy="11.5" r="1.5" fill="#fafafa"></circle><path d="M32.215,13.107l7.542,-1.053l0.086,0.492l-7.458,1.547z" fill="#424242"></path><path d="M32.975,14.501l7.912,-0.151l0.026,0.5l-7.888,0.649z" fill="#424242"></path><path d="M33.571,16.005l6.964,1.248l-0.07,0.494l-7.036,-0.752z" fill="#424242"></path><path d="M15.615,14.093l-7.458,-1.547l0.086,-0.492l7.542,1.053z" fill="#424242"></path><path d="M14.975,15.499l-7.888,-0.649l0.026,-0.5l7.912,0.151z" fill="#424242"></path><path d="M14.571,16.995l-7.036,0.752l-0.07,-0.494l6.964,-1.248z" fill="#424242"></path><path d="M25.5,12.5c0,0.276 -0.672,0.8 -1.5,0.8c-0.828,0 -1.5,-0.524 -1.5,-0.8c0,-0.276 0.672,-0.5 1.5,-0.5c0.828,0 1.5,0.224 1.5,0.5z" fill="#212121"></path><circle cx="18.5" cy="11.5" r="0.75" fill="#212121"></circle><circle cx="29.5" cy="11.5" r="0.75" fill="#212121"></circle><path d="M21.27,7.812l-0.512,-1.469c1.003,-2.983 -1.936,-6.434 -2.758,-6.243c-0.83,0.193 -1.717,5.388 0.312,6.819l0.297,1.661z" fill="#616161"></path><path d="M26.73,7.812l0.512,-1.469c-1.003,-2.983 1.936,-6.434 2.758,-6.243c0.83,0.193 1.717,5.388 -0.313,6.819l-0.296,1.661z" fill="#616161"></path><path d="M26,21.869c0,0.516 -0.895,-0.654 -2,-0.654c-1.105,0 -2,1.17 -2,0.654c0,-0.516 0.895,-1.869 2,-1.869c1.105,0 2,1.353 2,1.869z" fill="#616161"></path><path d="M23.2,25.869c0,0.516 -0.895,-0.654 -2,-0.654c-1.105,0 -2,1.17 -2,0.654c0,-0.516 0.895,-1.869 2,-1.869c1.105,0 2,1.353 2,1.869z" fill="#616161"></path><path d="M24.8,25.869c0,0.516 0.895,-0.654 2,-0.654c1.105,0 2,1.17 2,0.654c0,-0.516 -0.895,-1.869 -2,-1.869c-1.105,0 -2,1.353 -2,1.869z" fill="#616161"></path><path d="M30.03,27.088c-0.088,0.508 0.882,-0.543 1.97,-0.355c1.088,0.188 1.883,1.545 1.971,1.036c0.088,-0.508 -0.86,-2.045 -1.948,-2.233c-1.088,-0.188 -1.905,1.044 -1.993,1.552z" fill="#616161"></path><path d="M17.97,27.088c0.088,0.508 -0.882,-0.543 -1.97,-0.355c-1.088,0.188 -1.883,1.545 -1.971,1.036c-0.088,-0.508 0.86,-2.045 1.948,-2.233c1.088,-0.188 1.905,1.044 1.993,1.552z" fill="#616161"></path><path d="M31.935,23.63c-0.139,0.535 -0.788,-0.927 -1.857,-1.205c-1.069,-0.278 -2.153,0.735 -2.015,0.201c0.139,-0.535 0.981,-1.812 2.051,-1.534c1.069,0.277 1.959,2.004 1.821,2.538z" fill="#616161"></path><path d="M16.065,23.63c0.139,0.535 0.788,-0.927 1.857,-1.205c1.069,-0.278 2.153,0.735 2.015,0.201c-0.139,-0.535 -0.981,-1.812 -2.051,-1.534c-1.069,0.277 -1.959,2.004 -1.821,2.538z" fill="#616161"></path></g></g></g>
        </svg>
          <h1 className=" text-6xl">Aniki</h1>
          {/* <p>Copyright © 2023</p> */}
        </aside> 

        <nav className="flex-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/gustavo-marques-da-fonte-432347247/" className="flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <p className=" text-xl leading-none">Gustavo</p>
          </a>

          <a href="https://www.linkedin.com/in/zohra-boukhatem-3a3783238/" className="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <p className=" text-xl leading-none">Zohra</p>
          </a>

        </nav>
      </footer>
    )
}

export default Footer