import "../App.css";

import WorkoutCard from "./workoutCard";

export default function Preview(props) {
  return (
    <div className="workout-page">
      {props.data.map((info) => {
        return <WorkoutCard data={info} />;
      })}
    </div>
  );
}
