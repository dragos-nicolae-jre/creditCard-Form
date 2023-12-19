import "./styles.css"
import FormCard from "./components/FormCard"

function App() {
  return (
    <>
      <section className="cardFormContainer  d-flex flex-column flex-lg-row">
        <div className="cardContainer">
          <div className="cardBox d-flex align-items-center justify-content-center flex-column">
            <picture className="w-100">
              <img
                srcSet="/images/card-back.png"
                width="380px"
                height="260px"
                alt="credit card black"
                className="cardBack img-fluid position-relative z-1"
              />

              <img
                srcSet="/images/card.png"
                width="380px"
                height="260px"
                alt="credit card black"
                className="cardFace img-fluid position-relative z-2"
              />
            </picture>
          </div>
        </div>
        <FormCard />
      </section>
    </>
  )
}

export default App
