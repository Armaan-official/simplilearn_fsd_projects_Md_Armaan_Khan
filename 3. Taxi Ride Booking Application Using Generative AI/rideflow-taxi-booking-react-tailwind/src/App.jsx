import { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import {
  ArrowRight, CarFront, CheckCircle2, Clock3, Headphones,
  MapPin, Menu, Moon, Phone, ShieldCheck, Sparkles, Sun,
  Users, X, Zap, Mail, Star, CalendarDays, Route as RouteIcon
} from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("rideflow-theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("rideflow-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header dark={dark} setDark={setDark} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookRide />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
            <CarFront size={21} />
          </span>
          <span className="text-lg font-extrabold tracking-tight">RideFlow</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/book" className="btn-primary">
            Book a ride <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden dark:border-slate-800"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open navigation"
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="container-page flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {item.label}
              </NavLink>
            ))}
            <button
              onClick={() => setDark((v) => !v)}
              className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
              {dark ? "Light theme" : "Dark theme"}
            </button>
            <Link to="/book" className="btn-primary mt-2">
              Book a ride <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(99,102,241,.18),transparent_34%),radial-gradient(circle_at_20%_40%,rgba(14,165,233,.10),transparent_28%)]" />
        <div className="container-page grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <div className="eyebrow mb-5 flex items-center gap-2">
              <Sparkles size={14} /> Smarter urban mobility
            </div>
            <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Your ride, <span className="text-indigo-600 dark:text-indigo-400">on your terms.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Book reliable rides in seconds, choose the service that fits your journey,
              and move around the city with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/book" className="btn-primary">
                Book a ride <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-2"><ShieldCheck size={17} /> Verified drivers</span>
              <span className="flex items-center gap-2"><Clock3 size={17} /> 24/7 availability</span>
              <span className="flex items-center gap-2"><Zap size={17} /> Quick pickup</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-indigo-500/10 blur-3xl" />
            <div className="card relative overflow-hidden p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Live trip preview</p>
                  <p className="mt-1 text-xs text-slate-500">Mumbai • Central route</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                  Driver nearby
                </span>
              </div>
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:34px_34px]" />
                <div className="absolute left-[18%] top-[65%] h-3 w-3 rounded-full bg-indigo-600 ring-8 ring-indigo-500/15" />
                <div className="absolute right-[20%] top-[25%] h-3 w-3 rounded-full bg-emerald-500 ring-8 ring-emerald-500/15" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 300" fill="none">
                  <path d="M95 205 C170 260, 210 80, 405 78" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="9 9" className="text-indigo-500" />
                </svg>
                <div className="absolute left-5 bottom-5 rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur dark:bg-slate-900/90">
                  <p className="text-xs font-semibold text-slate-500">Pickup</p>
                  <p className="mt-1 text-sm font-bold">Andheri West</p>
                </div>
                <div className="absolute right-5 top-5 rounded-2xl bg-white/90 p-3 shadow-lg backdrop-blur dark:bg-slate-900/90">
                  <p className="text-xs font-semibold text-slate-500">Destination</p>
                  <p className="mt-1 text-sm font-bold">Bandra Kurla Complex</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800"><p className="text-xs text-slate-500">ETA</p><p className="mt-1 font-bold">4 min</p></div>
                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800"><p className="text-xs text-slate-500">Trip</p><p className="mt-1 font-bold">28 min</p></div>
                <div className="rounded-2xl bg-slate-50 p-3 dark:bg-slate-800"><p className="text-xs text-slate-500">From</p><p className="mt-1 font-bold">₹299</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            <Feature icon={<ShieldCheck />} title="Safety first" text="Driver verification, trip sharing, and dependable support built into every ride." />
            <Feature icon={<Clock3 />} title="Always available" text="Get a ride when you need one, whether it is a quick commute or an early airport run." />
            <Feature icon={<Sparkles />} title="Simple experience" text="Clear pricing, flexible services, and a booking flow designed to stay out of your way." />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Built for every journey</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">One app. Every kind of ride.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
              From everyday city trips to business travel and airport transfers, choose a service that matches your needs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ServiceMini icon={<CarFront />} title="City rides" text="Fast, comfortable everyday travel." />
            <ServiceMini icon={<Users />} title="XL rides" text="Extra space for groups and luggage." />
            <ServiceMini icon={<CalendarDays />} title="Scheduled" text="Plan ahead and travel stress-free." />
            <ServiceMini icon={<RouteIcon />} title="Airport" text="Reliable terminal-to-door trips." />
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="card p-6">
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

