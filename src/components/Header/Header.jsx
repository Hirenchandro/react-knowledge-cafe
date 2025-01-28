
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 p-4 md:flex max-w-7xl mx-auto'>
             <h1 className='text-6xl'>Knowledge Cafe </h1>
             <img src={profile} alt="" />
        </header>
        
    );
};

export default Header;