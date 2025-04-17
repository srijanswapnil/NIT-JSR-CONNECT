import React, { useState } from 'react';

const StudentInsights = () => {
  const [insights, setInsights] = useState([
    {
      id: 1,
      title: "How I Got My First Internship in 2nd Year",
      author: "Rohit Kumar • CSE '22",
      content: "Start early with DSA and contribute to open-source. I used LinkedIn and Twitter to reach out to recruiters...",
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Best Study Spots Around Campus",
      author: "Sneha Sinha • ECE '23",
      content: "If you love quiet, check out the library basement. For late-night study sessions, the LH terrace is a hidden gem.",
      likes: 0,
      comments: [],
    },
  ]);

  const [newInsight, setNewInsight] = useState({ title: '', author: '', content: '' });

  const [commentInputs, setCommentInputs] = useState({});

  // Handle form input for new insight
  const handleChange = (e) => {
    setNewInsight({ ...newInsight, [e.target.name]: e.target.value });
  };

  // Submit new insight
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newInsight.title || !newInsight.author || !newInsight.content) return;

    const newEntry = {
      ...newInsight,
      id: Date.now(),
      likes: 0,
      comments: [],
    };

    setInsights([newEntry, ...insights]);
    setNewInsight({ title: '', author: '', content: '' });
  };

  // Toggle like
  const toggleLike = (id) => {
    setInsights((prev) =>
      prev.map((insight) =>
        insight.id === id
          ? { ...insight, likes: insight.likes + 1 }
          : insight
      )
    );
  };

  // Handle comment input change
  const handleCommentChange = (id, value) => {
    setCommentInputs({ ...commentInputs, [id]: value });
  };

  // Submit comment
  const submitComment = (id) => {
    const comment = commentInputs[id];
    if (!comment) return;

    setInsights((prev) =>
      prev.map((insight) =>
        insight.id === id
          ? { ...insight, comments: [...insight.comments, comment] }
          : insight
      )
    );
    setCommentInputs({ ...commentInputs, [id]: '' });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
  <h1 className="text-4xl font-extrabold mb-4 text-center text-gray-800">🎓 Student Insights</h1>
  <p className="text-center text-gray-600 text-lg mb-12">
    Discover experiences, tips, and hacks shared by your seniors at NIT Jamshedpur.
  </p>

  {/* Form */}
  <div className="bg-white border  border-gray-200 rounded-2xl shadow-md p-6 mb-14">
    <h2 className="text-2xl font-bold mb-5 text-gray-800">✍️ Share Your Own Insight</h2>
    <form onSubmit={handleSubmit} className="space-y-5 m-10">
      <div>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newInsight.title}
        onChange={handleChange}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      </div>
      <div>
      <input
        type="text"
        name="author"
        placeholder="Your Name • Branch 'Year"
        value={newInsight.author}
        onChange={handleChange}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      </div>
      <div>
      <textarea
        name="content"
        rows="4"
        placeholder="Your experience, tips or message..."
        value={newInsight.content}
        onChange={handleChange}
        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
      ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow"
      >
        🚀 Submit Insight
      </button>
    </form>
  </div>

  {/* Insights List */}
  <div className="space-y-10">
    {insights.map(({ id, title, author, content, likes, comments }) => (
      <div
        key={id}
        className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-3">{author}</p>
        <p className="text-gray-700 mb-5">{content}</p>

        {/* Like */}
        <div className="flex items-center gap-3 mb-5">
          <button
            onClick={() => toggleLike(id)}
            className="text-red-600 font-medium hover:underline"
          >
            ❤️ Like
          </button>
          <span className="text-sm text-gray-600">{likes} like{likes !== 1 ? 's' : ''}</span>
        </div>

        {/* Comments */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">💬 Comments</h3>
          <ul className="space-y-2 mb-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg border-l-4 border-blue-500 text-gray-700"
              >
                {comment}
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={commentInputs[id] || ''}
              onChange={(e) => handleCommentChange(id, e.target.value)}
              className="flex-1 p-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              onClick={() => submitComment(id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default StudentInsights;
