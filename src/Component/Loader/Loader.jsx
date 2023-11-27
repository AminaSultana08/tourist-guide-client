import { Hourglass } from "react-loader-spinner";


const Loader = () => {
    return (
        <div>
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#3e0000', '#f80000']}
      />
        </div>
    );
};

export default Loader;