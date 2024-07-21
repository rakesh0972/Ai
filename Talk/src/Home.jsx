import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";

function Home() {
  const [result, setResult] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  const apiKey = import.meta.env.REACT_APP_API_KEY;

  // Access your API key as an environment variable (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission or further actions here
    console.log('Submitted search term:', searchTerm);
};

  async function run() {
    const prompt = searchTerm
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    setResult(response.text());
    console.log(result);
  }
  
 // run();

  return (
<div>
    <form onSubmit={handleSubmit} className="relative">
            <input
                type="text"
                placeholder="Ask me anything"
                className="w-full pl-8 pr-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline "
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button type="submit" className="absolute inset-y-0 right-0 px-3 py-2 bg-red  bg-darkGray text-white rounded-r-lg  focus:outline-none focus:bg-gray-600" onClick={run}>
                Search
            </button>
        </form>

    <p>{result}</p>

    </div>


  );
}

export default Home;
