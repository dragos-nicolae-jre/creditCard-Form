import React from "react"
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
import CardNumberInput from "./CardNumberInput"

export default function FormCard() {
  const onSubmit = (values) => {
    console.log("onSubmit", values)
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("This is an important field."),
    month: Yup.string().required("Can't be blank."),
    year: Yup.string().required("Can't be blank."),
    cvc: Yup.string().required("Can't be blank."),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
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

              <ErrorMessage className="error" name="name" component="span" />
            </div>
            <div className="d-flex flex-column mb-3 gap-2">
              <CardNumberInput
                onCardNumberChange={(value) => setFieldValue("number", value)}
                cardNumber={values.number}
                onCardNumberError={(error) => setFieldValue(error)}
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
                <ErrorMessage className="error" name="month" component="span" />
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

                <ErrorMessage className="error" name="year" component="span" />
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

                <ErrorMessage className="error" name="cvc" component="span" />
              </div>
            </div>
            <button className="mt-4 mb-4 btn btn-primary" type="submit">
              Confirm
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

const initialValues = {
  name: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
}
