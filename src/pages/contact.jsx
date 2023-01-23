import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <main>
      <p>Let's get in touch!</p>
      <div className='copy'>
        <h3>I'm currently a student at the University of Florida!</h3>
        <br />
        <p>Cell: <a href = "tel:4077162928">407-716-2928</a> Email: <a href = "mailto: jacob.vires@gmail.com">jacob.vires@gmail.com</a>
        </p>
        <br />
        <p>If you'd like to get in touch with me, you can always reach me by email.</p>
        <br />
        <p>
            Here are my socials as well.
            <ul>
                <li><a href="https://github.com/JPearsallUFL">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jacob-vires-0a07684b/">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/jacob.vires/">Facebook</a></li>

            </ul>
        </p>
      </div>
    </main>
  )
}