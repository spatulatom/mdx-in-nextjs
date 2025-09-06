"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

// Dummy data for autosuggestions
const suggestions = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "peach",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
];

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    setActiveSuggestion(-1);
  }, [query]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery("");
    setShowSuggestions(false);
    router.push(`/search/${encodeURIComponent(suggestion)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveSuggestion((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (
        activeSuggestion >= 0 &&
        activeSuggestion < filteredSuggestions.length
      ) {
        handleSuggestionClick(filteredSuggestions[activeSuggestion]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for click events
    setTimeout(() => {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    }, 200);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleInputBlur}
          onFocus={() => query.length > 0 && setShowSuggestions(true)}
          placeholder="Search for fruits..."
          className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 text-gray-500 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`px-4 py-2 cursor-pointer ${
                index === activeSuggestion
                  ? "bg-blue-100 text-blue-900"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
