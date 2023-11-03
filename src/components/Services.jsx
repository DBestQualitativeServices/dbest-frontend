import PageWrapper from "./PageWrapper";
import Reveal from "../utils/Reveal";
import SectionHeader from "../utils/SectionHeader";

const Services = ({}) => {

    const services = [
        {
            id: "consultancy",
            name: "Consultancy",
            quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”",
            description: "Mauris gravida semper magna, nec fermentum odio volutpat in. Nulla vitae justo ligula. Fusce tempus semper metus, ac feugiat dolor lacinia ut. Sed quis ultrices justo. Sed aliquet lectus at nunc bibendum, nec suscipit arcu fringilla. In lobortis consequat odio, at ultricies nunc mattis non. Duis tincidunt risus non vestibulum ultrices."
        }, {
            id: "design",
            name: "Design",
            quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing.”",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin consectetur purus eget maximus feugiat. Vivamus id erat tincidunt, interdum nisl a, sollicitudin nunc. Integer auctor sagittis enim in cursus. Cras lacinia lacus vel mi placerat, a tempus nunc aliquet. Fusce vel mi vitae ipsum iaculis aliquam."
        }, {
            id: "development",
            name: "Development",
            quote: "“Lorem ipsum dolor sit amet, consectetur.”",
            description: "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur auctor diam sed efficitur commodo. Suspendisse eu est sed orci laoreet bibendum. Morbi tincidunt odio id scelerisque pellentesque. Etiam eu nunc sed orci feugiat pharetra a sit amet nisl. Vivamus commodo a justo ac facilisis."
        }, {
            id: "maintenance",
            name: "Maintenance",
            quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit.”",
            description: "Sed non magna vitae nisl dignissim egestas. Aliquam erat volutpat. Nulla facilisi. Vivamus vitae elit eu purus hendrerit feugiat in at dui. Nam euismod turpis id nisi varius, non fringilla nisi consequat. Fusce volutpat mauris ut diam consequat, at rhoncus elit efficitur. Proin a risus vel odio ultricies egestas."
        }, {
            id: "branding",
            name: "Branding",
            quote: "“Lorem ipsum dolor sit amet.”",
            description: "Integer at erat eget elit consectetur vehicula. In hac habitasse platea dictumst. Vivamus vel neque non purus vestibulum lacinia. Nam non velit vel turpis bibendum ullamcorper. Maecenas sagittis sapien a mauris elementum, nec iaculis elit fermentum. Morbi non nulla a odio iaculis egestas. Nam at neque in arcu interdum tempus."
        },
    ];

    return (
        <PageWrapper>
            <section className={"relative z-10 max-w-[1150px] mx-auto py-[7.2rem] sm:py-[9.6rem] overflow-hidden"}>
                <div className={"mx-[1rem]"}>
                    <Reveal width="100%">
                        <h4 className={"text-lg sm:text-xl text-center font-extrabold leading-none"}>
                            Services<span className={"text-brandColor"}>.</span>
                        </h4>
                    </Reveal>

                    <div className={"py-[3.1rem]"}></div>

                    {services.length !== 0 && services.map((service, index) => {
                        return (
                            <div key={service.id}>
                                <SectionHeader title={service.name} dir={index % 2 === 0 ? "l" : "r"}/>

                                <div className={"-mt-[1.2rem] mb-[2.4rem]"}>
                                    <Reveal width="100%">
                                        <div className={index % 2 === 0 ? "flex" : "flex justify-end"}>
                                            <span className={"text-brandColor text-xs font-bold"}>
                                                {service.quote}
                                            </span>
                                        </div>
                                    </Reveal>
                                </div>

                                <div className={"-mt-[1.2rem] mb-[4.8rem]"}>
                                    <Reveal width="100%">
                                        <div className={"flex "}>
                                            <span className={"text-xs font-thin"}>
                                                {service.description}
                                            </span>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </PageWrapper>
    )
}

export default Services