import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./layout";
import Age from "./page/age";
import Index from "./page/index";
import Go from "./page/go";

export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Layout />
      <Route path="/" exact component={Index} />
      <Route path="/age" component={Age} />
      <Route path="/go/:id" component={Go} />
    </BrowserRouter>
  );
}
