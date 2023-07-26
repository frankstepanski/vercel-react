import React, {useState} from "react";
// import Loader from "../../presentational/BounchingDotsLoader/BounchingDotsLoader";
import SyncLoader from "react-spinners/SyncLoader";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; 
import * as Yup from 'yup';

// https://formik.org/docs/api/useFormik

const Login = ({loginUser}) => {

    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#787878");

    let navigate = useNavigate(); 

    const formik = useFormik({
       initialValues: {
          username: '',
          password: '',
       },
       // aync validation
       validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            password: Yup.string()
                .required('Password is required')
       }),
       onSubmit: values => {
          if (values.username && values.password) {
              setLoading(true);
              loginUser(values.username, values.password);
               setTimeout(() => {
                    setLoading(true);
                    return navigate("/dashboard");
                }, 2000);
          }
       }
    });

    return (
        <div className = {styles.login}>
            <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
                <label htmlFor="email">User Name:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    maxLength="20"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                { formik.errors.username ? (<div className={styles.error}>{formik.errors.username}</div>) : null }
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                { formik.errors.password ? (<div className={styles.error}>{formik.errors.password}</div>) : null }
                <button type="submit" disabled={loading}>Login</button>
            </form>
            { loading ? (<div className={styles.success}> logging in <SyncLoader loading={loading} color={color} size={12} /></div>) : null }
        </div>
    );
  };

  export default Login;