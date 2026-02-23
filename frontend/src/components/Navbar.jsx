import { Search, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ search, setSearch, onSearch }) {
  return (
    <div className="px-8 pt-6 pb-10 mx-10">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Eneba Logo"
            className="h-12 object-contain hover:opacity-90 transition"
          />
        </div>

        {/* Search Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
          className="relative w-[600px]"
        >
          <div className="relative flex items-center">

            {/* Search Icon (Left) */}
            <Search
              size={18}
              className="absolute left-4 text-white opacity-70"
            />

            {/* Input */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for games"
              className="w-full bg-transparent text-white pl-12 pr-12 py-3 border-2 border-white/70
                focus:outline-none focus:ring-2 focus:ring-white placeholder-white placeholder-opacity-60"
            />

            {/* Clear Button (Right) */}
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-4 text-white opacity-70 hover:opacity-100"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </form>

        {/* Right side */}
        <div className="flex items-center gap-4 text-white text-sm flex-shrink-0">
          <span>English EU | EUR</span>
          <span className="text-3xl leading-none flex-shrink-0">♡</span>
          <span className="text-2xl leading-none flex-shrink-0">🛒</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}