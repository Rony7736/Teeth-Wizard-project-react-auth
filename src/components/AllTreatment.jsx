import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const AllTreatment = () => {
    const services = useLoaderData()


    return (
        <div>
            <h2 className="text-center font-bold text-3xl py-6">All Treatments are Here</h2>
            <div className="grid grid-cols-4 gap-6 my-8">

                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllTreatment;