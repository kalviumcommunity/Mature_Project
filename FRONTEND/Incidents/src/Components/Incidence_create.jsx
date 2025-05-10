import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Incidents_Homepage from "./Incidents_Homepage";

import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Incident_Create = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaType, setMediaType] = useState('text'); // 'text', 'image', or 'video'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedMedia(URL.createObjectURL(file));
      if (file.type.startsWith('image/')) {
        setMediaType('image');
      } else if (file.type.startsWith('video/')) {
        setMediaType('video');
      }
    }
  };

  const onSubmit = async (data) => {
    if (!user || !user.username) {
      setSubmitStatus({ success: false, message: 'Please log in to create a post' });
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    const formData = new FormData();
    formData.append('description', data.description);
    formData.append('username', user.username);

    if (mediaType !== 'text' && data.media && data.media[0]) {
      formData.append('media', data.media[0]);
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/api/inci', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Post created successfully!' });
        reset();
        setSelectedMedia(null);
        setMediaType('text');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setSubmitStatus({ success: false, message: `Failed to create post: ${responseData.message || 'Unknown error'}` });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: `Error creating post: ${error.message}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Incidents_Homepage>
      <div className="flex flex-col items-center mt-6 mr-60">
        <h1 className="font-inria italic text-4xl text-white mb-6">
          Create Post
        </h1>

        <div className="flex gap-6 font-inria italic text-2xl text-white">
          <button
            className={`px-6 py-2 border border-black rounded-lg transition ${
              mediaType === 'text' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
            }`}
            onClick={() => setMediaType('text')}
            type="button"
          >
            Text
          </button>
          <button
            className={`px-6 py-2 border border-black rounded-lg transition ${
              mediaType === 'image' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
            }`}
            onClick={() => setMediaType('image')}
            type="button"
          >
            Image
          </button>
          <button
            className={`px-6 py-2 border border-black rounded-lg transition ${
              mediaType === 'video' ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
            }`}
            onClick={() => setMediaType('video')}
            type="button"
          >
            Video
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center mt-10"
      >
        <div className="w-[500px] min-h-[300px] border border-white rounded-lg p-4">
          <input
            {...register('description', { required: true })}
            type="text"
            placeholder="Write description"
            className="bg-transparent outline-none text-white placeholder-white w-full text-2xl mt-10 ml-2 opacity-60"
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-2">
              Description is required
            </p>
          )}

          {mediaType !== 'text' && (
            <div className="mt-4">
              <input
                {...register('media')}
                type="file"
                accept={mediaType === 'image' ? 'image/*' : 'video/*'}
                onChange={handleMediaChange}
                className="text-white"
              />
              {selectedMedia && (
                <div className="mt-4">
                  {mediaType === 'image' ? (
                    <img
                      src={selectedMedia}
                      alt="Preview"
                      className="max-w-full h-auto max-h-[200px] rounded-lg"
                    />
                  ) : (
                    <video
                      src={selectedMedia}
                      controls
                      className="max-w-full h-auto max-h-[200px] rounded-lg"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {submitStatus.message && (
          <div
            className={`mt-4 p-2 rounded ${
              submitStatus.success ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 px-4 py-1 bg-white text-black rounded-md border border-white text-sm hover:bg-opacity-80 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </Incidents_Homepage>
  );
};

export default Incident_Create;
