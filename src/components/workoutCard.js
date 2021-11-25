import { useNavigate } from "react-router-dom";

export default function WorkoutCard(props) {
  let navigate = useNavigate();
  function characterLimit(desc) {
    let length = desc.length;
  }
  return (
    <div>
      <div onClick={() => navigate(props.data.url)} className="card">
        <img src={props.data.image} alt="workout" />
        <h3>{props.data.title}</h3>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
