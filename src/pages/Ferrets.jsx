import { useState } from "react";
import FerretCard from "../components/FerretCard";
import { ferrets } from "../data/seedData";

function Ferrets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");


  const filteredFerrets = ferrets
    .filter((ferret) => {
      const matchesSearch = ferret.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || ferret.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOption === "name-asc") return a.name.localeCompare(b.name);
      if (sortOption === "name-desc") return b.name.localeCompare(a.name);
      if (sortOption === "age-asc") return new Date(a.birthDate) - new Date(b.birthDate);
      if (sortOption === "age-desc") return new Date(b.birthDate) - new Date(a.birthDate);

      return 0;
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

      <select
        value={sortOption}
        onChange={(event) => setSortOption(event.target.value)}
        className="search-input"
      >
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="age-asc">Age Oldest-Youngest</option>
        <option value="age-desc">Age Youngest-Oldest</option>
      </select>

      <div className="card-grid">
        {filteredFerrets.map((ferret) => (
          <FerretCard key={ferret.id} ferret={ferret} />
        ))}
      </div>
    </div>
  );
}

export default Ferrets;