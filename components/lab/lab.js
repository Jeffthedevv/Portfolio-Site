import lab from "../../styles/lab.module.css";

const classNames = require('classnames');


export default function Lab() {
  return (
    <div className={classNames(lab.lab_wrapper)}>
      <span className={classNames(lab.top_styler_block)}></span>
      <span className={classNames(lab.bottom_styler_block)}></span>

      <div className={classNames(lab.content_wrapper)}>
        <h1>Lab Component</h1>
      </div>
    </div>
  )
}