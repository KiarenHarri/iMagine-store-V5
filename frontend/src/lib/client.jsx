// CLIENT — API calls + auth session state for the whole frontend.
import { products, accessories } from "./data";
import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

// ---- API calls ----
const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const submitProductQuote = (data) => axios.post(`${API}/quotes/product`, data, { withCredentials: true });
export const submitRepairQuote = (data) => axios.post(`${API}/quotes/repair`, data, { withCredentials: true });
export const lookupRepair = (ref) => axios.get(`${API}/quotes/repair/${encodeURIComponent(ref)}`);
export const submitContact = (data) => axios.post(`${API}/contact`, data);

// ---- Auth ----
const AuthContext = createContext({ user: null, loading: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch(`${API}/auth/me`, { credentials: "include" });
      if (!res.ok) throw new Error("Not authenticated");
      setUser(await res.json());
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const logout = async () => {
    await fetch(`${API}/auth/logout`, { method: "POST", credentials: "include" });
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, setUser, loading, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export const formatApiError = (detail) => {
  if (detail == null) return "Something went wrong. Please try again.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((e) => (e && typeof e.msg === "string" ? e.msg : JSON.stringify(e))).join(" ");
  return String(detail);
};

export const passwordAuth = async (mode, payload) => {
  const res = await fetch(`${API}/auth/${mode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(formatApiError(data.detail));
  return data;
};

export const startGoogleLogin = () => {
  window.location.href = `${API}/auth/google`;
};


// ---- Catalogue (admin-managed photos, custom items, hidden items) ----
const EMPTY_CATALOGUE = { images: {}, items: [], hidden: [] };
let catalogueCache = null;
const catalogueSubs = new Set();
const notifyCatalogue = () => catalogueSubs.forEach((fn) => fn(catalogueCache || EMPTY_CATALOGUE));

export const refreshCatalogueImages = async () => {
  try {
    const res = await fetch(`${API}/catalogue-images`);
    catalogueCache = res.ok ? { ...EMPTY_CATALOGUE, ...(await res.json()) } : EMPTY_CATALOGUE;
  } catch {
    catalogueCache = catalogueCache || EMPTY_CATALOGUE;
  }
  notifyCatalogue();
};

export function useCatalogue() {
  const [cat, setCat] = useState(catalogueCache || EMPTY_CATALOGUE);
  useEffect(() => {
    const fn = (c) => setCat(c);
    catalogueSubs.add(fn);
    if (!catalogueCache) refreshCatalogueImages();
    return () => catalogueSubs.delete(fn);
  }, []);
  return cat;
}

export function useCatalogueImages() {
  return useCatalogue().images;
}

// Shop lists: static data.js items minus admin-hidden, plus admin-added customs
export function useShopItems() {
  const cat = useCatalogue();
  const customProducts = cat.items
    .filter((i) => i.kind === "product")
    .map((i) => ({ id: i.slot.replace("product:", ""), name: i.name, category: i.section || "iphone", tagline: i.tagline, image: i.image, specs: i.specs || [] }));
  const customAccessories = cat.items
    .filter((i) => i.kind === "accessory")
    .map((i) => ({ id: i.slot.replace("accessory:", ""), name: i.name, tagline: i.tagline, group: i.section || "Extras", image: i.image }));
  return {
    products: [...products.filter((p) => !cat.hidden.includes(`product:${p.id}`)), ...customProducts],
    accessories: [...accessories.filter((a) => !cat.hidden.includes(`accessory:${a.id}`)), ...customAccessories],
  };
}
