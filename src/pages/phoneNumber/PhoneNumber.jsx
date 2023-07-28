import { useNavigate } from "react-router";

const PhoneNumber = () => {
  const nav = useNavigate();
  const types = [
    "Zain",
    "STC",
    "Mobily",
    "Salam",
    "Virgin",
    "Lebrara",
    "Jawwy",
    "Go",
    "Tawal",
    "Channels",
    "Integrated Dawiyat",
  ];
  const handelSubmit = function (e) {
    e.preventDefault();
    nav("/verificationCode");
  };
  return (
    <div className="bg-white min-h-screen ">
      <div className="container flex justify-between mx-auto">
        <img
          src="https://th.bing.com/th/id/OIP.K9cNYQgXZiv3igwkbx7yGgHaEp?w=298&h=187&c=7&r=0&o=5&pid=1.7"
          alt=""
          className="h-24"
        />
        <img
          src="https://th.bing.com/th/id/OIP.viIbJQ5dxYsXwEwaY1fa4AHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7"
          alt=""
          className="h-24"
        />
      </div>
      <div className="container max-w-[650px] mx-auto  p-6 rounded-xl shadow-2xl mt-32">
        <h2 className="mt-6 mb-12 text-gray-900 text-2xl text-center font-semibold">
          يرجي ادخال رقم الهاتف الخاص بك
        </h2>
        <form onSubmit={(e) => handelSubmit(e)}>
          <select className="input-text text-xl">
            <option value="" disabled selected>
              اختيار نوع الشريحة
            </option>
            {types?.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
          <input
            type="text"
            className="input-text"
            required
            placeholder="ادخل رقم الهاتف"
          />
          <button className="block w-1/2 p-3 rounded-lg mx-auto text-white text-2xl bg-main mt-12 mb-6">
            اكمل
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumber;
