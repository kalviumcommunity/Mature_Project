import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Front from "./Front";

function Post() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      const response = await fetch("http://localhost:8000/api1/inci", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
          description: data.description,
          
        }),
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (response.ok) {

       alert("got it")
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error( error);
      alert("Failed  Try again.");
    }
  };

  return (
    <Front>
   
      
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0F172A] to-black"> 
    
    <div className="bg-[#0F172A] text-white p-6 rounded-lg shadow-md w-180 h-110 flex items-center justify-center">
        <h2 className="text-lg font-bold mb-90  ">Create Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <textarea
            placeholder="Write your description here..."
            {...register("description", )}
            className="w-90 h-55 p-4 border rounded-md bg-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && <span className="text-red-500">{errors.description.message}</span>}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
    </Front>
  );
}

export default Post;
