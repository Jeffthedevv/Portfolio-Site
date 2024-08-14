import styles from "../../styles/welcome.module.css"
const classNames = require('classnames')

export default function Welcoming() {
  return(
    <div className={styles.welcoming_wrapper} id="welcoming">
      <h1 className={`${styles.intro_header} w-100`}>Jeffery Diaz</h1>
      <h3 className={`${styles.intro_subHeader} w-100`}>Fullstack Developer</h3>
        <div className={styles.intro_paragrapth}>
          <p>Welcome to my portfolio! I am Jeffery Diaz, a passionate and solution-driven Full Stack Developer, proudly born and raised in New York. As a Hispanic developer, I bring a unique perspective and a rich cultural background to my work. With over 7 years of experience in building consumer-focused websites and applications, I have honed my skills in both front-end and back-end development.</p>
        </div>
    </div>  
  )
}