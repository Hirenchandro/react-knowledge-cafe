import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title,cover,author,author_img,posted_date, reading_time,hashtags}= blog
    return (
        <div>
            <img className='w-2/4 mb-2 rounded' src={cover} alt={`cover picture of the title ${title}`} />
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
                </div>
            </div>
           <h2 className='text-4xl'>{title}</h2> 
           {
            hashtags.map((hash,idx)=> <span key={idx}> <a href=""> #{hash}</a> </span>)
           }
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}


export default Blog;