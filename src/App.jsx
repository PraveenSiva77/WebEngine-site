
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TrustedBrands from './components/TrustedBrands'
import FeaturesSection from './components/FeaturesSection'
import IndustrySection from './components/IndustrySection'
import ClientStories from './components/ClientStories'
import BlogSection from './components/BlogSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <IndustrySection />
      <ClientStories />
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  )
}
