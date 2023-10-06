import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import s from "@/styles/login.module.scss";

const Login = () => {
  const inputRef = useRef();
  const [error, setError] = useState("");
  const { push } = useRouter();

  console.log(inputRef);

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log(inputRef.current.value);

      localStorage.setItem("username", inputRef.current.value);
      inputRef.current.value = "";
      push("/");
    }
  };

  useEffect(() => {
    console.log(typeof localStorage.getItem("error"));
    if (localStorage.getItem("error") == 200) {
      console.log("error is present");
    }
    setError("Server is down atm");
  }, []);

  const getClassname = () => {
    if (error !== "") {
      return `${s.title} ${s.error}`;
    } else {
      return `${s.title}`;
    }
  };

  return (
    <div>
      <h1 className={getClassname()}>Login Page</h1>
      <p>enter username</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="bogoss ultime"
        onKeyDown={onKeyDown}
      />

      {error !== "" ? <h2>{error}</h2> : ""}
    </div>
  );
};

export default Login;
