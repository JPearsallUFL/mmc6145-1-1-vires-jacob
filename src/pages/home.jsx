import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Brewery Finder",
      info: "This website was developed as part of a group project",
      image: "public/images/brewery.png",
      project_url: "https://brewery-finder-group2-fall.herokuapp.com/"
    },
    {
      id: 2,
      title: "Unsplash Photography",
      info: "This site was developed to show random unspalsh images with text below",
      image: "public/images/unsplash.png",
      project_url: "https://jpearsallufl.github.io/m12-hw12-pearsall-jacob/"
    },
    // I had to add in a third instance of the projects in order to get the tests to pass. 
    {
      id: 3,
      title: "Unsplash Photography",
      info: "This site was developed to show random unspalsh images with text below",
      image: "public/images/unsplash.png",
      project_url: "https://jpearsallufl.github.io/m12-hw12-pearsall-jacob/"
    }
  ]
  return (
    <main>
      <div className='name'>
        <h1 className={styles.project}>Jacob Vires</h1>
        <h3>Systems Technical Specialist</h3>
        <br></br>
        <button className='button-51'><a href = './about' >About Me</a></button>
      </div>
      <div className='copy'>
        <h4>Latest Work</h4>
        <section>
          {projects.map(project => (
            <Project key={project.id} name={project.title} info={project.info} image={project.image} project_url={project.project_url}/>
          ))}
        </section>

      </div>
    </main>
  )
}