import Projectsection from './Projectsection.jsx';
import Experience from './Experience.jsx';
import Feedbacks from './Feedbacks.jsx';
{/**import Projecthero from './Projecthero.jsx';*/}
const Projects = () => {
  return (
    <div
    style={{
      background: 'linear-gradient(135deg, #0B1B26 0%, #1a1a2e 35%, #16213e 70%, #0f1419 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
    }}>
      {/**<Projecthero />*/}
      <Projectsection />
      <Experience />
      <Feedbacks />
    </div>
  )
}

export default Projects;
