function LitterCard({ litter }) {
  return (
    <div className="card">
      <h3>Litter #{litter.id}</h3>

      <p>Pairing: {litter.pairing}</p>
      <p>Year: {litter.year}</p>
      <p>Season: {litter.season}</p>
      <p>Born: {litter.born}</p>
      <p>Survived: {litter.survived}</p>
    </div>
  );
}

export default LitterCard;