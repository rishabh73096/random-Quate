import React, { useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    const data = await response.json();
    setQuote(data[0]);
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Random Quote</h1>
      <div className="bg-white p-6 rounded shadow-md w-80 mb-4">
        <p className="text-lg text-center">{quote || "Click 'Get Quote' to see one !"}</p>
        <div className="flex justify-between mt-4">
          <button
            onClick={fetchQuote}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Get Quote
          </button>
          <button
            onClick={saveQuote}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
      {savedQuotes.length > 0 && (
        <div className="mt-6 w-80 rounded-lg mb-5">
          <h2 className="text-2xl font-bold mb-2">Saved Quotes</h2>
          <ul className="bg-white p-4 rounded-lg shadow-md">
            {savedQuotes.map((quote, index) => (
              <li key={index} className="text-lg mb-2 border-b last:border-b-0 pb-2">
                '{quote}'
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
