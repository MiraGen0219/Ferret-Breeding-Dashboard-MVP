function FerretCard({ ferret }) {
  return (
    <div>
      <h3>{ferret.name}</h3>

      <p>Sex: {ferret.sex}</p>
      <p>Size: {ferret.size}</p>
      <p>Status: {ferret.status}</p>
    </div>
  );
}

export default FerretCard;