import { useState } from "react";
import FerretCard from "../components/FerretCard";
import { ferrets } from "../data/seedData";

function Ferrets() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFerrets = ferrets.filter((ferret) =>
    ferret.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Ferrets</h1>

      <input
        type="text"
        placeholder="Search ferrets..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

    <div className="card-grid">
      {filteredFerrets.map((ferret) => (
        <FerretCard
          key={ferret.id}
          ferret={ferret}
        />
      ))}
    </div>
  </div>
  );
}

export default Ferrets;