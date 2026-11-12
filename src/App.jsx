import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Wardrobe from "./pages/Wardrobe";
import OutfitStudio from "./pages/OutfitStudio";
import Favorites from "./pages/Favorites";

import ClothingForm from "./components/ClothingForm";
import initialClothes from "./data/initialClothes";

import "./styles/global.css";
import "./styles/layout.css";

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

function getStorage(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

function AppLayout() {
  const [items, setItems] = useState(() =>
    getStorage("fitly-items", initialClothes),
  );

  const [outfits, setOutfits] = useState(() => getStorage("fitly-outfits", []));

  const [showForm, setShowForm] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();

  const page = PAGE_META[location.pathname] || PAGE_META["/"];

  // Save wardrobe data
  useEffect(() => {
    localStorage.setItem("fitly-items", JSON.stringify(items));
  }, [items]);

  // Save outfits
  useEffect(() => {
    localStorage.setItem("fitly-outfits", JSON.stringify(outfits));
  }, [outfits]);

  // Add clothing
  const handleAdd = (newItem) => {
    const item = {
      ...newItem,
      id: `item-${Date.now()}`,
      favorite: false,
    };

    setItems((prev) => [item, ...prev]);
    setShowForm(false);
  };

  // Delete clothing
  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Toggle favorite
  const handleToggleFavorite = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item,
      ),
    );
  };

  // Save outfit
  const handleSaveOutfit = (outfitData) => {
    const outfit = {
      ...outfitData,
      id: `outfit-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    setOutfits((prev) => [outfit, ...prev]);
  };

  // Delete outfit
  const handleDeleteOutfit = (id) => {
    setOutfits((prev) => prev.filter((outfit) => outfit.id !== id));
  };

  return (
    <>
      <div className='app-shell'>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className='main-area'>
          <Header
            title={page.title}
            subtitle={page.subtitle}
            onMenuClick={() => setSidebarOpen((prev) => !prev)}
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
                  />
                }
              />

              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </main>
        </div>
      </div>

      {showForm && (
        <div className='modal-backdrop'>
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
