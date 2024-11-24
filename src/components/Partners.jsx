import "../styles/Partners.css";

export default function Partners({ partnersList }) {
  return (
    <div className="partner-list">
      {partnersList.map((item, i) => (
        <div className="kartu-partner" key={i}>
          <img src={item.image} />
        </div>
      ))}
    </div>
  );
}
