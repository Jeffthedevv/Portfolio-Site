import skills from '../../styles/skills.module.css';

const classNames = require('classnames');

export default function Skills() {
  return (
    <div className={classNames(skills.skills_wrapper)}>
      <span className={classNames(skills.top_styler_block)}></span>
      <span className={classNames(skills.bottom_styler_block)}></span>

      <div className={classNames(skills.content_wrapper)}>
        <h1>Skills Component</h1>
        <div className="quick_links w-100">
        </div>
      </div>

    </div>
  )
}