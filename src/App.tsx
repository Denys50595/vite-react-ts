import "./App.css";
import Card from "./components/Cards/Card";
import courses from "./components/Cards/mock.json";

export default function MyApp() {
  return (
    <div className="main-container">
      {courses.map((course) => (
        <Card data={course} />
      ))}
      {/* <h1>Welcome to my app</h1>
      <Button title="I'm a button" /> */}
    </div>
  );
}
