/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

const AppContext = React.createContext({});

const initState = () => {
  const [state, setState] = React.useState({
    isLogin: false,
    isInitialized: false,
    user: null,
  });

  React.useEffect(() => {
    // call api check login?? /user/me
    console.info("check login");
    fetch("http://localhost:8080/api/auth/me", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
        throw new Error("cannot get current user info");
      })
      .then((data) => {
        console.log("u r logined");
        setState((prev) => ({
          ...prev,
          isInitialized: true,
          isLogin: true,
          user: data,
        }));
      })
      .catch((e) => {
        console.info("u r not login");
        setState((prev) => ({
          ...prev,
          isInitialized: true,
          isLogin: false,
          user: null,
        }));
      });

    setTimeout(() => {}, 3_000);
  }, []);

  const signIn = ({ username, password }) => {
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        console.log("login success");
        setState((prev) => ({ ...prev, isLogin: true, user: data }));
        return data;
      });
  };

  const signOut = () => {
    return fetch("http://localhost:8080/api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).finally(() => {
      setState((prev) => ({
        ...prev,
        isInitialized: true,
        isLogin: false,
        user: null,
      }));
    });
  };

  return {
    ...state,
    signIn,
    signOut,
  };
};

const LoadingComponent = ({ loading, title, children }) => {
  return loading ? <div>{title}</div> : children;
};

export const AppContextProvider = ({ children }) => {
  const state = initState();
  return (
    <AppContext.Provider value={state}>
      <LoadingComponent
        loading={!state.isInitialized}
        title={"Init application..."}
      >
        {children}
      </LoadingComponent>
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
