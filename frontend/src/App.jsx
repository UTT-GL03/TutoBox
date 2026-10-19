import reactLogo from './assets/react.svg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'
import './App.css'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function App() {
  const tutorialsByRow = Object.values(
    Object.groupBy(data.tutorials, (x, i) => Math.floor(i/3))
  )
  return (
    <>
      <header>
        <h1>
          <img src={reactLogo}/>
          TutoBox
        </h1>
      </header>
      <main className="container">
        {tutorialsByRow.map((x, i) =>
          <div key={i} className="grid">
            {x.map((y, j) =>
              <TutorialPreview {...y} key={j} />
            )}
          </div>
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
        <time> {dayjs(issued).fromNow()} </time>
      </header>
      <h2>{heading}</h2>
    </article>
  )
}

export default App
