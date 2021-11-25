import "./App.css";

export default function Preview(props) {
  return (
    <div className= "workout-page">
      {props.data.map((info) => {
        return (
            <div>
          <div className="card">
            <img src={info.image} alt="workout" />
            <h3>{info.title}</h3>
            <p>{info.description}</p>
          </div>
         
          </div>
        );
      })}
    </div>
  );
}
