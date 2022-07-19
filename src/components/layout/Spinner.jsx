import SpinnerGif from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={SpinnerGif}
        alt="loading..."
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
