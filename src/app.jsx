
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import { CanvasProvider } from './Contexts/canvas';
import Exhibits from './Pages/Exhibits';
import ExhibitsAlbum from './Pages/Exhibits/Album';
import ExhibitsFavorites from './Pages/Exhibits/Favorites';
import ExhibitsBooks from './Pages/Exhibits/Books';
import ExhibitsVideo from './Pages/Exhibits/Video';
import GalleryMonuments from './Pages/Gallery/Monuments';
import GalleryMovies from './Pages/Gallery/Movies';
import GalleryPictures from './Pages/Gallery/Pictures';
import GalleryBooks from './Pages/Gallery/Books';
import Screensaver from './Pages/Screensaver';
import Test from './Pages/Test';
import Gallery from './Pages/Gallery';
import Instruction from './Pages/Instruction';
import Leningrad from './Pages/Leningrad';
import LeningradBlock from './Pages/Leningrad/Block';

import Before from './Pages/Biography/Before';
import BeforeBlock from './Pages/Biography/Before/Block';

import Victory from './Pages/Biography/Victory';
import VictoryBlock from './Pages/Biography/Victory/Block';

import War from './Pages/Biography/War';
import WarBlock from './Pages/Biography/War/Block';

import Youth from './Pages/Biography/Youth';
import YouthBlock from './Pages/Biography/Youth/Block';

const App = () => {
  return (
    <HashRouter>
      <CanvasProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Screensaver />} />
            <Route path="test" element={<Test />} />
            <Route path="instruction" element={<Instruction />} />
            <Route path="exhibits" element={<Exhibits />} />
            <Route path="exhibits/album" element={<ExhibitsAlbum />} />
            <Route path="exhibits/favorites" element={<ExhibitsFavorites />} />
            <Route path="exhibits/books" element={<ExhibitsBooks />} />
            <Route path="exhibits/video" element={<ExhibitsVideo />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="gallery/books" element={<GalleryBooks />} />
            <Route path="gallery/monuments" element={<GalleryMonuments />} />
            <Route path="gallery/movies" element={<GalleryMovies />} />
            <Route path="gallery/pictures" element={<GalleryPictures />} />


            <Route path="biography/youth" element={<Youth />} />
            <Route path="biography/youth/:chapter/:block" element={<YouthBlock />} />

            <Route path="biography/before-war" element={<Before />} />
            <Route path="biography/before-war/:chapter/:block" element={<BeforeBlock />} />

            <Route path="biography/war" element={<War />} />
            <Route path="biography/war/:chapter/:block" element={<WarBlock />} />

            <Route path="biography/victory" element={<Victory />} />
            <Route path="biography/victory/:chapter/:block" element={<VictoryBlock />} />


            <Route path="leningrad" element={<Leningrad />} />
            <Route path="leningrad/:chapter/:block" element={<LeningradBlock />} />
          </Route>
        </Routes>
      </CanvasProvider>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);