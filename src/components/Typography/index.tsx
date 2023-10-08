const typography = {
  H1: "text-[64px] font-bold",
  H2: "text-7xl font-bold",
  H3: "text-5xl font-semibold leading-10",
  H4: "text-3xl font-semibold leading-10",
  H5: "text-2xl font-normal leading-9",
  H6: "text-lg font-normal leading-[30px]",
  body: "text-base font-normal leading-5",
  bodySmall: "text-sm font-normal leading-5",
  button: "text-lg font-medium leading-6",
};

export default typography;

const _ = () => {
  return (
    <div>
      {/* H1 */}
      <div className="text-[64px] font-bold" />
      {/* H2 */}
      <div className="text-7xl font-bold" />
      {/* H3 */}
      <div className="text-5xl font-semibold leading-10" />
      {/* H4 */}
      <div className="text-3xl font-semibold leading-10" />
      {/* H5 */}
      <div className="text-2xl font-semibold leading-9" />
      {/* H6 */}
      <div className="text-lg font-normal leading-[30px]" />
      {/* Body */}
      <div className="text-base font-normal leading-5" />
      {/* Body Small */}
      <div className="text-sm font-normal leading-5" />
      {/* Button */}
      <div className="text-lg font-medium leading-6" />
    </div>
  );
};
