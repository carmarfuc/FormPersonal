import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import "./styles.css";

const App = () => (
  <div className="app">
    <Formik
      initialValues={{ phone: "", email: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        gender: Yup.object().required("Required"),
        phone: Yup.number()
          .typeError("Phone must be a number")
          .required("Required"),
        email: Yup.string().email().required("Required")
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;

        return (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input id="name" placeholder="Enter your name" type="text" />
            <br />
            <label>Gender</label>

            <RadioGroup
              aria-label="Gender"
              name="gender1"
              // value={this.state.value}
              // onChange={this.handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>

            <label>Phone</label>
            <input
              id="phone"
              placeholder="Enter your phone"
              type="numbers"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.phone && touched.phone
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.phone && touched.phone && (
              <div className="input-feedback">{errors.phone}</div>
            )}
            <br />
            <label>Email</label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <br />

            <label>Select a country</label>
            <FormControl>
              <InputLabel htmlFor="country-simple">Country</InputLabel>
              <Select
                value={values.country}
                onChange={handleChange}
                inputProps={{
                  name: "country",
                  id: "country-simple"
                }}
              >
                <MenuItem value="china">China</MenuItem>
                <MenuItem value="france">France</MenuItem>
                <MenuItem value="germany">Germany</MenuItem>
                <MenuItem value="japan">Japan</MenuItem>
                <MenuItem value="russia">Russian Federation</MenuItem>
                <MenuItem value="uk">United Kingdom</MenuItem>
                <MenuItem value="us">United States</MenuItem>
              </Select>
            </FormControl>

            <label>Select preferable film genre(s)</label>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Action"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Comedy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Drama"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Fantasy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Noir"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Sci-Fi"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Thriller"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  value="checked"
                />
              }
              label="Western"
            />

            <label>
              Tell us about yourself
              <br />
              <TextField />
            </label>
            <br />

            <FormControlLabel
              control={
                <Switch
                  //checked={this.state.checkedA}
                  //onChange={this.handleChange('checkedA')}
                  value="checkedA"
                />
              }
              label="Signup for updates"
            />
            <br />

            <Button
              variant="contained"
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default App;
