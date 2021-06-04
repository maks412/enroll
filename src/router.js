import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home/in", //"/dashboard",
            component: () =>
                import ("@/view/layout/Layout"),
            children: [{
                path: "/home",
                name: "wizard",
                component: () =>
                    import ("@/view/pages/wizard/Wizard.vue"),
                children: [

                    {
                        path: "in",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/Wizard-4.vue")
                    },
                    {
                        path: "wizard-2",
                        name: "wizard-2",
                        component: () =>
                            import ("@/view/pages/wizard/Wizard-2.vue")
                    },
                    {
                        path: "wizard-1",
                        name: "wizard-1",
                        component: () =>
                            import ("@/view/pages/wizard/Wizard-1.vue")
                    },
                    {
                        path: "wizard-3",
                        name: "wizard-3",
                        component: () =>
                            import ("@/view/pages/wizard/Wizard-3.vue")
                    }

                ]
            }]
        },

        {
            path: "/login",
            name: "login",
            component: () =>
                import ("@/view/pages/auth/login_pages/Login-1")
        },
        {
            path: "/after_register",
            name: "after_register",
            component: () =>
                import ("@/view/pages/auth/after_register")
        },
        {
            path: "*",
            redirect: "/404"
        },
        {
            // the 404 route, when none of the above matches
            path: "/404",
            name: "404",
            component: () =>
                import ("@/view/pages/error/Error-1.vue")
        }
    ]
});