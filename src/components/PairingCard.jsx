function PairingCard({ pairing}) {
    return (
        <div className="card">
            <h2>{pairing.jill} x {pairing.hob}</h2>
            <p>Year: {pairing.year}</p>
            <p>Season: {pairing.season}</p>
            <p>Status: {pairing.status}</p>
            <p>Goal: {pairing.goal}</p>
        </div>
    );
}

export default PairingCard;