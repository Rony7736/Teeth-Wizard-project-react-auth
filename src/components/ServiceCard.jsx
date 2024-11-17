
const ServiceCard = ({ service }) => {
    console.log(service);
    const {id, treatment, image, description, cost} = service

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p title={description}>{description.slice(0, 100)}....</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;