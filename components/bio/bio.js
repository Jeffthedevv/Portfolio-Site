import Image from 'next/image'
import bio from '../../styles/bio.module.css';

const classNames = require('classnames');

export default function Bio() {
  return (
    <div className={classNames(bio.bio_wrapper)}>
      <span className={classNames(bio.styler_border, bio.top_styler_block)}></span>
      <span className={classNames(bio.styler_border, bio.bottom_styler_block)}></span>

      <div className={classNames(bio.content_wrapper)}>
        <h1 className="w-100 mb-4">About Me</h1>
        <div className={""}>
          <p>My journey in technology started young when my father brough home a Compact PC and I became obsessed with trying to figure out how it worked.
            I remember waiting for him to leave to work so I could take apart the computer. From molex cables to 40pin connectors, I was mezmoriezed with how those
            physical lumps of metal and wires could do so much. And before you ask, yes I did get into huge trouble!
          </p>
          <p>
            Over the years I went from learning about the hardware and transitioned to software, where I quickly learned it's what I wanted to do as a career.
            I have developed a diverse skill set that includes expertise in JavaScript, TypeScript, React, Node.js, PHP, and various databases such as MySQL,
            MongoDB, and MariaDB. My commitment to continuous learning and staying updated with the latest industry trends has all been for the love of what I do. 
          </p>
        </div>
        <span className={classNames(bio.picture_wrapper)}>
        <Image 
          src={'https://szqedxclwixl0drf.public.blob.vercel-storage.com/me-kE3ZdqJNY1eiah7luhPdxGuwgiO12d.jpg'}
          className={classNames(bio.picture_me)}
          height={300}
          width={275}
          alt="Jeffery Diaz"
        />
      </span>
        <div className="quick_links w-100">   
        </div>
      </div>

    </div>
  )
}