/* eslint-disable */ 

//import ApiService from "@/core/services/api.service";
import JwtService from "@/core/services/jwt.service";

// action types
export const VERIFY_AUTH = "verifyAuth";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const REGISTER = "register";
export const UPDATE_PASSWORD = "updateUser";

// mutation types
export const PURGE_AUTH = "logOut";
export const SET_AUTH = "setUser";
export const SET_PASSWORD = "setPassword";
export const SET_ERROR = "setError";

var url = 'https://enroll.sdu.edu.kz' // window.location.origin;

const state = {
    user: {},
    errors: null,
    isAuthenticated: JwtService.getToken()
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated() {
        //delete this MAAAAKS
        //return true;
        // dont forget
        return state.isAuthenticated;
    }
};

const actions = {
    [LOGIN](context, credentials) {

        return new Promise(resolve => {
            var data = new FormData();
            data.append("json", JSON.stringify(credentials));
            fetch(url + "/backend/login.php", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: data
            }).then((response) => response.json()).then((res) => {
                context.commit(SET_AUTH, res);
                resolve(data);
            });
        });
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH);
    },
    [REGISTER](context, credentials) {
        return new Promise(resolve => {
            var data = new FormData();
            data.append("json", JSON.stringify(credentials));
            console.log(credentials);
            fetch(url + "/backend/register.php", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: data
            }).then((response) => response.json()).then((res) => {
                context.commit(SET_AUTH, res);
                resolve(data);
            }).catch(({ response }) => {
                context.commit(SET_ERROR, response.data.errors);
            });
        });
    },
    [VERIFY_AUTH](context) {
        /*
        if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.get("verify")
                .then(({ data }) => {
                    context.commit(SET_AUTH, data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.errors);
                });
        } else {
            context.commit(PURGE_AUTH);
        }*/
    },
    [UPDATE_PASSWORD](context, payload) {
        /*
        const password = payload;

        return ApiService.put("password", password).then(({ data }) => {
            context.commit(SET_PASSWORD, data);
            return data;
        });
        */
    }
};

const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JwtService.saveToken(state.user.token);
    },
    [SET_PASSWORD](state, password) {
        state.user.password = password;
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};