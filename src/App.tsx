import "./App.css";
import UserList from "./components/UserList/UserList";
// import Button from "./components/Button/Button";
// import Card from "./components/Cards/Card";
// import courses from "./components/Cards/mock.json";
// import Counter from "./components/Counter/Counter";

export default function MyApp() {
  const apiUrl = "https://658c2a1a859b3491d3f59df9.mockapi.io/api-stage/v1/users";
  // return (
  //   <div className="main-container">
  //     {/* {courses.map((course) => (
  //       <Card data={course} />
  //     ))} */}
  //     <Counter title={"Counter"} initialCount={0} />
  //   </div>
  // );

  return <UserList url={apiUrl} />;
}
