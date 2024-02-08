type RoutingConfig = {
  routes: {
    path: string;
    component: string | number
  }[]
}

const routingConfig: RoutingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: RoutingConfig) => { };

createRoutes(routingConfig);
