import reactLogo from './assets/react.svg'
import data from './assets/sample_data.json'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>
          <img src={reactLogo}/>
          TutoBox
        </h1>
      </header>
      <main className="container">
        {data.tutorials.map((x, i) =>
          <TutorialPreview {...x} key={i} />
        )}
      </main>
    </>
  )
}

function TutorialPreview({heading, issued, section}) {
  return (
    <article>
      <header>
        <span className="tag"> {section} </span>
        <time> {issued} </time>
      </header>
      <h2>{heading}</h2>
    </article>
  )
}

export default App
