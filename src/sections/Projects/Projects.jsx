import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Shivam182004/TypingCast.git"
          h3="TypingCast"
          p="Typing Seep Test App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Shivam182004/blogzyy.git"
          h3="Blogzyy"
          p="Blog Application"
        />
        {/* <ProjectCard
          src={hipsster}
          link="https://github.com/Shivam182004/React-jobs.git"
          h3="React-jobs"
          p="React job aaplication using mock json server"
        /> */}
        <ProjectCard
          src={fitLift}
          link="https://github.com/Shivam182004/recipe_manager.git"
          h3="Recipe-manager"
          p="Recipe-manager App using node and postgreSQL"
        />
      </div>
    </section>
  );
}

export default Projects;
