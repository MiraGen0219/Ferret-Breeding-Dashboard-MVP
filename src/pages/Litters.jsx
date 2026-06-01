import LitterCard from "../components/LitterCard";
import { litters } from "../data/seedData";

function Litters() {
  return (
    <div>
      <h1>Litters</h1>

      {litters.map((litter) => (
        <LitterCard
          key={litter.id}
          litter={litter}
        />
      ))}
    </div>
  );
}

export default Litters;