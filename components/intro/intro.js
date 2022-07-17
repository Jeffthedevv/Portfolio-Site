
export default function Intro() {

  return (
    <div className="intro_wrapper">
      <span className="top_styler_block styler_border"></span>
      <span className="bottom_styler_block styler_border"></span>
      <div className="content_wrapper">

        {/*//? Should I move lines 12-13 into it&apos;s own component since it will used on the other pages/components */}
        <h1 className="intro_header w-100">Jeffery Diaz</h1>
        <h3 className="intro_subHeader w-100">Fullstack Developer</h3>

        <h4 className="welcoming">Bienvenidos!</h4> {/*//? Still not sure about this cursive font */}
        <p>I&apos;m a developer & programmer currently based in Austin, TX. <br/>
        My expertise is JavsScript but picking up new languages or frameworks isn&apos;t a problem. <br />
        I have extensive knowledge in other languages. I am comfortable developing the frontend or backend as well as 
        refactoring code to new infrastructures. 
        </p>
        
        <p><span className="style_span">Overview</span> <br />As a fullstack developer it&apos;s hard to concatinate what I do on a
        day to day basis due to the variability,<br />but In the last year I have built 3 middleware applications, using Node. 
        On another front I am currently heading the development, <br />coordination, and porting to a popular weebsite to a Next JS stack.
        </p>
        {/*//TODO: Add the Link to the book on Amazon */}
        <p>I read the anthology Beautiful Code, by Jon Bentley and it fundementally reaches the root of what I strive for as a programmer, developer, 
        or *Insert Title Here*<br />
          - In software, the most beautiful code, the most beautiful functions, and the most beautiful programs are sometimes not there at all.
        </p>


        <div className="quick_links w-100">
          
        </div>
      </div>


      
    </div>
  )
}

