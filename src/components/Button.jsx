const Button = ({ className }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6  font-medium text-lg text-primary bg-blue-gradient rounded-[10px] outline-none ${className}`}
    >
      Get Started
    </button>
  );
};

export default Button;
