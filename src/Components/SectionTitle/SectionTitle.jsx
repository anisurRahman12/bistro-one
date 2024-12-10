

const SectionTitle = ({heading, subheading}) => {
    return (
        <div>
            <h3>---{subheading}---</h3>
            <p className=" uppercase">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;