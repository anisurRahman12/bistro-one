

const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <p>{name}------</p>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;