import { useEffect, useState } from "react";
import "./UserList.css";

interface ResponseData {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
  id: string;
}
const UserList = ({ url }: { url: string }) => {
  const [data, setData] = useState<ResponseData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: ResponseData[] = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="user-container">
      {loading && <p>Loading...</p>}
      {err && <p>Error: {err.message}</p>}
      {data && (
        <div>
          <h1>Data:</h1>
          {data.map((item) => (
            <div className="user-card" key={item.id}>
              <div>First name: {item.firstName}</div>
              <div>Last name: {item.lastName}</div>
              <div>Ang: {item.age}</div>
              <div>Country: {item.country}</div>
              <div>City: {item.city}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
