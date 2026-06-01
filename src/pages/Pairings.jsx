import { pairings } from "../data/seedData";
import PairingCard from "../components/PairingCard";

function Pairings() {
    return (
        <div className="page">
            <h1>Pairings</h1>

        <div className="card-grid">
            {pairings.map((pairing) => (
                <PairingCard
                    key={pairing.id}
                    pairing={pairing}
                />
            ))}
        </div>
        </div>
    );
}

export default Pairings;