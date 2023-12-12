import "./styles.css"
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"

function App() {
  const initialValues = {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  }

  const onSubmit = (values) => {
    console.log("onSubmit", values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("This is an important field."),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Wrong format, please use numerical format.")
      .min(8, "Too Short!")
      .required("This is an important field."),
    month: Yup.string().required("Can't be blank."),
    year: Yup.string().required("Can't be blank."),
    cvc: Yup.string().required("Can't be blank."),
  })

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
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {() => (
            <div className="d-flex formContainer justify-content-center align-items-center flex-column">
              <Form className="formBox d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex flex-column mb-3 gap-2">
                  <label className="labelForm mb-1" name="name">
                    CARDHOLDER NAME
                  </label>
                  <Field
                    className="fieldBox"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Jane Appleseed"
                  />

                  <ErrorMessage
                    className="error"
                    name="name"
                    component="span"
                  />
                </div>
                <div className="d-flex flex-column mb-3 gap-2">
                  <label className="labelForm mb-1" name="number">
                    CARD NUMBER
                  </label>
                  <Field
                    className="fieldBox"
                    type="tel"
                    pattern="[\d| ]{16,22}"
                    id="number"
                    name="number"
                    placeholder="123 5678 1234 5678"
                    maxLength="19"
                  />

                  <ErrorMessage
                    className="error"
                    name="number"
                    component="span"
                  />
                </div>
                <label className="labelFormDate" name="expDateCvC">
                  EXPIRE DATE (MM / YY) CVC
                </label>
                <div className="d-flex dateContainer flex-column flex-lg-row gap-2">
                  <div className="d-flex flex-column gap-2">
                    <Field
                      className="fieldBoxDate"
                      id="month"
                      name="month"
                      as="select"
                    >
                      <option value="month">Month</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </Field>
                    <ErrorMessage
                      className="error"
                      name="month"
                      component="span"
                    />
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <Field
                      className="fieldBoxDate"
                      id="year"
                      name="year"
                      as="select"
                    >
                      <option value="year">Year</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                      <option value="2031">2031</option>
                      <option value="2032">2032</option>
                    </Field>

                    <ErrorMessage
                      className="error"
                      name="year"
                      component="span"
                    />
                  </div>
                  <div className=" d-flex flex-column gap-2">
                    <Field
                      className="fieldBoxDate"
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="CVC"
                      maxLength="4"
                    />

                    <ErrorMessage
                      className="error"
                      name="cvc"
                      component="span"
                    />
                  </div>
                </div>
                <button className="mt-4 mb-4 btn btn-primary" type="submit">
                  Confirm
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </section>
    </>
  )
}

export default App
