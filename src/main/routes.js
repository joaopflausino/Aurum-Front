import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { AuthConsumer } from "../main/ProvedorDeAutentificacao";
import login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Account from "../pages/account/account";
import News from "../pages/news/News";
import AddInvestment from "../pages/add-investment/AddInvestment";
import simulateInvestment from "../pages/simulate-investment/SimulateInvestment";
import MyInvestments from "../pages/investments/MyInvestments";
import Registration from "../pages/registration/Registration";
import MainStocks from "../pages/stocks/MainStocks";
import SI from "../pages/simulate-investment/SimulateInvestment";

function RotaAutenticada({ component: Component, isAutenticado, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) => {
        if (isAutenticado) return <Component {...componentProps} />;
        else return <Redirect to={{ pathname: "/login", state: { from: componentProps.location } }} />;
      }}
    />
  );
}

function Rotas(props) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={login} />
        <Route path="/cadastro-usuarios" component={Registration} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} exact path="/" component={Home} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/meus-dados" component={Account} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/noticias" component={News} />
        <RotaAutenticada
          isAutenticado={props.isUsuarioAutenticado}
          path="/adicionar-investimento"
          component={AddInvestment}
        />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/simular-investimento" component={SI} />
        <RotaAutenticada isAutenticado={props.isUsuarioAutenticado} path="/principais-acoes" component={MainStocks} />
        <RotaAutenticada
          isAutenticado={props.isUsuarioAutenticado}
          path="/meus-investimentos"
          component={MyInvestments}
        />
      </Switch>
    </HashRouter>
  );
}

export default () => <AuthConsumer>{(context) => <Rotas isUsuarioAutenticado={context.isAutenticado} />}</AuthConsumer>;
