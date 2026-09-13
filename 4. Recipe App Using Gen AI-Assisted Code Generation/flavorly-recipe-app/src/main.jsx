import { StrictMode, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Bookmark,
  Check,
  ChefHat,
  Clock3,
  Heart,
  Leaf,
  Menu,
  Moon,
  Plus,
  Search,
  Sparkles,
  Star,
  Sun,
  Users,
  X,
} from "lucide-react";
import "./index.css";

const categories = ["All recipes", "Quick & easy", "Vegetarian", "Comfort food", "Healthy"];
const starterRecipes = [
  {
    id: 1, title: "Creamy Tuscan Pasta", category: "Comfort food", time: "30 min", servings: 4, rating: 4.9,
    description: "Silky garlic cream sauce, sun-dried tomatoes and baby spinach come together in one irresistible bowl.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    tags: ["Italian", "One pot"], accent: "from-orange-500/80",
  },
  {
    id: 2, title: "Green Goddess Bowl", category: "Healthy", time: "20 min", servings: 2, rating: 4.8,
    description: "A vibrant, nourishing bowl packed with crunchy greens, grains, avocado and a bright herb dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    tags: ["Vegan", "High fiber"], accent: "from-emerald-500/80",
  },
  {
    id: 3, title: "Miso Salmon Rice Bowl", category: "Quick & easy", time: "25 min", servings: 2, rating: 4.9,
    description: "Flaky glazed salmon over steamed rice with cucumber, edamame and a spicy sesame crunch.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    tags: ["Japanese", "Protein rich"], accent: "from-rose-500/80",
  },
  {
    id: 4, title: "Honey Harissa Chicken", category: "Quick & easy", time: "35 min", servings: 4, rating: 4.7,
    description: "Sweet, smoky and just a little spicy, this sheet-pan chicken makes weeknight dinners effortless.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    tags: ["Sheet pan", "Gluten free"], accent: "from-red-500/80",
  },
  {
    id: 5, title: "Roasted Tomato Soup", category: "Vegetarian", time: "45 min", servings: 4, rating: 4.8,
    description: "Slow-roasted tomatoes, basil and a swirl of cream make this cozy classic taste like summer.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
    tags: ["Vegetarian", "Freezer friendly"], accent: "from-red-400/80",
  },
  {
    id: 6, title: "Lemon Berry Pavlova", category: "Vegetarian", time: "1 hr 20 min", servings: 6, rating: 4.9,
    description: "Crisp meringue, clouds of lemon cream and jewel-bright berries for a showstopping finish.",
    image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=900&q=85",
    tags: ["Dessert", "Celebration"], accent: "from-pink-400/80",
  },
];

