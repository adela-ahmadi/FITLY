import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ClothingForm from "./components/ClothingForm";

import Dashboard from "./pages/Dashboard";
import Wardrobe from "./pages/Wardrobe";
import OutfitStudio from "./pages/OutfitStudio";
import Favorites from "./pages/Favorites";

import initialClothes from "./data/initialClothes";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/fitly-editorial.css";

const PAGE_META = {
  "/": {
    title: "Your Style, Organized",
    subtitle: "Manage your wardrobe and discover your style.",
  },
  "/wardrobe": {
    title: "My Wardrobe",
    subtitle: "Everything you own, all in one place.",
  },
  "/outfit-studio": {
    title: "Outfit Studio",
    subtitle: "Create combinations for every occasion.",
  },
  "/favorites": {
    title: "Your Favorites",
    subtitle: "Your favorite clothes and outfits.",
  },
};

function readStorage(key, fallback) {
  try {
    const saved = window.localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // The UI remains usable if browser storage is unavailable or full.
  }
}

function AppLayout() {
  const [items, setItems] = useState(() =>
    readStorage("fitly-items", initialClothes),
  );
  const [outfits, setOutfits] = useState(() =>
    readStorage("fitly-outfits", []),
  );
  const [showForm, setShowForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const page = PAGE_META[location.pathname] || PAGE_META["/"];

  useEffect(() => {
    writeStorage("fitly-items", items);
  }, [items]);

  useEffect(() => {
    writeStorage("fitly-outfits", outfits);
  }, [outfits]);

  const handleAdd = (newItem) => {
    const item = {
      ...newItem,
      id: `item-${Date.now()}`,
      createdAt: new Date().toISOString(),
      favorite: false,
    };

    setItems((current) => [item, ...current]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const handleToggleFavorite = (id) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      ),
    );
  };

  const handleSaveOutfit = (outfitData) => {
    const outfit = {
      ...outfitData,
      id: `outfit-${Date.now()}`,
      createdAt: new Date().toISOString(),
      favorite: false,
    };

    setOutfits((current) => [outfit, ...current]);
  };

  const handleDeleteOutfit = (id) => {
    setOutfits((current) => current.filter((outfit) => outfit.id !== id));
  };

  const handleToggleOutfitFavorite = (id) => {
    setOutfits((current) =>
      current.map((outfit) =>
        outfit.id === id ? { ...outfit, favorite: !outfit.favorite } : outfit,
      ),
    );
  };

  return (
    <>
      <div className='app-shell'>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className='main-area'>
          <Header
            title={page.title}
            subtitle={page.subtitle}
            onMenuClick={() => setSidebarOpen((current) => !current)}
          />

          <main className='page-content'>
            <Routes>
              <Route
                path='/'
                element={
                  <Dashboard
                    items={items}
                    outfits={outfits}
                    onAddClick={() => setShowForm(true)}
                    onDelete={handleDelete}
                    onToggleFavorite={handleToggleFavorite}
                  />
                }
              />
              <Route
                path='/wardrobe'
                element={
                  <Wardrobe
                    items={items}
                    onAddClick={() => setShowForm(true)}
                    onDelete={handleDelete}
                    onToggleFavorite={handleToggleFavorite}
                  />
                }
              />
              <Route
                path='/outfit-studio'
                element={
                  <OutfitStudio
                    items={items}
                    savedOutfits={outfits}
                    onSaveOutfit={handleSaveOutfit}
                    onDeleteOutfit={handleDeleteOutfit}
                    onToggleOutfitFavorite={handleToggleOutfitFavorite}
                  />
                }
              />
              <Route
                path='/favorites'
                element={
                  <Favorites
                    items={items}
                    outfits={outfits}
                    onDelete={handleDelete}
                    onToggleFavorite={handleToggleFavorite}
                    onDeleteOutfit={handleDeleteOutfit}
                    onToggleOutfitFavorite={handleToggleOutfitFavorite}
                  />
                }
              />
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>

      {showForm && (
        <div
          className='modal-backdrop'
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowForm(false);
          }}>
          <ClothingForm onAdd={handleAdd} onClose={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

