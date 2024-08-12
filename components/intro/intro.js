import Image from 'next/image'

const classNames = require('classnames');

export default function Intro() {
  return (
    <div className="intro_wrapper">
    
      <span className="top_styler_block styler_border"></span>
      <span className="bottom_styler_block styler_border"></span>

      <div className="content_wrapper">
        <h1 className="intro_header w-100">Jeffery Diaz</h1>
        <h3 className="intro_subHeader w-100">Fullstack Developer</h3>
        <div className="intro_paragrapth">
          <p>Welcome to my portfolio! I am Jeffery Diaz, a passionate and solution-driven Full Stack Developer, proudly born and raised in New York. As a Hispanic developer, I bring a unique perspective and a rich cultural background to my work. With over 7 years of experience in building consumer-focused websites and applications, I have honed my skills in both front-end and back-end development.</p>
        </div>
        <div className="quick_links w-100">   
        </div>
      

        <div >

          <h1 className="w-100 mb-4">About Me</h1>

          <div className={""}>
            <p>My journey in technology started young when my father brough home a Compact PC and I became obsessed with trying to figure out how it worked.
              I remember waiting for him to leave to work so I could take apart the computer. From molex cables to 40pin connectors, I was mezmoriezed with how those
              physical lumps of metal and wires could do so much. And before you ask, yes I did get into huge trouble!
            </p>
            <p>
              Over the years I went from learning about the hardware and transitioned to software, where I quickly learned it&apos;s what I wanted to do as a career.
              I have developed a diverse skill set that includes expertise in JavaScript, TypeScript, React, Node.js, PHP, and various databases such as MySQL,
              MongoDB, and MariaDB. My commitment to continuous learning and staying updated with the latest industry trends has all been for the love of what I do. 
            </p>
          </div>

          {"//TODO images need to be wraped and the wrapper then modified not the image obj"}

          <span>
            <Image 
              src={'https://szqedxclwixl0drf.public.blob.vercel-storage.com/me-kE3ZdqJNY1eiah7luhPdxGuwgiO12d.jpg'}
              
             
              height={300}
              width={275}
              alt="Jeffery Diaz"
            />  
            <Image  
              src={'https://szqedxclwixl0drf.public.blob.vercel-storage.com/samson-me-bIMGLYZL6nqTyd8tJZRBR037lBAGzk.jpg'}
              
             
              height={300}
              width={275}
              alt="Samson and Me"
            />
          </span>

          <div className="quick_links w-100">   
          </div>
        </div>


        <div>
          <h1>Skills Component</h1>
          <div className="quick_links w-100">
          </div>
        </div>


        <div>
          <div>
            <h1>Lab Component</h1>
          </div>
        </div>


        
        <div>
          <h1>Contact Component</h1>
        </div>
        

      </div>

    </div>
  )
}

