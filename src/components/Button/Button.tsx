import "./Button.css";

interface Props {
  title: string;
  btnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ title, btnClick }: Props) => {
  return <button onClick={btnClick}>{title}</button>;
};

export default Button;
