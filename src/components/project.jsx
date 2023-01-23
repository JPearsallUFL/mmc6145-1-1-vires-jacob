import styles from '../styles/portfolio.module.css'

export default function Project({title, info, image, project_url}){
   return (
        <div className={styles.project} >
            <h3 style={{color:'black'}}>{title}</h3>
            <p style={{color:'black'}}>{info}</p>
            <a className='button' href={project_url}>Check it out</a>
            <img src={image} alt="This is a preview of the project"/>
            <br/>
        </div>
    )
}