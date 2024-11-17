import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/banner";
import ServiceCard from "../components/ServiceCard";
import FeedBack from "../components/FeedBack";

const Home = () => {

    const services = useLoaderData()
    // console.log(services);

    const {servicesData, feedBackData} = services


    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-3xl font-bold text-center my-8">Services Section</h2>
                <div className="grid grid-cols-4 gap-6 my-8">

                    {
                        servicesData.slice(0, 6).map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                    }
                </div>
                <button className="bg-[#FFBE00] mb-10 py-2 px-4 rounded-lg font-bold text-white">
                    <NavLink to='/alltreatment'>Show More</NavLink>
                </button>

                <div>
                    <FeedBack feedBackData={feedBackData}></FeedBack>
                </div>
            </div>
        </div>
    );
};

export default Home;