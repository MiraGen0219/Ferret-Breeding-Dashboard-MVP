function FerretDetail({ ferret, pairings, litters, onClose }) {
  if (!ferret) {
    return null;
  }

const relatedPairings = pairings.filter(
  (pairing) =>
    pairing.jill === ferret.name || pairing.hob === ferret.name
);

const relatedLitters = litters.filter((litter) =>
  relatedPairings.some(
    (pairing) => `${pairing.jill} x ${pairing.hob}` === litter.pairing
  )
);

  return (
    <div className="ferret-detail">
      <h2>{ferret.name}</h2>

      <p>
        <strong>Status:</strong> {ferret.status}
      </p>

      <p>
        <strong>Sex:</strong> {ferret.sex}
      </p>

      <p>
        <strong>Birth Date:</strong> {ferret.birthDate}
      </p>

      <p>
        <strong>Color:</strong> {ferret.color}
      </p>

      <p>
        <strong>Pattern:</strong> {ferret.pattern}
      </p>

      <h3>Pairing History</h3>

      {relatedPairings.length === 0 ? (
        <p>No pairings recorded.</p>
      ) : (
        <ul>
          {relatedPairings.map((pairing) => (
            <li key={pairing.id}>
              Pairing #{pairing.id} — {pairing.year}
            </li>
          ))}
        </ul>
      )}

      <h3>Litters</h3>

    {relatedLitters.length === 0 ? (
    <p>No litters recorded.</p>
    ) : (
    <ul>
        {relatedLitters.map((litter) => (
        <li key={litter.id}>
            {litter.season} {litter.year}: {litter.born} born,{" "}
            {litter.survived} survived
        </li>
     ))}
    </ul>
    )}

    <button onClick={onClose}>Close</button>
        </div>
    );
    }

export default FerretDetail;