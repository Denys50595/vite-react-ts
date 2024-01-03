import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainRoutes } from "./MainRoutes";
// import Button from "./components/Button/Button";
// import Card from "./components/Cards/Card";
// import courses from "./components/Cards/mock.json";
// import Counter from "./components/Counter/Counter";

export default function MyApp() {
  // return (
  //   <div className="main-container">
  //     {/* {courses.map((course) => (
  //       <Card data={course} />
  //     ))} */}
  //     <Counter title={"Counter"} initialCount={0} />
  //   </div>
  // );

  return (
    <Routes>
      {MainRoutes.map((route: any) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
    </Routes>
  );
}
