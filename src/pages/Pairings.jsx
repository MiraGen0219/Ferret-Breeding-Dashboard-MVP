import { pairings } from "../data/seedData";
import PairingCard from "../components/PairingCard";

function Pairings() {
    return (
        <div>
            <h1>Pairings</h1>

            {pairings.map((pairing) => (
                <PairingCard
                    key={pairing.id}
                    pairing={pairing}
                />
            ))}
        </div>
    );
}

export default Pairings;