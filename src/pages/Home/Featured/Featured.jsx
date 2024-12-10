import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item">
            <SectionTitle subheading="check it out" heading="Featured Item"></SectionTitle>
            <div className="flex ">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <p>Aug 20,2029</p>
                    <p>When can i get some</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet consequatur error maxime nisi aut non culpa sapiente veniam rem repudiandae maiores asperiores sed odit, ex, ipsum blanditiis velit quae magni.</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;