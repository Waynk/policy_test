import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const user = ref({});

    function setUser(data) {
        user.value = data;
    }

    return {user, setUser};
})
