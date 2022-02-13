import { createApp,h } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp({
    render: ()=>h(App)
});

app.component('friend-contact',FriendContact);
app.component('new-friend',NewFriend);

app.mount('#app');
