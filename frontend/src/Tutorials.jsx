import { Link } from 'react-router'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'
import data from './assets/sample_data.json'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Tutorials() {
  const tutorialsByRow = Object.values(
    Object.groupBy(data.tutorials, (x, i) => Math.floor(i/3))
  )
  return (
    <main className="container">
      {tutorialsByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <TutorialPreview {...y} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function TutorialPreview({id, heading, issued, section}) {
  return (
    <article>
      <header>
        <span className="tag"> {section} </span>
        <time> {dayjs(issued).fromNow()} </time>
      </header>
      <Link to={`/tutorials/${id}`}>
        <h2>{heading}</h2>
      </Link>
    </article>
  )
}

export default Tutorials
