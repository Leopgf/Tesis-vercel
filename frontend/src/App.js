import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/Global";
import "./App.css";
import "./styles/Theme/variables.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";

import AppContext from "./auth/context/context";

/** Componente que contiene todas las rutas
 *  de navegación en la aplicación
 */
function App() {
  const [user, setUser] = useState();
  const [selectedProject, setSelectedProject] = useState();
  const [selectedNodes, setSelectedNodes] = useState(new Set());
  const [selectionModel, setSelectionModel] = useState([]);
  const [reloadSidebar, setReloadSidebar] = useState(false);
  const [cy, setCy] = useState();
  const [composite, setComposite] = useState(false);
  /**
   * Restaurar usuario si ya se ha iniciado sesión
   */
  const restoreUser = () => {
    const tempUser = localStorage.getItem("user");
    if (tempUser) setUser(JSON.parse(tempUser));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={{
          user, setUser,
          selectedProject, setSelectedProject,
          selectedNodes, setSelectedNodes,
          reloadSidebar, setReloadSidebar,
          selectionModel, setSelectionModel,
          cy, setCy,
          composite, setComposite,
        }}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