function ServiceMini({ icon, title, text }) {
  return (
    <Link to="/services" className="card group flex gap-4 p-5 transition hover:-translate-y-1">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-100 text-indigo-600 dark:bg-slate-800 dark:text-indigo-400">{icon}</div>
      <div>
        <h3 className="font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
      </div>
    </Link>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="border-b border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{text}</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <PageHero eyebrow="About RideFlow" title="Technology that keeps people moving." text="We are building a modern mobility experience around reliability, transparency, and thoughtful design." />
      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Designed around real journeys</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              RideFlow is a front-end starter concept for a ride booking platform. The product direction combines fast booking, service flexibility, driver safety, and clear communication into one consistent experience.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Stat number="24/7" label="Support concept" />
              <Stat number="4.9/5" label="Target rider rating" />
              <Stat number="3 sec" label="Booking goal" />
              <Stat number="100%" label="Responsive UI" />
            </div>
          </div>
          <div className="card p-7">
            <p className="eyebrow">Our principles</p>
            <div className="mt-6 space-y-6">
              <Principle icon={<ShieldCheck />} title="Safety by design" text="Make important safety information visible at the moments riders need it." />
              <Principle icon={<Sparkles />} title="Less friction" text="Reduce unnecessary steps so a ride can be booked quickly on any screen." />
              <Principle icon={<Users />} title="People first" text="Create experiences that work for riders, drivers, families, and businesses." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ number, label }) {
  return <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-900"><p className="text-2xl font-extrabold">{number}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>;
}

function Principle({ icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">{icon}</div>
      <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div>
    </div>
  );
}

const services = [
  ["City Ride", "Everyday trips with comfortable cars and quick pickup.", "₹12/km", <CarFront />],
  ["Ride XL", "More room for groups, luggage, and longer journeys.", "₹18/km", <Users />],
  ["Airport Transfer", "Reliable terminal pickups and drop-offs.", "₹15/km", <RouteIcon />],
  ["Scheduled Ride", "Reserve your ride in advance for important plans.", "From ₹299", <CalendarDays />],
  ["Business Ride", "Professional travel for meetings, teams, and clients.", "Custom", <Sparkles />],
  ["24/7 Support", "Help when you need it, before or during your trip.", "Always on", <Headphones />],
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="A ride for every kind of day." text="Choose a service based on your group size, destination, timing, or travel needs." />
      <section className="container-page py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, text, price, icon]) => (
            <div key={title} className="card flex flex-col p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">{icon}</div>
              <h2 className="mt-6 text-xl font-bold">{title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
                <span className="text-sm font-bold">{price}</span>
                <Link to="/book" className="text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">Book →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We are here to help." text="Questions about a ride, partnerships, or the product? Send us a message and we will get back to you." />
      <section className="container-page grid gap-6 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div className="space-y-4">
          <ContactCard icon={<Phone />} title="Call us" text="+91 1800 123 4567" />
          <ContactCard icon={<Mail />} title="Email" text="hello@rideflow.example" />
          <ContactCard icon={<MapPin />} title="Office" text="Mumbai, Maharashtra" />
        </div>
        <div className="card p-6 sm:p-8">
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! Your message has been submitted."); }} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@example.com" required />
            </div>
            <Field label="Subject" placeholder="How can we help?" required />
            <div>
              <label className="mb-2 block text-sm font-semibold">Message</label>
              <textarea required rows="6" className="input resize-none" placeholder="Write your message..." />
            </div>
            <button className="btn-primary w-full sm:w-auto">Send message <ArrowRight size={16} /></button>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, text }) {
  return <div className="card flex items-center gap-4 p-5"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">{icon}</div><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{title}</p><p className="mt-1 font-semibold">{text}</p></div></div>;
}

function Field({ label, type = "text", placeholder, required, value, onChange, error }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}{required && <span className="text-rose-500"> *</span>}</label>
      <input type={type} required={required} value={value} onChange={onChange} placeholder={placeholder} className={`input ${error ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/10" : ""}`} />
      {error && <p className="mt-1.5 text-xs font-medium text-rose-500">{error}</p>}
    </div>
  );
}

const rideTypes = [
  { id: "city", name: "City Ride", desc: "Comfortable everyday travel", base: 80, rate: 12, icon: <CarFront /> },
  { id: "xl", name: "Ride XL", desc: "Extra space for groups", base: 120, rate: 18, icon: <Users /> },
  { id: "airport", name: "Airport", desc: "Reliable airport transfer", base: 100, rate: 15, icon: <RouteIcon /> },
];

