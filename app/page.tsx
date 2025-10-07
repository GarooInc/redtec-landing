import { Header } from '@/components/organisms/NavBar'
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/atoms/Button';

const page = () => {
  return (
    <main className="min-h-screen ">
      <section className="relative h-screen xl:px-40 md:px-20 sm:px-10 px-5">
        {/* background mobile */}
        <img
          src="/assets/images/bg/mobile-homepage.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover block md:hidden -z-10"
        />
        {/* background desktop */}
        <img
          src="/assets/images/bg/desktophomepage.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover hidden md:block -z-10"
        />
        <Header />
        <div className='xl:pt-20 md:pt-16 pt-10'>
          <HeroSection
          title="AI Agents That Work While You Think."
          description="Custom-built and pre-configured agents to 
          automate, analyze, and act, for teams that 
          want to work smarter, not harder."
          align="left"
          imageUrl="/assets/images/sections/s1_banner_img.png"
          imagePosition="right"
          buttons={
            <>
              <Button variant="secondary" size="md">
                Get Started
              </Button>
              <Button variant="outline" size="md">
                Watch Demo
              </Button>
            </>
            
          }
          extraContent={
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Discover the RedTec solutions</span>
            </div>
          }
        />
        </div>
      </section>
      <section className="relative xl:px-40 md:px-20 sm:px-10 px-5">
        <div className='xl:pt-20 md:pt-16 pt-10'>
          <HeroSection
          title={`More Than AI. 
            A New Way to Work.`}
          description={
            `At RedTec, we build intelligent agents and automation 
            tools that transform how businesses operate. 

            Our technology makes AI truly actionable — helping 
            you move from reactive to proactive, and from 
            complex to simple.

            We offer both custom AI solutions and a suite of prebuilt 
            agents, already optimized for real-world challenges. 
            `
          }
          align="left"
          imageUrl="/assets/images/sections/s2_banner_img.png"
          imagePosition="right"
          buttons={
            <>
              <Button variant="secondary" size="md">
                 Explore our agents
              </Button>
            </>
            
          }
        />
        </div>
      </section>   
    </main>
  )
}

export default page