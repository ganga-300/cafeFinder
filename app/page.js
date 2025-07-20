import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <TestimonialCarousel />
      <Footer />
    </>
  )
}