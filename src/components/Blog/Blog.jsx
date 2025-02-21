import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
   const {id,title,cover,author,author_img,posted_date, reading_time,hashtags}= blog
    return (
        <div className='mb-20 '>
            <img className='w-full mb-2 rounded' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-10' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    {reading_time} min read
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-600'
                    ><FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
           <h2 className='text-4xl'>{title}</h2> 
           {
            hashtags.map((hash,idx)=> <span key={idx}> <a href=""> #{hash}</a> </span>)
           }
           <div>
            <button 
            onClick={()=>handleMarkAsRead(id,reading_time)}
            className='text-purple-600'
            >Mark As Read</button>
           </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}


export default Blog;