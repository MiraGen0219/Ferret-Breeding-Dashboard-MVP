import FerretCard from "../components/FerretCard";
import { ferrets } from "../data/seedData";

function Ferrets() {
  return (
    <div>
      <h1>Ferrets</h1>

      {ferrets.map((ferret) => (
        <FerretCard
          key={ferret.id}
          ferret={ferret}
        />
      ))}
    </div>
  );
}

export default Ferrets;