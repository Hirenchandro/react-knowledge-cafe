import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md: w-1/3 bg-gray-300 ml-4 mt-2 p-4 border-2 border-black rounded-3xl">
            <div className=" bg-purple-100 rounded-xl mb-3 p-3">
                <h3 className="text-2xl text-center text-purple-600">Spent Time on Read: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blog: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark,idx)=>
                <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;