import { useState } from "react";
import FerretCard from "../components/FerretCard";
import { ferrets } from "../data/seedData";

function Ferrets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredFerrets = ferrets.filter((ferret) => {
    const matchesSearch = ferret.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || ferret.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

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

      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
        className="search-input"
      >
        <option value="All">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Retired">Retired</option>
        <option value="Inactive">Inactive</option>
        <option value="Rehomed">Rehomed</option>
        <option value="Deceased">Deceased</option>
      </select>

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