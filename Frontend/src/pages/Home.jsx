import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import MembershipPlans from "../components/MembershipPlans";
import TrainersSection from "../components/TrainersSection";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import CallToAction from "../components/CallToAction";
 import Footer from "../components/Footer";
// 
function Home() {
    return (
        <>
            <HeroSection />
            <Features />
            <MembershipPlans />
            <TrainersSection />
            <Testimonials />
            <Gallery/>
            <CallToAction/>
            <Footer/>
        </>
    );
}

export default Home;