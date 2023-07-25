import { useState } from 'react';

const Post = ({ post }) => {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(!saved);
    };

    return (
        <div className="post-card bg-gray-800 text-white rounded-lg p-6 shadow-lg">
            <div className="post-header flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{post.community}</h2>
                <p className="text-sm text-gray-400">Posted by {post.user}</p>
            </div>
            <div className="post-title mb-4">
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400">
                    {post.type === 'topic' && '#'}
                    {post.type === 'app' && '@'}
                    {post.type === 'component' && '<>'}
                    {post.name}
                </p>
            </div>
            <p className="text-sm text-gray-400 mb-4">{post.reason}</p>
            <div className="post-preview mb-4">
                <p className="mb-2">{post.previewText}</p>
                {post.previewImage && <img src={post.previewImage} alt="Preview" className="w-full h-64 object-cover rounded-lg" />}
            </div>
            <div className="post-footer flex justify-between items-center">
                <div className="comment-box">
                    <p className="text-sm text-gray-400">{post.comments} comments</p>
                </div>
                <div className="actions">
                    <button onClick={handleSave} className={`mr-2 py-1 px-3 rounded ${saved ? 'bg-red-500' : 'bg-gray-700'}`}>{saved ? 'Unsave' : 'Save'}</button>
                    <button className="py-1 px-3 rounded bg-gray-700">React</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
