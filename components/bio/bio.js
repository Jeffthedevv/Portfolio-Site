import bio from '../../styles/bio.module.css';

const classNames = require('classnames');

export default function Bio() {
  return (
    <div className={classNames(bio.bio_wrapper)}>
      <span className={classNames(bio.styler_border, bio.top_styler_block)}></span>
      <span className={classNames(bio.styler_border, bio.bottom_styler_block)}></span>

      <div className={classNames(bio.content_wrapper)}>
        <h1>Bio Component</h1>
        <div className="quick_links w-100">   
        </div>
      </div>

    </div>
  )
}