import React, { useState } from 'react';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border border-gray-300 p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full border border-gray-300 p-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-400 px-4 py-2 rounded text-white">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
