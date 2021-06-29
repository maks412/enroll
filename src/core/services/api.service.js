import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/core/services/jwt.service";
import VueCookies from 'vue-cookies'

var url = 'https://enroll.sdu.edu.kz' // window.location.origin;
/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = "http://localhost";
    },

    fetchit(resource, params, method = 'POST'){
        var data = new FormData();
        var baseit = url + resource;
        
        data.append("json", JSON.stringify({
            data: params,
            email: VueCookies.get('email'),
            token: VueCookies.get('token'),
        }));

        return fetch(`${baseit}`, {
            method: method,
            headers: {
                'Accept': 'application/json',
            },
            body: data
        })
    },

    /**
     * Set the default HTTP request headers
     */
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `Token ${JwtService.getToken()}`;
    },

    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
            // console.log(error);
            throw new Error(`[KT] ApiService ${error}`);
        });
    },

    /**
     * Send the GET HTTP request
     * @param resource
     * @param slug
     * @returns {*}
     */
    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            // console.log(error);
            throw new Error(`[KT] ApiService ${error}`);
        });
    },

    /**
     * Set the POST HTTP request
     * @param resource
     * @param params
     * @returns {*}
     */
    post(resource, params) {
        var data = new FormData();
        data.append("json", JSON.stringify(params));
        // return Vue.axios.post(`${resource}`, params);
        return fetch(`${resource}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: data
        });
    },

    /**
     * Send the UPDATE HTTP request
     * @param resource
     * @param slug
     * @param params
     * @returns {IDBRequest<IDBValidKey> | Promise<void>}
     */
    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },

    /**
     * Send the PUT HTTP request
     * @param resource
     * @param params
     * @returns {IDBRequest<IDBValidKey> | Promise<void>}
     */
    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },

    /**
     * Send the DELETE HTTP request
     * @param resource
     * @returns {*}
     */
    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            // console.log(error);
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;