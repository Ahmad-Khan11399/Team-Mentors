import { universities } from "./constant.js";
import "../index.css";
const Button = () => {
  return (
    <div className="uni-div">
      {universities.map((u, index) => (
        <button className="uni" key={index}>
          {u}
        </button>
      ))}
    </div>
  );
};
export default Button;
