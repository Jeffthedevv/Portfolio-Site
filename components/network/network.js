import contact from "../../styles/contact.module.css";

const classNames = require("classnames");

export default function Network() {
  return(
    <div className={classNames(contact.contact_wrapper)}>
    
      <span className={classNames(contact.top_styler_block)}></span>
      <span className={classNames(contact.bottom_styler_block)}></span>

      <div className={classNames(contact.content_wrapper)}>
        <h1>Contact Component</h1>
      </div>

    </div>
  )
}