function RecipeCard({ recipe, saved, onSave, onSelect }) {
  return (
    <article className="recipe-card group" onClick={() => onSelect(recipe)}>
      <div className="relative aspect-[1.18] overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <button aria-label={saved ? "Remove bookmark" : "Save recipe"} onClick={(event) => { event.stopPropagation(); onSave(recipe.id); }} className="icon-button absolute right-3 top-3 bg-white/90 text-ink hover:bg-white dark:bg-black/50 dark:text-white dark:hover:bg-black/70">
          <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{recipe.category}</span>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-xs font-semibold text-amber-600"><Star size={14} fill="currentColor" /> {recipe.rating} <span className="font-normal text-muted">· 128 reviews</span></div>
        <h3 className="font-display text-xl font-bold tracking-tight text-ink">{recipe.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{recipe.description}</p>
        <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 text-xs font-semibold text-muted"><span className="inline-flex items-center gap-1.5"><Clock3 size={15} /> {recipe.time}</span><span className="inline-flex items-center gap-1.5"><Users size={15} /> {recipe.servings} servings</span></div>
      </div>
    </article>
  );
}

function RecipeDetail({ recipe, saved, onSave, onClose }) {
  const ingredients = ["Fresh seasonal produce", "Aromatic herbs and spices", "Quality pantry staples", "Your favorite finishing garnish"];
  const steps = ["Prep all ingredients and bring your cooking space together.", "Cook gently until fragrant, golden and full of flavor.", "Plate while warm, add the finishing touches, and enjoy."];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="modal-card max-h-[92vh] overflow-y-auto" onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose} className="icon-button absolute right-4 top-4 z-10 bg-canvas text-ink hover:bg-soft" aria-label="Close recipe details"><X size={18} /></button>
        <img src={recipe.image} alt={recipe.title} className="h-52 w-full object-cover sm:h-64" />
        <div className="p-6 sm:p-8">
          <div className="eyebrow">{recipe.category}</div>
          <h2 className="mt-2 font-display text-3xl font-bold">{recipe.title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">{recipe.description}</p>
          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-line py-4 text-center text-sm">
            <span><Clock3 className="mx-auto mb-1 text-primary" size={18} />{recipe.time}</span>
            <span><Users className="mx-auto mb-1 text-primary" size={18} />{recipe.servings} servings</span>
            <span><Star className="mx-auto mb-1 text-amber-500" size={18} fill="currentColor" />{recipe.rating} rating</span>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div><h3 className="font-display text-xl font-bold">Ingredients</h3><ul className="mt-3 space-y-2 text-sm text-muted">{ingredients.map((ingredient) => <li key={ingredient} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" />{ingredient}</li>)}</ul></div>
            <div><h3 className="font-display text-xl font-bold">Method</h3><ol className="mt-3 space-y-2 text-sm text-muted">{steps.map((step, index) => <li key={step} className="flex gap-2"><span className="font-bold text-primary">{index + 1}.</span>{step}</li>)}</ol></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">{recipe.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          <button onClick={() => onSave(recipe.id)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white">{saved ? <><Check size={17} /> Saved to cookbook</> : <><Bookmark size={17} /> Save recipe</>}</button>
        </div>
      </div>
    </div>
  );
}

function AddRecipeForm({ onAdd, onClose }) {
  const [form, setForm] = useState({
    title: "", description: "", category: "Quick & easy", time: "30 min", servings: 2,
    image: "", tags: "",
  });

  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event) => {
    event.preventDefault();
    onAdd({
      ...form,
      id: `custom-${Date.now()}`,
      servings: Number(form.servings),
      rating: 5,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      image: form.image || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",
    });
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4 backdrop-blur-sm" onClick={onClose}>
      <form className="modal-card max-h-[92vh] overflow-y-auto p-6 sm:p-8" onSubmit={submit} onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="icon-button absolute right-4 top-4 text-muted hover:bg-soft" aria-label="Close add recipe form"><X size={18} /></button>
        <div className="eyebrow"><Plus size={14} /> Your recipe</div>
        <h2 className="mt-2 font-display text-3xl font-bold">Add a recipe</h2>
        <p className="mt-2 text-sm text-muted">Share something delicious with your Flavorly cookbook.</p>
        <div className="mt-6 grid gap-4">
          <label className="form-label">Recipe name<input required name="title" value={form.title} onChange={updateField} className="form-input" placeholder="e.g. Sunday Lemon Cake" /></label>
          <label className="form-label">Description<textarea required name="description" value={form.description} onChange={updateField} className="form-input min-h-24 resize-y" placeholder="What makes this recipe special?" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-label">Category<select name="category" value={form.category} onChange={updateField} className="form-input">{categories.slice(1).map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="form-label">Prep time<input required name="time" value={form.time} onChange={updateField} className="form-input" placeholder="25 min" /></label>
            <label className="form-label">Servings<input required min="1" type="number" name="servings" value={form.servings} onChange={updateField} className="form-input" /></label>
            <label className="form-label">Tags <span className="font-normal text-muted">(comma separated)</span><input name="tags" value={form.tags} onChange={updateField} className="form-input" placeholder="family favorite, one pot" /></label>
          </div>
          <label className="form-label">Image URL <span className="font-normal text-muted">(optional)</span><input type="url" name="image" value={form.image} onChange={updateField} className="form-input" placeholder="https://..." /></label>
        </div>
        <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-white"><Plus size={17} /> Add recipe</button>
      </form>
    </div>
  );
}

function App() {
  const [recipes, setRecipes] = useState(() => {
    const customRecipes = localStorage.getItem("flavorly-recipes");
    return customRecipes ? [...starterRecipes, ...JSON.parse(customRecipes)] : starterRecipes;
  });
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All recipes");
  const [saved, setSaved] = useState([]);
  const [selected, setSelected] = useState(null);
  const [dark, setDark] = useState(() => localStorage.getItem("flavorly-theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [addingRecipe, setAddingRecipe] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("flavorly-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    localStorage.setItem("flavorly-recipes", JSON.stringify(recipes.filter((recipe) => String(recipe.id).startsWith("custom-"))));
  }, [recipes]);

  const filteredRecipes = useMemo(() => recipes.filter((recipe) => {
    const matchesCategory = category === "All recipes" || recipe.category === category;
    const search = query.toLowerCase();
    return matchesCategory && (!search || `${recipe.title} ${recipe.category} ${recipe.tags.join(" ")}`.toLowerCase().includes(search));
  }), [category, query]);

  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const addRecipe = (recipe) => {
    setRecipes((current) => [...current, recipe]);
    setAddingRecipe(false);
    setCategory("All recipes");
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-canvas/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-xl bg-primary text-white"><ChefHat size={21} /></span><span className="font-display text-2xl font-extrabold tracking-tight">flavor<span className="text-primary">ly</span><sup className="ml-0.5 text-[10px] text-primary">®</sup></span></a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-muted md:flex"><a className="text-ink" href="#discover">Discover</a><a href="#collections">Collections</a><a href="#about">About us</a></nav>
          <div className="flex items-center gap-2"><button className="icon-button text-muted hover:bg-soft" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={19} /> : <Moon size={19} />}</button><button onClick={() => setAddingRecipe(true)} className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-canvas transition hover:opacity-80 sm:block">Share a recipe</button><button className="icon-button text-muted hover:bg-soft md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button></div>
        </div>
        {menuOpen && <nav className="border-t border-line px-5 py-4 md:hidden"><a className="block py-2 font-semibold" href="#discover">Discover</a><a className="block py-2 font-semibold" href="#collections">Collections</a><a className="block py-2 font-semibold" href="#about">About us</a></nav>}
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div><div className="eyebrow"><Sparkles size={14} /> Your daily dose of delicious</div><h1 className="mt-5 max-w-xl font-display text-5xl font-extrabold leading-[1.03] tracking-[-.04em] sm:text-6xl lg:text-[76px]">Good food<br /><span className="text-primary">starts here.</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">Thoughtful recipes for busy lives. Discover dishes that are simple to make, full of flavor, and worth sharing.</p><div className="relative mt-8 max-w-xl"><Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" size={20} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="search-input" placeholder="Search recipes, ingredients, cuisines..." /><kbd className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md bg-soft px-2 py-1 text-[11px] font-bold text-muted sm:block">⌘ K</kbd></div><div className="mt-6 flex flex-wrap gap-2">{["Pasta", "Weeknight", "Vegan", "Baking"].map((tag) => <button key={tag} onClick={() => setQuery(tag)} className="tag">{tag}</button>)}</div></div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none"><div className="hero-image"><img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1100&q=85" alt="Colorful fresh ingredients" /></div><div className="floating-note bottom-4 left-0 sm:-left-7"><span className="grid size-9 place-items-center rounded-full bg-green-100 text-green-700"><Leaf size={18} /></span><span><strong className="block text-sm">Fresh picks</strong><small className="text-muted">Seasonal & delicious</small></span></div><div className="floating-note right-0 top-5 sm:-right-5"><span className="text-xl">♥</span><span><strong className="block text-sm">12k+</strong><small className="text-muted">happy cooks</small></span></div></div>
          </div>
        </section>

        <section id="discover" className="border-t border-line bg-soft/40"><div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="eyebrow">Made for you</div><h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">Explore recipes</h2></div><button className="inline-flex items-center gap-2 self-start text-sm font-bold text-primary hover:gap-3 sm:self-auto">View all recipes <ArrowRight size={17} /></button></div><div className="mb-9 flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`category-pill ${category === item ? "active" : ""}`}>{item}</button>)}</div>{filteredRecipes.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filteredRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} saved={saved.includes(recipe.id)} onSave={toggleSaved} onSelect={setSelected} />)}</div> : <div className="rounded-3xl border border-dashed border-line py-16 text-center"><Search className="mx-auto text-muted" /><h3 className="mt-4 font-display text-xl font-bold">No recipes found</h3><p className="mt-2 text-sm text-muted">Try a different ingredient or clear your filters.</p><button onClick={() => { setQuery(""); setCategory("All recipes"); }} className="mt-5 font-bold text-primary">Clear search</button></div>}</div></section>
        <section id="collections" className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:grid-cols-3 lg:px-8"><div className="collection-card sm:col-span-2"><span className="eyebrow text-white/70">The weekend edit</span><h2 className="mt-3 max-w-sm font-display text-3xl font-bold text-white">Slow down, cook something wonderful.</h2><button onClick={() => setAddingRecipe(true)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-canvas px-5 py-2.5 text-sm font-bold text-ink hover:bg-soft"><Plus size={16} /> Add your recipe</button></div><div className="rounded-3xl bg-primary p-7 text-white"><Heart className="mb-10" fill="currentColor" /><h3 className="font-display text-2xl font-bold">Save your favorites.</h3><p className="mt-3 text-sm leading-6 text-white/75">Build a personal cookbook of recipes you can’t wait to make.</p></div></section>
      </main>

      <footer id="about" className="border-t border-line"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-2 font-display text-lg font-bold text-ink"><ChefHat size={18} className="text-primary" /> flavorly</div><p>Made with care for curious cooks everywhere.</p><p>© 2025 Flavorly</p></div></footer>

      {selected && <RecipeDetail recipe={selected} saved={saved.includes(selected.id)} onSave={toggleSaved} onClose={() => setSelected(null)} />}
      {addingRecipe && <AddRecipeForm onAdd={addRecipe} onClose={() => setAddingRecipe(false)} />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<StrictMode><App /></StrictMode>);