function BookRide() {
  const [form, setForm] = useState({
    name: "", phone: "", pickup: "", destination: "", date: "", time: "", service: "city", passengers: "1",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selected = rideTypes.find((r) => r.id === form.service);
  const estimatedFare = selected.base + selected.rate * 10;

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
    setSubmitted(false);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[0-9+()\\s-]{8,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.pickup.trim()) e.pickup = "Pickup location is required.";
    if (!form.destination.trim()) e.destination = "Destination is required.";
    if (!form.date) e.date = "Choose a date.";
    if (!form.time) e.time = "Choose a time.";
    if (form.pickup.trim().toLowerCase() === form.destination.trim().toLowerCase()) e.destination = "Pickup and destination must be different.";
    return e;
  }

  function submit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  }

  return (
    <>
      <PageHero eyebrow="Book a ride" title="Where are you going?" text="Enter your trip details, choose a service, and review your estimated fare before booking." />
      <section className="container-page grid gap-6 py-12 lg:grid-cols-[1.25fr_.75fr] lg:py-16">
        <form onSubmit={submit} noValidate className="card p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" placeholder="John Doe" required value={form.name} onChange={(e) => update("name", e.target.value)} error={errors.name} />
            <Field label="Phone number" type="tel" placeholder="+91 98765 43210" required value={form.phone} onChange={(e) => update("phone", e.target.value)} error={errors.phone} />
            <div className="sm:col-span-2">
              <Field label="Pickup location" placeholder="e.g. Andheri West" required value={form.pickup} onChange={(e) => update("pickup", e.target.value)} error={errors.pickup} />
            </div>
            <div className="sm:col-span-2">
              <Field label="Destination" placeholder="e.g. BKC" required value={form.destination} onChange={(e) => update("destination", e.target.value)} error={errors.destination} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Date <span className="text-rose-500">*</span></label>
              <input type="date" required min={new Date().toISOString().split("T")[0]} value={form.date} onChange={(e) => update("date", e.target.value)} className={`input ${errors.date ? "border-rose-500" : ""}`} />
              {errors.date && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.date}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Time <span className="text-rose-500">*</span></label>
              <input type="time" required value={form.time} onChange={(e) => update("time", e.target.value)} className={`input ${errors.time ? "border-rose-500" : ""}`} />
              {errors.time && <p className="mt-1.5 text-xs font-medium text-rose-500">{errors.time}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Passengers</label>
              <select value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className="input">
                {[1,2,3,4,5,6].map((n) => <option key={n} value={n}>{n} {n === 1 ? "passenger" : "passengers"}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-sm font-semibold">Choose a service</p>
            <div className="grid gap-3 md:grid-cols-3">
              {rideTypes.map((ride) => (
                <button
                  type="button"
                  key={ride.id}
                  onClick={() => update("service", ride.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    form.service === ride.id
                      ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-500/10 dark:bg-indigo-500/10"
                      : "border-slate-200 hover:border-slate-300 dark:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-indigo-600 dark:text-indigo-400">{ride.icon}</span>
                    {form.service === ride.id && <CheckCircle2 size={18} className="text-indigo-600 dark:text-indigo-400" />}
                  </div>
                  <p className="mt-4 text-sm font-bold">{ride.name}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{ride.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {submitted && (
            <div className="mt-6 flex gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300">
              <CheckCircle2 className="shrink-0" size={18} />
              <span><strong>Ride request ready.</strong> This starter UI has validated your details successfully. Connect the submit handler to your backend/API to create the real booking.</span>
            </div>
          )}

          <button type="submit" className="btn-primary mt-7 w-full py-3.5">Continue to booking <ArrowRight size={17} /></button>
        </form>

        <aside className="space-y-5">
          <div className="card p-6">
            <p className="eyebrow">Ride summary</p>
            <div className="mt-5 space-y-4">
              <SummaryRow icon={<MapPin size={17} />} label="Pickup" value={form.pickup || "Not selected"} />
              <SummaryRow icon={<MapPin size={17} />} label="Destination" value={form.destination || "Not selected"} />
              <SummaryRow icon={<CalendarDays size={17} />} label="Schedule" value={form.date && form.time ? `${form.date} at ${form.time}` : "Not selected"} />
              <SummaryRow icon={<CarFront size={17} />} label="Service" value={selected.name} />
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-800">
              <div className="flex items-end justify-between">
                <div><p className="text-sm text-slate-500">Estimated fare</p><p className="mt-1 text-xs text-slate-400">Example for ~10 km</p></div>
                <p className="text-3xl font-extrabold">₹{estimatedFare}</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex gap-3"><ShieldCheck className="text-indigo-600 dark:text-indigo-400" /><div><h3 className="font-bold">Your safety matters</h3><p className="mt-1 text-sm leading-6 text-slate-500">This demo is ready to connect to authentication, maps, payments, driver matching, and live trip tracking.</p></div></div>
          </div>
        </aside>
      </section>
    </>
  );
}

function SummaryRow({ icon, label, value }) {
  return <div className="flex gap-3"><div className="mt-0.5 text-indigo-600 dark:text-indigo-400">{icon}</div><div className="min-w-0"><p className="text-xs text-slate-400">{label}</p><p className="truncate text-sm font-semibold">{value}</p></div></div>;
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="container-page grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white"><CarFront size={18} /></span><span className="font-extrabold">RideFlow</span></Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">A modern React + Tailwind starter for a taxi and ride booking experience.</p>
        </div>
        <div>
          <p className="text-sm font-bold">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/services" className="hover:text-indigo-600">Services</Link>
            <Link to="/book" className="hover:text-indigo-600">Book a ride</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-slate-500"><p>hello@rideflow.example</p><p>+91 1800 123 4567</p><p>Mumbai, Maharashtra</p></div>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800">© 2026 RideFlow. Front-end starter project.</div>
    </footer>
  );
}

export default App;