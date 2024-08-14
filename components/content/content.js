import Welcoming from '../welcome/welcome';
import Bio from "../bio/bio";
import Skills from '../skills/skills';
import Labs from "../lab/labs"
import Contact from "../contact/contact"

const classNames = require('classnames');

export default function Content() {
  return (
    <div className="intro_wrapper">
    
      <span className="top_styler_block styler_border"></span>
      <span className="bottom_styler_block styler_border"></span>

      <div className="content_wrapper md-10">
        <Welcoming />
        <Bio />
        <Skills />
        <Labs />
        <Contact />
      </div>

    </div>
  )
}

