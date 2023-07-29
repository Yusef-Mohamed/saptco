import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const PhonePass = () => {
  const nav = useNavigate();
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

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
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/temporaryPass");
  };
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
      <div className="block p-6 text-3xl text-center text-[#00a18e] bg-gray-100">
        الدخول علي النظام
      </div>
      <div className="block p-4 text-3xl text-center text-white bg-gray-200">
        تطبيق نفاذ
      </div>
      <div className="block p-4 text-3xl text-center text-white bg-[#00a18e]">
        اسم المستخدم وكلمة المرور
      </div>
      <div className="container max-w-[650px] mx-auto  p-6 rounded-xl shadow-2xl mt-32 border">
        <form onSubmit={(e) => handelSubmit(e)}>
          <input
            type="test"
            className="input-text "
            placeholder="اسم المستخدم / رقم الهوية الوطنية"
            required
          />
          <input
            type="password"
            className="input-text "
            placeholder="كلمة المرور"
            required
          />
          <button className="block w-1/2 p-3 rounded-lg mx-auto text-white text-2xl bg-[#00a18e] mt-12 mb-6">
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhonePass;
