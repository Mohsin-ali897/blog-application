'use client'
import React, { useEffect, useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState<string[]>([]);

  const addComment = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...allComments, comment];
      setAllComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setAllComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Comments
      </h1>
      
      {/* Input Box */}
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Write your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 bg-gray-100"
        />
        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          onClick={addComment}
        >
          Add Comment
        </button>
      </div>

      {/* Comment List */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          All Comments
        </h2>
        {allComments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-3">
            {allComments.map((data, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 border border-gray-300 rounded-lg"
              >
                {data}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
