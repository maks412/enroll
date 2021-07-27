/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
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
                children: [{
                        path: "IRO",
                        name: "wizard-8",
                        component: () =>
                            import ("@/view/pages/wizard/IRO.vue")
                    },
                    {
                        path: "IRO_contact",
                        name: "wizard-9",
                        component: () =>
                            import ("@/view/pages/wizard/IRO_contact.vue")
                    },
                    {
                        path: "1",
                        name: "wizard-1",
                        component: () =>
                            import ("@/view/pages/wizard/page1.vue")
                    },
                    {
                        path: "2",
                        name: "wizard-2",
                        component: () =>
                            import ("@/view/pages/wizard/page2.vue")
                    },
                    {
                        path: "3",
                        name: "wizard-3",
                        component: () =>
                            import ("@/view/pages/wizard/page3.vue")
                    },
                    {
                        path: "4_ielts",
                        name: "wizard-4_ielts",
                        component: () =>
                            import ("@/view/pages/wizard/page4_IELTS.vue")
                    },
                    {
                        path: "4",
                        name: "wizard-4",
                        component: () =>
                            import ("@/view/pages/wizard/page4.vue")
                    },
                    {
                        path: "5",
                        name: "wizard-5",
                        component: () =>
                            import ("@/view/pages/wizard/page5.vue")
                    },
                    {
                        path: "6",
                        name: "wizard-6",
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