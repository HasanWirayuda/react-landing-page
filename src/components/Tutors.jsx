import "../styles/Tutors.css";

// import { tutorsList } from "../data/TutorsSection";

export default function Tutors({ tutorsList }) {
  return (
    <div className="tutor-list">
      {tutorsList.map((tutor, i) => (
        <div className="kartu-tutor" key={i}>
          <img src={tutor.image} />
          <p>{tutor.name}</p>
        </div>
      ))}
    </div>
  );
}
