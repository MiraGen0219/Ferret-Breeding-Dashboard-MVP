import LitterCard from "../components/LitterCard";
import { litters } from "../data/seedData";

function Litters() {
  return (
    <div className="page">
      <h1>Litters</h1>

    <div className="card-grid">
      {litters.map((litter) => (
        <LitterCard
          key={litter.id}
          litter={litter}
        />
      ))}
    </div>
    </div>
  );
}

export default Litters;