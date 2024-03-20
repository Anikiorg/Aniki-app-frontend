import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AnimeListPage from "./pages/AnimeListPage";
import AnimeDetailsPage from "./pages/AnimeDetailsPage";
import MangaListPage from "./pages/MangaListPage";
import MangaDetailsPage from "./pages/MangaDetailsPage";

import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<IsPrivate> <ProfilePage /> </IsPrivate>} />
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/animes" element={<AnimeListPage/>} />
        <Route path="/animes/:animeId" element={<AnimeDetailsPage/>} />
        <Route path="/manga" element={<MangaListPage/>}/>
        <Route path="/manga/:mangaId" element={<MangaDetailsPage/>} />
        <Route path="/users/:userName"/>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
