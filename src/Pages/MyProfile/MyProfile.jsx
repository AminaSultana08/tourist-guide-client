import useAuth from "../../hooks/useAuth";


const MyProfile = () => {
    const {user} = useAuth()
    return (
        <div>
            my profile
        </div>
    );
};

export default MyProfile;