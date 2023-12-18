import "./Card.css";

interface CardProps {
  id: number;
  image: string;
  level: string;
  title: string;
  user: {
    avatar: string;
    name: string;
  };
  rating: number;
  students: number;
  modules: number;
  duration: number;
}

const Card = ({ data }: { data: CardProps }) => {
  const getDuration = (milliseconds: number): string => {
    const totalMinutes = Math.floor(milliseconds / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
  };
  return (
    <div className="card">
      <div className="image__container">
        <img src={data.image} alt="" />
        <div className="level">{data.level}</div>
      </div>
      <h3 className="card__title">{data.title}</h3>
      <div className="card__info">
        <div className="user">
          <img src={data.user.avatar} alt={data.user.name} />
          <p>{data.user.name}</p>
        </div>
        <div className="rating">
          <p>{data.rating}</p>
        </div>
      </div>
      <div className="card__info">
        <div>{data.students} Student</div>
        <div>{data.modules} Modules</div>
        <div>{getDuration(data.duration)}</div>
      </div>
    </div>
  );
};

export default Card;
