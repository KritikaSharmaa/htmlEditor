import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../redux/action/Action";
const Loading2 = () => {
  const cwidth = useSelector((state) => state.Reducer);
  const Dispatch = useDispatch();
  console.log("Render loading2");
  setTimeout(() => {
    Dispatch(Loading());
  }, 150);

  return (
    <>
      <div className="bg-black h-screen w-screen flex items-center">
        <div className=" w-full text-xl">
          Loading...{cwidth}%
          <div className=" h-5 w-screen border-2 border-teal-300 overflow-hidden">
            <div
              style={{ width: `${cwidth}%` }}
              className="h-5  bg-teal-500"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loading2;
