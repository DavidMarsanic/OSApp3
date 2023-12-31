import { FaComment, FaRegHeart, FaRegBookmark } from 'react-icons/fa';
import Image from 'next/image';

function Post({ post }) {
    let borderColor, textColor;

    switch (post.type) {
        case 'topic':
            borderColor = 'border-purple-500';
            textColor = 'text-purple-500';
            break;
        case 'app':
            borderColor = 'border-blue-500';
            textColor = 'text-blue-500';
            break;
        case 'component':
            borderColor = 'border-yellow-500';
            textColor = 'text-yellow-500';
            break;
        default:
            borderColor = 'border-white';
            textColor = 'text-white';
    }

    return (
        <div className="bg-gray-800 p-4 rounded-lg my-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="text-sm">Posted by {post.user} in</span>
                    <span className={`mx-1 px-2 py-1 rounded-full ${borderColor} ${textColor} border text-sm inline-flex items-center`}>
                        {post.icon} {post.community}
                    </span>
                </div>
                <span className="px-2 py-1 rounded-full border border-white text-white text-sm">{post.reason}</span>
            </div>
            <h2 className="text-white text-xl leading-normal mb-2">{post.title}</h2>
            <Image
                src={post.image}
                alt={post.title}
                width={500} // Replace with your desired width
                height={300} // Replace with your desired height
                className="object-cover mb-2"
            />
            <p className="text-gray-400 text-lg leading-loose mb-4">{post.previewText}</p>
            <div className="flex items-center">
                <div className="flex items-center text-gray-400 text-sm">
                    <FaComment className="mr-1" /> {post.comments}
                </div>
                <button className="flex items-center text-gray-400 text-sm ml-4">
                    <FaRegHeart className="mr-1" /> {post.likes}
                </button>
                <button className="flex items-center text-gray-400 text-sm ml-4">
                    <FaRegBookmark className="mr-1" /> {post.saves}
                </button>
            </div>
            <div className="mt-4">
                {/* <p className="text-gray-400">{post.topComment}</p> */}
            </div>
        </div>
    );
}

export default Post;
