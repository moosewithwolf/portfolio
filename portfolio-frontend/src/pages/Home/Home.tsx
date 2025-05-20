import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Activities from './Activities'

function Home() {
  return (
    <div className="space-y-24">
      <Hero />
      <Skills />
      <Projects />
      <Activities />
    </div>
  )
}

export default Home