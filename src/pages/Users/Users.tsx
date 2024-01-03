import { useEffect, useState } from "react";
import {} from "../../components/UserList/UserList.css";
import { Link } from "react-router-dom";

interface ResponseData {
  name: string;
  id: string;
}
const Users = () => {
  const [data, setData] = useState<ResponseData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setError] = useState<Error | null>(null);

  const url = "https://jsonplaceholder.typicode.com/users";

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
          <h1>User list:</h1>
          {data.map((item) => (
            <div className="user-card" key={item.id}>
              <Link to={`${item.id}`} className="test-link">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
