import './Button.css';

const Button = ({ title }: { title: string }) => {
  return (
    <button  onClick={() => alert(title)}>{title}</button>
  );
}

export default Button;