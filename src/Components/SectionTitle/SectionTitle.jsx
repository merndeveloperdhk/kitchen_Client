

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-12 mb-4 md:my-6">
            <h2 className="text-md md:text-xl pb-2 text-yellow-500">{subHeading}</h2>
            <h1 className="text-2xl md:text-4xl font-bold border-y-2 py-1 w-60 md:w-96 mx-auto">{heading}</h1>
        </div>
    );
};

export default SectionTitle;