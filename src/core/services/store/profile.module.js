// action types
export const UPDATE_PERSONAL_INFO = "updateUserPersonalInfo";
export const UPDATE_ACCOUNT_INFO = "updateUserAccountInfo";

// mutation types
export const SET_PERSONAL_INFO = "setPersonalInfo";
export const SET_ACCOUNT_INFO = "setAccountInfo";

const state = {
    user_personal_info: {
        // photo: "media/users/300_21.jpg",
        name: "James",
        surname: "Jones",
        email: "matt@fifestudios.com",
    },
};

const getters = {
    currentUserPersonalInfo(state) {
        return state.user_personal_info;
    },

    // currentUserPhoto(state) {
    //     return state.user_personal_info.photo;
    // }
};

const actions = {
    [UPDATE_PERSONAL_INFO](context, payload) {
        context.commit(SET_PERSONAL_INFO, payload);
    },
};

const mutations = {
    [SET_PERSONAL_INFO](state, user_personal_info) {
        state.user_personal_info = user_personal_info;
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};