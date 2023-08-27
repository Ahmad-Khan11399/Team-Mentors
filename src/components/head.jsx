import student from "../assets/student.png";
import "../index.css";
const Head = () => {
  return (
    <>
      <div className="head">
        <h1 className="big-heading">Discover Your Guiding Heroes Here</h1>
        <div className="msg">
          <h1 className="big-heading">
            Learn from the best scientists <br /> and researchers around the
            globe
          </h1>
          <p>
            Distinguished mentors from prestigious institutions like Cambridge,
            Oxford, and ETH Zurich form the backbone of our educational
            platform. Their vast expertise and passion ignite a flame of
            curiosity in students, fostering a dynamic learning environment.
            Join us to access unparalleled insights and embark on a
            transformative educational journey.
          </p>
        </div>
        <img src={student} className="student" />
      </div>
    </>
  );
};
export default Head;
