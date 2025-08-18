import { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

function App() {
  const [inputText, setInputText] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextTranslation = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key": "36642afe24msh37285cd688c6779p1ab293jsn398d4a095bc2", // replace with your key
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: inputText,
          source: "en",
          target: selectValue,
          format: "text",
        },
      };

      const response = await axios.request(options);
      setResult(response?.data?.data?.translations?.[0]?.translatedText || "");
    } catch (error) {
      console.error(error?.response || error);
      setResult("⚠️ Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center drop-shadow-md">
          🌐 Text Translator
        </h1>

        {/* Input Section */}
        <textarea
          placeholder="Enter text to translate..."
          className="bg-gray-50 border-2 border-indigo-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 rounded-xl w-full min-h-[120px] text-lg p-4 outline-none transition"
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        {/* Language Dropdown */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-700">Convert Into:</label>
          <select
            name="value"
            className="bg-white px-4 py-2 rounded-xl border-2 border-indigo-200 focus:border-indigo-500 focus:ring focus:ring-indigo-200 outline-none cursor-pointer transition"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">🌍 Select Language</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
            <option value="gu">Gujarati</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            <option value="zh-CN">Chinese (Simplified)</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        {/* Translate Button */}
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg w-full py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleTextTranslation}
          disabled={loading || !inputText || !selectValue}
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" />
              Translating...
            </>
          ) : (
            "Translate"
          )}
        </button>

        {/* Result Section */}
        {result && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl p-5 shadow-inner transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">✅ Translated Text:</h2>
            <p className="text-lg text-gray-800">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
