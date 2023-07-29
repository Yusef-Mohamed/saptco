import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PhonePass = () => {
  const nav = useNavigate();
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const handelSubmit = function (e) {
    e.preventDefault();
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
      } else {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds]);
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="bg-white min-h-screen ">
      <div className="border-b-[#00a18e] border-b-4">
        <div className="container mx-auto ">
          <img
            src="https://th.bing.com/th/id/OIP.viIbJQ5dxYsXwEwaY1fa4AHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7"
            alt=""
            className="h-32"
          />
        </div>
      </div>

      <div className="max-w-[650px] text-center text-2xl mx-auto">
        تنتهي مهلة الرسالة المؤقتة في خلال
        <br />
        <span className="bg-black text-white p-2 block w-fit mx-auto mt-4">
          {formattedTime}
        </span>
      </div>
      <div className="container max-w-[650px] mx-auto  p-6 rounded-xl shadow-2xl mt-32 border">
        <form
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <label className="text-center text-xl block mb-4">
            كلمه المرور المؤقتة
          </label>
          <input
            type="password"
            className="input-text text-center"
            placeholder="***"
            required
          />
          <button className="block w-1/2 p-3 rounded-lg mx-auto text-white text-2xl bg-[#00a18e] mt-12 mb-6">
            تحقق
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhonePass;
