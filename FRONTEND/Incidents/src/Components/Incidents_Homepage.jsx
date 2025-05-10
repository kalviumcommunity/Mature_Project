import React, { useState, useEffect } from "react";
import account from "../assets/account_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import notification from "../assets/notifications_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import create from "../assets/add_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import Ilogo from "../assets/Screenshot from 2025-04-05 11-53-33.png";
import home from "../assets/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import trending from "../assets/trending_up_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import explore from "../assets/explore_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import add from "../assets/add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import i from "../assets/image.png";
import help from "../assets/help_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import book from "../assets/import_contacts_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import rule from "../assets/gavel_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import policy from "../assets/policy_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const Incidents_Homepage = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/inci/all');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        const sortedPosts = data.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sortedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white">
      <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-2 border-b border-white/20">
        <img src={Ilogo} className="w-24 h-14" alt="Logo" />

        <div className="flex-1 flex justify-center order-3 md:order-none">
          <div className="flex items-center space-x-2 bg-[#a09696] rounded-full px-4 py-2 w-full max-w-sm">
            <input
              type="text"
              placeholder="Search Incidents"
              className="bg-transparent outline-none text-white placeholder-white w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/create">
            <img src={create} className="w-7 h-7" alt="Create" />
          </Link>
          <img src={notification} className="w-7 h-7" alt="Notification  " />
          <img src={account} className="w-7 h-7" alt="Account" />
        </div>
      </nav>

      <div className="flex flex-col md:flex-row">
        <aside className="hidden md:block w-60 border-r border-white/20 h-screen px-4 py-6 space-y-6 overflow-y-auto">
          <div className="space-y-4">
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
              <img src={home} className="w-8 h-8 mr-3 mb-1" />
              Home
            </button>
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
              <img src={trending} className="w-8 h-8 mr-2 mb-1" />
              Trending
            </button>
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
              <img src={explore} className="w-8 h-8 mr-2 mb-1" />
              Explore
            </button>
          </div>

          <div className="flex items-center justify-between px-4 py-2 border-b border-white/20" />

          <div>
           
            <h2 className="text-sm text-white/50 uppercase mb-2">Communities</h2>
            <Link to="/community">
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2 hover:bg-gray-600">
              <img src={add} className="w-8 h-8" />
              Add communities
              
            </button>
            </Link>
           
          </div>

          <div className="flex items-center justify-between px-4 py-2 border-b border-white/20" />

          <div>
            <h2 className="text-sm text-white/50 uppercase mb-2">Resources</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
                <img src={i} className="w-8 h-12 mr-2" />
                About incidence
              </button>
              <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
                <img src={help} className="w-10 h-10 mr-2" />
                Help
              </button>
              <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
                <img src={book} className="w-10 h-10 mr-2 ml-1" />
                Blog
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-2 border-b border-white/20" />

          <div className="space-y-2">
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
              <img src={rule} className="w-10 h-10 mr-2" />
              Incident Rules
            </button>
            <button className="w-full flex items-center space-x-2 bg-black border border-white/20 rounded-[10px] px-4 py-2  hover:bg-gray-600">
              <img src={policy} className="w-8 h-8 mr-2 ml-1" />
              Privacy and Policy
            </button>
          </div>
        </aside>

        <main className="flex-1 h-screen overflow-y-auto px-2 py-4">
          {props.children ? (
            props.children
          ) : (
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Recent Posts</h1>
              
              {loading ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                  <p className="mt-2">Loading posts...</p>
                </div>
              ) : error ? (
                <div className="bg-red-900 text-white p-4 rounded-lg">
                  {error}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <p>No posts yet. Be the first to create one!</p>
                  <Link to="/create" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Create Post
                  </Link>
                </div>
              ) : (
                <div>
                  {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Incidents_Homepage;