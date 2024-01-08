// import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import UserInfo from "./components/UserInfo";
// import { MainRoutes } from "./MainRoutes";
// import Button from "./components/Button/Button";
// import Card from "./components/Cards/Card";
// import courses from "./components/Cards/mock.json";
// import Counter from "./components/Counter/Counter";

export default function MyApp() {
  const [user, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

  const url = `https://jsonplaceholder.typicode.com/users/3`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: [] = await response.json();
        setUserData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  // return (
  //   <div className="main-container">
  //     {/* {courses.map((course) => (
  //       <Card data={course} />
  //     ))} */}
  //     <Counter title={"Counter"} initialCount={0} />
  //   </div>
  // );

  // return (
  //   <Routes>
  //     {MainRoutes.map((route: any) => (
  //       <Route path={route.path} element={route.component} key={route.path} />
  //     ))}
  //   </Routes>
  // );

  return (
    <UserProvider user={user}>
      <UserInfo />
    </UserProvider>
  );
}
