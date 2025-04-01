import React from 'react';
import { useNavigate } from "react-router-dom";

const Box = ({ description, id, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api1/inci/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete the entity');
      }

      onDelete(id);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleUpdate = () => {
    navigate(`/updateForm/${id}`);  // ✅ Pass `id` in URL
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center mb-5">
      <div className="relative">
        <div className="h-100 w-180 bg-amber-50 flex items-center justify-center rounded-2xl shadow-lg">
          {description}
        </div>
        <div className="flex gap-4 mt-2">
          <button
            className="bg-green-400 text-white rounded-xl px-4 py-2 shadow-md"
            onClick={handleUpdate}  // ✅ Navigate with `id`
          >
            Want to Update
          </button>

          <button
            className="bg-red-500 text-white rounded-xl px-4 py-2 shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

        <div className="absolute left-0 w-full border-t-2 border-amber-50 mt-2"></div>
      </div>
    </div>
  );
};

export default Box;
