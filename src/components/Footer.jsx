import "../styles/components/Footer.css";

import AnikiLogo from "../assets/AnikiLogo.png";

function Footer() {
  return (
    <footer>
      <div>
        <img className="logo-img" src={AnikiLogo} alt="logo" />
      </div>

      <p className="copy-right">Copyright © 2023</p>
   
      <div>
        <a
        className="linkedIn"
          href="https://www.linkedin.com/in/gusfonte99/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 1 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <p className="name">Gustavo</p>
        </a>

        <a className="linkedIn" href="https://www.linkedin.com/in/zohra-boukhatem-3a3783238/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 1 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          <p className="name">Zohra</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
