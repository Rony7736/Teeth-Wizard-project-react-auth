import { useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import ServiceCard from "../components/ServiceCard";

const Home = () => {

    const services = useLoaderData()
    // console.log(services);
    

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;