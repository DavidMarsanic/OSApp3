import { FaComment, FaRegSave, FaArrowUp } from 'react-icons/fa';

function Post({ post }) {
    let borderColor, textColor;

    switch (post.icon) {
        case '#':
            borderColor = 'border-blue-500';
            textColor = 'text-blue-500';
            break;
        case '@':
            borderColor = 'border-green-500';
            textColor = 'text-green-500';
            break;
        case '<>':
            borderColor = 'border-red-500';
            textColor = 'text-red-500';
            break;
        default:
            borderColor = 'border-white';
            textColor = 'text-white';
    }

    return (
        <div className="bg-gray-800 text-white p-6 my-4 rounded-md shadow-md">
            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                    Posted by {post.user} in
                    <span className={`inline-block align-middle ${borderColor} ${textColor} rounded px-2 py-1 ml-1`}>{post.icon} {post.community}</span>
                </div>
                <div className="text-sm text-gray-400">
                    <span className="inline-block align-middle border border-white text-white rounded px-2 py-1 ml-1">{post.reason}</span>
                </div>
            </div>
            <div className="mt-2">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="mt-4">{post.previewText}</p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <FaComment />
                        <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaRegSave />
                        <span>Save</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaArrowUp />
                        <span>Upvote</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
