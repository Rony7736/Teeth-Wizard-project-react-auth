
const ServiceCard = ({ service }) => {
    // console.log(service);
    const {id, treatment, image, description, cost} = service

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="h-60">
                    <img className="h-72 w-full rounded-lg" src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {treatment}
                        <div className="badge badge-secondary">${cost}</div>
                    </h2>
                    <p title={description}>{description.slice(0, 100)}....</p>
                    <div className="card-actions justify-end">
                        <button className="badge badge-outline bg-green-300 p-4">Cheakout More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;