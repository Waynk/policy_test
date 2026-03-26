import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const userInfo = ref(null);
    
    function setUser(data){
        userInfo.value = data;
    }

    return {userInfo, setUser};




})
