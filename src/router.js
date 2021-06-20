import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            redirect: "/home/1",
            component: () =>
                import ("@/view/layout/Layout"),
            children: [{
                path: "/home",
                name: "wizard",
                component: () =>
                    import ("@/view/pages/wizard/Wizard.vue"),
                children: [

                    {
                        path: "1",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page1.vue")
                    },
                    {
                        path: "2",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page2.vue")
                    },
                    {
                        path: "3",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page3.vue")
                    },
                    {
                        path: "4",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page4.vue")
                    },
                    {
                        path: "5",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page5.vue")
                    },
                    {
                        path: "6",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page6.vue")
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