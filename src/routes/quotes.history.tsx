import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';

interface Quote {
  _id: string;
  q: string;
  a: string;
}

export default function QuotesHistory() {
  const [history, setHistory] = useState<Quote[]>([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("quotes_history") || "[]"
    );
    setHistory(storedHistory);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Historique</h1>
           <Link to="/quotes">
             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour
              </motion.button>
           </Link>
        </div>

        {history.length > 0 ? (
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {history.map((quote) => (
              <motion.li
                key={quote._id}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <blockquote className="text-lg italic text-gray-700">
                  &ldquo;{quote.q}&rdquo;
                </blockquote>
                <p className="text-right text-gray-500 mt-3 font-medium">- {quote.a}</p>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <p className="text-gray-500">Aucune citation dans l&apos;historique.</p>
            <p className="text-sm text-gray-400 mt-2">Commencez à générer des citations pour en voir ici.</p>
          </div>
        )}
      </div>
    </div>
  );
}
