import { CheckIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";

function ExerciseInput({
  number,
  name,
  weight,
  reps,
  sets,
  restInterval,
  changeEditMode,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100">
      <form
        className="flex justify-center text-white transform ease-in hover:scale-105  transition duration-100"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="p-2 bg-gray-900 rounded-tl-lg rounded-bl-lg text-2xl font-bold">
          <div>
            <input
              className="w-12 text-black"
              type="number"
              min="1"
              placeholder={number}
              {...register("number", {})}
            />
          </div>
        </div>
        <div className="flex-1 z-20 p-2 bg-gray-100 text-black">
          <div className="p-2 flex-1">
            <div>
              <input
                className="text-lg font-bold flex-1"
                type="text"
                placeholder={name}
                {...register("name", {})}
              />
            </div>
            <div>
              Peso:{" "}
              <input
                className="w-20 text-center"
                type="number"
                placeholder={weight}
                {...register("weight", {})}
              />{" "}
              kg
            </div>
            <div>
              Repetições:{" "}
              <input
                className="w-20 text-center"
                type="number"
                placeholder={reps}
                {...register("reps", {})}
              />
            </div>
            <div>
              Sets:{" "}
              <input
                className="w-20 text-center"
                type="number"
                placeholder={sets}
                {...register("sets", {})}
              />
            </div>
            <div>
              Descanço:{" "}
              <input
                className="w-20 text-center"
                type="number"
                placeholder={restInterval}
                {...register("restInterval", {})}
              />{" "}
              s
            </div>
          </div>
        </div>
        <button
          className="flex justify-center items-center p-2 bg-green-100 hover:bg-green-400 text-gray-500 hover:text-black rounded-tr-lg rounded-br-lg"
          type="submit"
          onClick={() => {
            changeEditMode();
          }}
        >
          <div className="flex-1">
            <CheckIcon width={30} height={30} />
          </div>
        </button>
      </form>
    </div>
  );
}

export default ExerciseInput;
