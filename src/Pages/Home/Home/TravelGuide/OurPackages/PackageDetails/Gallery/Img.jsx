

const Img = ({item} ) => {
    const{image}=item
    return (
        <div>
            <img src={image} alt=""/>
        </div>
    );
};

export default Img;