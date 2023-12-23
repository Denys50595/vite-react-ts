import { useState } from "react";
import Button from "../Button/Button";

interface Props {
  title: string;
  initialCount: number;
}

const Counter = ({ title, initialCount }: Props) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <Button btnClick={handleIncrement} title="Increment" />
      <Button btnClick={handleDecrement} title="Decrement" />
      <Button btnClick={handleReset} title="Reset" />
    </div>
  );
};

export default Counter;
