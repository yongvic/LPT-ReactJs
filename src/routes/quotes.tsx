import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Quote as QuoteIcon, Share2, History } from 'lucide-react';

interface Quote {
  q: string; // content -> q
  a: string; // author -> a
}

export default function Quotes() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api");
      const data = await response.json();
      const newQuote = data[0];
      setQuote(newQuote);
      
      const history = JSON.parse(localStorage.getItem("quotes_history") || "[]");
      // Add a unique ID for key prop purposes
      localStorage.setItem("quotes_history", JSON.stringify([{ ...newQuote, _id: new Date().toISOString() }, ...history.slice(0, 49)]));
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.q}" - ${quote.a}`);
      alert("Citation copiée !");
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Générateur de Citations</h1>
          <p className="text-gray-500">Découvrez des paroles inspirantes.</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={quote?.q || "loader"}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white min-h-[250px] flex flex-col justify-center items-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            ) : (
              <>
                <QuoteIcon className="w-12 h-12 mb-4 opacity-50" />
                <p className="text-2xl md:text-3xl font-serif italic text-center">"{quote?.q}"</p>
                <p className="text-right text-lg font-semibold mt-6 w-full">- {quote?.a}</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchQuote}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
          >
            Nouvelle Citation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold p-3 rounded-full shadow-lg transition-colors duration-300"
            aria-label="Partager la citation"
          >
            <Share2 className="w-5 h-5" />
          </motion.button>
          <Link to="/quotes/history">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold p-3 rounded-full shadow-lg transition-colors duration-300"
              aria-label="Voir l'historique"
            >
              <History className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
