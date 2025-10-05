import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("selectedPapers");
    localStorage.removeItem("hasSeenIntro");
    localStorage.removeItem("cosmosx_generateCount");
    localStorage.removeItem("cosmosx_userId");
  }, []);

  const search = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements[0].value;
    console.log("Searching for:", searchTerm);
    navigate(`/paper?query=${encodeURIComponent(searchTerm)}`);
  };

  const cardImages = [
    { src: "/main01.png", alt: "Step 1" },
    { src: "/main02.png", alt: "Step 2" },
    { src: "/main03.png", alt: "Step 3" },
  ];

  return (
    <div className="min-h-screen text-white">
      <header className="border-b border-white">
        <div className="container mx-auto px-6 py-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-32 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
      </header>

      {/* 가운데 영역 */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center text-white mb-12">
          <h2 className="text-2xl font-medium mb-4">
            From Paper Discovery to Hypothesis, All in One Flow
          </h2>
          <p className="text-xm">
            cosmosX guides you step by step through the journey of finding and
            shaping your research ideas.
          </p>
        </div>

        {/* 카드뉴스 */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {cardImages.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="w-[240px] h-[240px] rounded-lg object-cover shadow-lg transition-transform duration-300 hover:-translate-y-2.5"
            />
          ))}
        </div>

        {/* 검색바 */}
        <form className="max-w-3xl mx-auto" onSubmit={(e) => search(e)}>
          <div className="relative">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
              <Search className="w-6 h-6 text-gray-800" />
            </div>
            <input
              type="text"
              placeholder="What topics are you interested in?"
              className="w-full pl-16 pr-6 py-5 rounded-full text-lg text-gray-900 bg-white/90 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-4 focus:ring-[#869DAD]/50 transition-all"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
