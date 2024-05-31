import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  );
}

export default App;