function FerretCard({ ferret, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{ferret.name}</h3>
      
      <p>Sex: {ferret.sex}</p>
      <p>
        <strong>Birth Date:</strong> {ferret.birthDate}
      </p>
      <p>Size: {ferret.size}</p>
      <p>Color: {ferret.color}</p>
      <p>Pattern: {ferret.pattern}</p>
      <p>Role: {ferret.role}</p>
      <p>Status: {ferret.status}</p>
    </div>
  );
}

export default FerretCard;