import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, Controller, useWatch } from "react-hook-form";
import Header from "./Header";
import ReactDatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import ReactSelect from "react-select";
import Mui from "./Mui";
import ButtonsResult from "./ButtonsResult";
import DownShift from "./DownShift";
import AntD from "./AntD";
import DraftExample from "./DraftExample";
import { EditorState } from "draft-js";
import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";

import "./styles.css";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

let renderCount = 0;

const defaultValues = {
  Native: "",
  TextField: "",
  Select: "",
  ReactSelect: { value: "vanilla", label: "Vanilla" },
  Checkbox: false,
  switch: false,
  RadioGroup: "",
  numberFormat: 123456789,
  AntdInput: "Test",
  AntdCheckbox: true,
  AntdSwitch: true,
  AntdSlider: 20,
  AntdRadio: 1,
  downShift: "apple",
  DraftJS: EditorState.createEmpty(),
  MUIPicker: new Date("2014-08-18T21:11:54"),
  country: { code: "AF", label: "Afghanistan", phone: "93" },
  password: "",
  confirmPassword: ""
};

const validationSchema = Yup.object().shape({
  // TextField: Yup.string()
  //   .required('Please enter TextField value')
  //   .min(2, 'Textfield atleast 2 character long'),
  // Select: Yup.string().required('Please select'),
  // RadioGroup: Yup.string().required('Please select Gender'),
  // // Checkbox: Yup.boolean().oneOf([true], 'Please check MUI Checkbox'),
  // Checkbox: Yup.bool()
  //   .test(
  //     'Checkbox',
  //     'You have to agree with our Terms and Conditions!',
  //     value => value === true
  //   ),
  password: Yup.string()
    .required('Please enter password')
    .min(2, 'Password has to be longer than 2 characters!'),
  confirmPassword: Yup.string()
    .required('Password confirmation is required!')
    .test('password', 'Passwords must match', function (value) {
      return this.parent.password === value;
    })
  // .oneOf([Yup.ref['password'], null], 'Passwords are not the same!')
  //.test('password', 'Matchss', value => value === watch('password'))
})


function App() {
  const { handleSubmit, reset, control, errors, watch, trigger, formState, getValues } = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(validationSchema)
  });
  const { isDirty, isSubmitting, touched, submitCount } = formState;
  const [data, setData] = useState(null);
  renderCount++;

  const onSubmit = (data) => {
    setData(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" error={errors}>
      <Header renderCount={renderCount} />

      <Mui control={control} errors={errors} touched={touched} getValues={getValues} />

      <hr />

      {/* <AntD control={control} /> */}

      <hr />

      <div className="container">
        <section>
          <label>React Select</label>
          <Controller
            as={ReactSelect}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]}
            name="ReactSelect"
            isClearable
            control={control}
          />
        </section>

        <section>
          <label>React Datepicker</label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={props => (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                onChange={e => props.onChange(e)}
                selected={props.value}
              />
            )}
          />
        </section>

        <section>
          <label>NumberFormat</label>
          <Controller
            as={NumberFormat}
            thousandSeparator
            name="numberFormat"
            className="input"
            control={control}
          />
        </section>

        {/* <section>
          <Controller as={DownShift} control={control} name="downShift" />
        </section> */}

        <section>
          <label>DraftJS</label>
          <DraftExample control={control} />
        </section>
      </div>

      <ButtonsResult {...{ data, reset, defaultValues, formState, errors }} />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
