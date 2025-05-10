import React from 'react';
import { useForm } from 'react-hook-form';
import Incidents_Homepage from './Incidents_Homepage';

const Incident_community = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      isPrivate: false,
      showOnProfile: true
    }
  });

  const nameValue = watch('name');
  const descValue = watch('description');

  const onSubmit = data => {
    console.log('Form Data:', data);
  };

  return (
    <Incidents_Homepage>
      <div className="flex justify-center items-start py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#16181c] text-white w-full max-w-md rounded-2xl p-6 shadow-lg"
        >
          {/* Header */}
          <h2 className="text-xl font-semibold mb-4">Create Community</h2>

          {/* Name field */}
          <div className="mb-4">
            <input
              type="text"
              {...register('name', {
                required: 'Name is required',
                maxLength: { value: 50, message: 'Max 50 characters' }
              })}
              placeholder="Name*"
              className={`w-full bg-[#202327] text-white p-3 rounded-md outline-none ${
                errors.name ? 'border border-red-500' : ''
              }`}
            />
            <div className="flex justify-between items-center mt-1 text-sm">
              {errors.name ? (
                <span className="text-red-500">{errors.name.message}</span>
              ) : <span />}
              <span className="text-gray-400">
                {nameValue.length}/50
              </span>
            </div>
          </div>

          {/* Description field */}
          <div className="mb-4">
            <textarea
              {...register('description', {
                maxLength: { value: 500, message: 'Max 500 characters' }
              })}
              placeholder="Description"
              className={`w-full bg-[#202327] text-white p-3 rounded-md outline-none h-24 resize-none ${
                errors.description ? 'border border-red-500' : ''
              }`}
            />
            <div className="flex justify-between items-center mt-1 text-sm">
              {errors.description ? (
                <span className="text-red-500">{errors.description.message}</span>
              ) : <span />}
              <span className="text-gray-400">
                {descValue.length}/500
              </span>
            </div>
          </div>

          {/* Make private toggle */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm">Make private</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register('isPrivate')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-checked:bg-blue-500 rounded-full transition-all duration-200" />
            </label>
          </div>

          {/* Show on profile toggle */}
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm">Show on profile</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register('showOnProfile')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-600 peer-checked:bg-blue-500 rounded-full transition-all duration-200" />
            </label>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Incidents_Homepage>
  );
};

export default Incident_community;
