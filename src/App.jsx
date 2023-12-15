import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AnimeListPage from "./pages/AnimeListPage/AnimeListPage";
import AnimeDetailsPage from "./pages/AnimeDetailsPage/AnimeDetailsPage";
import MangaListPage from "./pages/MangaListPage/MangaListPage";
import MangaDetailsPage from "./pages/MangaDetailsPage/MangaDetailsPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
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

      <Footer className="sticky"/>
    </div>
  );
}

export default App;
