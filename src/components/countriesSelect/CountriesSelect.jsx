import { data } from "./values";
const CountriesSelect = ({ holder, setValue }) => {
  return (
    <div>
      <select
        className="input-text text-2xl"
        required
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="" disabled selected>
          {holder}
        </option>
        {data?.map((item) => (
          <option value={item.value}>{item.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CountriesSelect;
