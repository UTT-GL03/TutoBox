import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Tutorial() {
  const {id} = useParams()
  const [tutorial, setTutorial] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => {
        const item = data.tutorials.find(x => String(x.id) === String(id) || x.issued === id)
        setTutorial(item)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <main className="container">
        <p>Chargement du tutoriel...</p>
      </main>
    )
  }

  if (!tutorial) {
    return (
      <main className="container">
        <p>Tutoriel introuvable.</p>
      </main>
    )
  }

  const {heading, creator, issued, section, eco_metrics, written_guide} = tutorial

  return (
    <main className="container">
      <article>
        <header>
          <span className="tag">{section}</span>
          <h2>{heading}</h2>
          <address>{creator.name}</address>
          <time>{dayjs(issued).format('LLLL')}</time>
        </header>

        <section>
          <small>
            Résolution : {eco_metrics.default_resolution} | Transfert estimé : {eco_metrics.data_transferred_mb} Mo | Empreinte : {eco_metrics.co2e_grams} gCO₂e
          </small>
        </section>

        <section>
          <h3>Fiche pratique étape par étape</h3>
          {written_guide.map((x, i) =>
            <p key={i}>
              {x}
            </p>
          )}
        </section>
      </article>
    </main>
  )
}

export default Tutorial
