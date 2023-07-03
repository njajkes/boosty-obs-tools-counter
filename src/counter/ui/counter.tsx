import { useCounterQuery } from "../lib";

export const Counter = () => {
  const { current, target } = useCounterQuery();

  return (
    <div className="counter-container">
      <div
        className="counter-done"
        style={{ right: 200 - (current / target) * 200 }}
      />
      <span className="counter">
        {current} / {target}
      </span>
    </div>
  );
};
