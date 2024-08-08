const Profile = () => {
    return (
        <div className="flex items-start space-x-4">
            <div>
                <div className="text-white text-3xl font-bold text-right">Folke Johansson</div>
                <div className="text-gray-200 font-bold text-right">Software Developer</div>
            </div>
            <img src="/images/profile.png" className="w-20 h-20 rounded-full"/>
        </div>
    );
};

export default Profile;