/* eslint-disable react/prop-types */
const Header = ({ heading, subHeading }) => {
  return (
    <div className="max-w-lg mx-auto space-y-3">
      <p className="text-sm font-normal text-[#ffc235] border-b-2 pb-6">{heading}</p>
      <h2 className="text-4xl font-medium border-b-2 pb-6">{subHeading}</h2>
    </div>
  );
};

export default Header;
