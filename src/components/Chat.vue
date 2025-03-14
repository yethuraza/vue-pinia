<template>
    <div>
        chat is here
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Echo from "laravel-echo";
import Pusher from "pusher-js";

onMounted(() => {
    websocketInit()
})

const websocketInit = (token) => {
    window.Echo = new Echo({
        broadcaster: "reverb",
        key: import.meta.env.VITE_KEY,
        wsHost: import.meta.env.VITE_WEBHOST,
        wsPort: import.meta.env.VITE_PORT,
        wssPort: import.meta.env.VITE_PORT,
        forceTLS: import.meta.env.VITE_WEBHOST.startsWith("https"),
        enabledTransports: ["ws"],
        authEndpoint: import.meta.env.VITE_AUTH_END_POINT,
        auth: {
            headers: {
                'x-api-token': import.meta.env.VITE_X_API_TOKEN_BB,
                'Accept': 'application/json',
                'Authorization': 'Bearer fecjgc4bMhXrhMjZ9Um12iAc7rvER7E80caaA3zr74b339bb'
            },
            params: {
                role: 'customer',
                guard: 'frontend'
            }
        },
    });

    window.Echo.join("chat.xzCCMRmnZg4aLn3u")
        .here((users) => {
            console.log('user here', users);
        })
        //     .joining((user) => {
        //         console.log(user.name);
        //     })
        //     .leaving((user) => {
        //         console.log(user.name);
        //     })
        .listen('.NewMessage', (event) => {
            console.log("New message:", event.message);
        })
    //     .error((error) => {
    //         console.error(error);
    //     });
}

</script>