<template>
    <div
        v-if="display1"
        class="fixed w-full h-full top-0 left-0 flex justify-center items-center z-[10000] bg-slate-900 bg-opacity-[85%] p-12 md:p-20 pt-14"
    >
        <div class="absolute left-5 top-5 flex gap-6">
            <button @click="zoomIn">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="zoomInIcon()"
                ></div>
            </button>
            <button @click="zoomOut">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="zoomOutIcon()"
                ></div>
            </button>
        </div>

        <button class="absolute left-2 md:left-5 top-[50%] -translate-y-1/2" @click="prevGallery1">
            <div
                class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                v-html="leftArrowIcon()"
            ></div>
        </button>
        <button
            class="absolute right-2 md:right-5 top-[50%] -translate-y-1/2"
            @click="nextGallery1"
        >
            <div
                class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                v-html="rightArrowIcon()"
            ></div>
        </button>

        <div class="absolute right-5 top-5 flex gap-6">
            <button @click="hide1()">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="closeIcon()"
                ></div>
            </button>
        </div>
        <div class="max-w-full max-h-full overflow-auto">
            <div class="w-full h-auto" ref="image">
                <img
                    :class="{ 'invisible': !gallery1[currentImageIdOfGallery1].fullImage }"
                    class="object-contain w-full h-full"
                    :src="gallery1[currentImageIdOfGallery1].fullImage"
                    alt
                />
            </div>
        </div>
    </div>

    <div
        v-if="display2"
        class="fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-[10000] bg-slate-900 bg-opacity-[85%] p-12 md:p-20 pt-14"
    >
        <div class="absolute left-5 top-5 flex gap-6">
            <button @click="zoomIn">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="zoomInIcon()"
                ></div>
            </button>
            <button @click="zoomOut">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="zoomOutIcon()"
                ></div>
            </button>
        </div>

        <button class="absolute left-2 md:left-5 top-[50%] -translate-y-1/2" @click="prevGallery2">
            <div
                class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                v-html="leftArrowIcon()"
            ></div>
        </button>
        <button
            class="absolute right-2 md:right-5 top-[50%] -translate-y-1/2"
            @click="nextGallery2"
        >
            <div
                class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                v-html="rightArrowIcon()"
            ></div>
        </button>

        <div class="absolute right-5 top-5 flex gap-6">
            <button @click="hide2()">
                <div
                    class="w-6 h-6 min-w-[1.5rem] md:w-8 md:h-8 md:min-w-[2rem]"
                    v-html="closeIcon()"
                ></div>
            </button>
        </div>
        <div class="max-w-full max-h-full overflow-auto">
            <div class="w-full h-auto" ref="image">
                <img
                    :class="{ 'invisible': !gallery2[currentImageIdOfGallery2].fullImage }"
                    class="object-contain w-full max-h-[80vh]"
                    :src="gallery2[currentImageIdOfGallery2].fullImage"
                    alt
                />
            </div>
        </div>
    </div>

    <div
        class="app-archive content m-t-20 m-b-10 w-clamp-min-90-800 p-7 rounded-4 m-x-auto box-shadow-2-11"
    >
        <h2>Kontekst</h2>

        <p>
            Kiedyś żyła tutaj aplikacja Hairo, która była pierwszym, zautomatyzowanym systemem do poznawania ludzi. Pisaliśmy ją z myślą o tym, aby maksymalnie proste stało się znalezienie osób z którymi się dogadujemy i utrzymywanie z nimi kontaktu.
            Po roku od jej publikacji i zgromadzeniu blisko 1500 użytkowników, zdecydowaliśmy się ją zarchiwizować wraz z dniem 28-05-2023.
        </p>

        <div class="grid grid-cols-2 gap-4 mt-10">
            <div class="object-cover aspect-square">
                <video
                    autoplay
                    loop
                    muted
                    playsinline
                    controls
                    class="cursor-pointer w-full h-full object-contain aspect-square rounded-md"
                    :src="desktopVideo"
                    alt
                ></video>
            </div>

            <div class="object-cover aspect-square">
                <video
                    autoplay
                    loop
                    muted
                    playsinline
                    controls
                    class="cursor-pointer w-full h-full object-contain aspect-square rounded-md"
                    :src="mobileVideo"
                    alt
                ></video>
            </div>
        </div>

        <h2>Działanie</h2>
        <p>Dwie reklamy opisujące działanie Hairo:</p>

        <h3>Reklama 1</h3>
        <blockquote>
            <p>Automat do... poznawania ludzi. Co?!</p>
            <p>Wyobraź sobie dwa kliknięcia: szukaj i zaakceptuj spotkanie.</p>
            <p>Podajesz opis człowieka:</p>
            <ul>
                <li>wiek,</li>
                <li>płeć,</li>
                <li>miejsce,</li>
                <li>języki,</li>
                <li>zainteresowania,</li>
                <li>opinie, poglądy i preferencje</li>
            </ul>

            <p>Hairo szuka osoby lub grupy(do 5 osób) przez tydzień, aż do skutku.</p>

            <p>Po znalezieniu wszyscy dostajecie powitalnego maila z dostępem do Waszej prywatnej przestrzeni wraz z propozycją spotkania.</p>
            <p>Pozostaje jedynie zaakceptować spotkanie i powitać nowych ludzi, nowe możliwości.</p>
            <p>
                Dzisiaj jest to możliwe.
                <br />Dwa kliknięcia: szukaj i zaakceptuj spotkanie.
            </p>
        </blockquote>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
                v-for="[id, value] of Object.entries(gallery1)"
                :id="id"
                @click="showImageGallery1(id)"
                :class="{ 'invisible': !value.thumbImage }"
                class="object-cover aspect-square cursor-pointer"
                :src="value.thumbImage"
                alt
            />
        </div>

        <br />
        <h3>Reklama 2</h3>

        <blockquote>
            <p>Jesteś otoczony/a przez bandę ...?! 🐒</p>

            <p>Twoje towarzystwo jest niedopasowane, a Ty nie masz czasu na update? ⏳</p>
            <p>A może masz ciekawe hobby lub zainteresowania, które chciałbyś/abyś rozwijać i dzielić z podobnymi Tobie pasjonatami/kami? 🔥</p>
            <p>Zleć nam znalezienie dopasowanego do Ciebie towarzystwa. 😎</p>
            <p>Jak to działa? 💡</p>

            <ul>
                <li>zlecasz Hairo znalezienie grupy lub osoby</li>
                <li>wprowadzasz opis: wiek, płeć, odległość, języki i tagi</li>
                <li>aplikacja szuka przez tydzień</li>
                <li>po znalezieniu tworzymy dla Was przestrzeń, czyli komunikator tekstowy i pokój do rozmów audio/video</li>
                <li>Hairo proponuje spotkanie w pokoju o konkretnej godzinie</li>
            </ul>

            <p>Czyli całość sprowadza się do:</p>
            <ul>
                <li>wprowadzenia opisu kogo chcesz znaleźć</li>
                <li>powiadomienia email o znalezieniu grupy/osoby</li>
                <li>zaakceptowania propozycji spotkania</li>
            </ul>

            <p>Nie bądź otoczony przez bandę... 🐒</p>
            <p>Zleć nam update. 🚀</p>
        </blockquote>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img
                v-for="[id, value] of Object.entries(gallery2)"
                :id="id"
                @click="showImageGallery2(id)"
                :class="{ 'invisible': !value.thumbImage }"
                class="object-cover aspect-square cursor-pointer"
                :src="value.thumbImage"
                alt
            />
        </div>

        <h2>Twórcy</h2>

        <p>Całość została stworzona przez nas, braci, dwóch programistów.</p>
        <a href="https://igor.roztropinski.com" target="_blank">
            <em>Igor Roztropiński</em>
        </a>
        <br />
        <a href="https://aleksander.roztropinski.com" target="_blank">
            <em>Aleksander Roztropiński</em>
        </a>
    </div>
    <Footer></Footer>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Footer from '../layout/pre-app/Footer.vue';
import mobileVideo from '../../assets/videos/mobile_app.mp4';
import desktopVideo from '../../assets/videos/desktop_app.mp4';
import { leftArrowIcon, rightArrowIcon, closeIcon, zoomInIcon, zoomOutIcon } from '../../core/shared/icons/icons';

const Images = {
    ACTIVE_ORDERS: {
        id: 'ACTIVE_ORDERS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_active-orders.png',
        fullImagePath: '../../assets/images/archive/desktop/active-orders.png'
    },
    BOT_SETTINGS: {
        id: 'BOT_SETTINGS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_bot-settings.png',
        fullImagePath: '../../assets/images/archive/desktop/bot-settings.png'
    },
    CREATE_ACCOUNT: {
        id: 'CREATE_ACCOUNT',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_create-account.png',
        fullImagePath: '../../assets/images/archive/desktop/create-account.png'
    },
    CREATE_INVITATION_2: {
        id: 'CREATE_INVITATION_2',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_create-invitation-2.png',
        fullImagePath: '../../assets/images/archive/desktop/create-invitation-2.png'
    },
    CREATE_INVITATION_3: {
        id: 'CREATE_INVITATION_3',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_create-invitation-3.png',
        fullImagePath: '../../assets/images/archive/desktop/create-invitation-3.png'
    },
    CREATE_INVITATION: {
        id: 'CREATE_INVITATION',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_create-invitation.png',
        fullImagePath: '../../assets/images/archive/desktop/create-invitation.png'
    },
    EMOTICONS: {
        id: 'EMOTICONS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_emoticons.png',
        fullImagePath: '../../assets/images/archive/desktop/emoticons.png'
    },
    END_VOTING_NOTIF: {
        id: 'END_VOTING_NOTIF',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_end-voting-notif.png',
        fullImagePath: '../../assets/images/archive/desktop/end-voting-notif.png'
    },
    FORBIDDEN_LIST: {
        id: 'FORBIDDEN_LIST',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_forbidden-list.png',
        fullImagePath: '../../assets/images/archive/desktop/forbidden-list.png'
    },
    FORGOT_PASSWORD: {
        id: 'FORGOT_PASSWORD',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_forgot-password.png',
        fullImagePath: '../../assets/images/archive/desktop/forgot-password.png'
    },
    FRIENDSHIP_ROOM_BLACK: {
        id: 'FRIENDSHIP_ROOM_BLACK',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_friendship-room-black.png',
        fullImagePath: '../../assets/images/archive/desktop/friendship-room-black.png'
    },
    FRIENDSHIP_ROOM_SETTINGS: {
        id: 'FRIENDSHIP_ROOM_SETTINGS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_friendship-room-settings.png',
        fullImagePath: '../../assets/images/archive/desktop/friendship-room-settings.png'
    },
    FRIENDSHIP_ROOM: {
        id: 'FRIENDSHIP_ROOM',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_friendship-room.png',
        fullImagePath: '../../assets/images/archive/desktop/friendship-room.png'
    },
    FRIENDSHIP_SETTINGS: {
        id: 'FRIENDSHIP_SETTINGS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_friendship-settings.png',
        fullImagePath: '../../assets/images/archive/desktop/friendship-settings.png'
    },
    FRIENDSHIP_SPACE: {
        id: 'FRIENDSHIP_SPACE',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_friendship-space.png',
        fullImagePath: '../../assets/images/archive/desktop/friendship-space.png'
    },
    GROUP_SPACE: {
        id: 'GROUP_SPACE',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_group-space.png',
        fullImagePath: '../../assets/images/archive/desktop/group-space.png'
    },
    LEAVE_GROUP: {
        id: 'LEAVE_GROUP',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_leave-group.png',
        fullImagePath: '../../assets/images/archive/desktop/leave-group.png'
    },
    MEET_UP: {
        id: 'MEET_UP',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_meet-up.png',
        fullImagePath: '../../assets/images/archive/desktop/meet-up.png'
    },
    MEETING_PROPOSITION: {
        id: 'MEETING_PROPOSITION',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_meeting-proposition.png',
        fullImagePath: '../../assets/images/archive/desktop/meeting-proposition.png'
    },
    MEETING_VOTING: {
        id: 'MEETING_VOTING',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_meeting-voting.png',
        fullImagePath: '../../assets/images/archive/desktop/meeting-voting.png'
    },
    NOTIFICATIONS: {
        id: 'NOTIFICATIONS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_notifications.png',
        fullImagePath: '../../assets/images/archive/desktop/notifications.png'
    },
    ORDER_A_SEARCH: {
        id: 'ORDER_A_SEARCH',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_order-a-search.png',
        fullImagePath: '../../assets/images/archive/desktop/order-a-search.png'
    },
    ORDERS_EXPIRE: {
        id: 'ORDERS_EXPIRE',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_orders-expire.png',
        fullImagePath: '../../assets/images/archive/desktop/orders-expire.png'
    },
    PLANS: {
        id: 'PLANS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_plans.png',
        fullImagePath: '../../assets/images/archive/desktop/plans.png'
    },
    PROPOSITIONS: {
        id: 'PROPOSITIONS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_propositions.png',
        fullImagePath: '../../assets/images/archive/desktop/propositions.png'
    },
    SEARCH_FORM: {
        id: 'SEARCH_FORM',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_search-form.png',
        fullImagePath: '../../assets/images/archive/desktop/search-form.png'
    },
    SEARCH_USERS: {
        id: 'SEARCH_USERS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_search-users.png',
        fullImagePath: '../../assets/images/archive/desktop/search-users.png'
    },
    SETTINGS: {
        id: 'SETTINGS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_settings.png',
        fullImagePath: '../../assets/images/archive/desktop/settings.png'
    },
    SIGN_IN: {
        id: 'SIGN_IN',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_sign-in.png',
        fullImagePath: '../../assets/images/archive/desktop/sign-in.png'
    },
    TAGS_ALL: {
        id: 'TAGS_ALL',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_tags-all.png',
        fullImagePath: '../../assets/images/archive/desktop/tags-all.png'
    },
    TAGS_MODAL: {
        id: 'TAGS_MODAL',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_tags-modal.png',
        fullImagePath: '../../assets/images/archive/desktop/tags-modal.png'
    },
    TAGS_POPULAR: {
        id: 'TAGS_POPULAR',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_tags-popular.png',
        fullImagePath: '../../assets/images/archive/desktop/tags-popular.png'
    },
    TAGS_SPECIAL: {
        id: 'TAGS_SPECIAL',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_tags-special.png',
        fullImagePath: '../../assets/images/archive/desktop/tags-special.png'
    },
    USER_PROFILE_1: {
        id: 'USER_PROFILE_1',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_user-profile-1.png',
        fullImagePath: '../../assets/images/archive/desktop/user-profile-1.png'
    },
    USER_PROFILE_2: {
        id: 'USER_PROFILE_2',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_user-profile-2.png',
        fullImagePath: '../../assets/images/archive/desktop/user-profile-2.png'
    },
    USER_PROFILE_3: {
        id: 'USER_PROFILE_3',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_user-profile-3.png',
        fullImagePath: '../../assets/images/archive/desktop/user-profile-3.png'
    },
    USER: {
        id: 'USER',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_user.png',
        fullImagePath: '../../assets/images/archive/desktop/user.png'
    },
    USERS_FILTERS: {
        id: 'USERS_FILTERS',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_users-filters.png',
        fullImagePath: '../../assets/images/archive/desktop/users-filters.png'
    },
    VOTING_ACTIVE: {
        id: 'VOTING_ACTIVE',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_voting-active.png',
        fullImagePath: '../../assets/images/archive/desktop/voting-active.png'
    },
    VOTING_CLOSED: {
        id: 'VOTING_CLOSED',
        thumbImagePath: '../../assets/images/archive/desktop/thumb_voting-closed.png',
        fullImagePath: '../../assets/images/archive/desktop/voting-closed.png'
    },
    MOBILE_EMOTICONS: {
        id: 'MOBILE_EMOTICONS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_emoticons.png',
        fullImagePath: '../../assets/images/archive/mobile/emoticons.png'
    },
    MOBILE_FORBIDDEN_LIST: {
        id: 'MOBILE_FORBIDDEN_LIST',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_forbidden-list.png',
        fullImagePath: '../../assets/images/archive/mobile/forbidden-list.png'
    },
    MOBILE_FRIENDSHIP_MENU: {
        id: 'MOBILE_FRIENDSHIP_MENU',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_friendship-menu.png',
        fullImagePath: '../../assets/images/archive/mobile/friendship-menu.png'
    },
    MOBILE_FRIENDSHIP_ROOM: {
        id: 'MOBILE_FRIENDSHIP_ROOM',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_friendship-room.png',
        fullImagePath: '../../assets/images/archive/mobile/friendship-room.png'
    },
    MOBILE_FRIENDSHIP_SPACE: {
        id: 'MOBILE_FRIENDSHIP_SPACE',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_friendship-space.png',
        fullImagePath: '../../assets/images/archive/mobile/friendship-space.png'
    },
    MOBILE_LEAVE: {
        id: 'MOBILE_LEAVE',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_leave.png',
        fullImagePath: '../../assets/images/archive/mobile/leave.png'
    },
    MOBILE_MEET_UP_PREP: {
        id: 'MOBILE_MEET_UP_PREP',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_meet-up-prep.png',
        fullImagePath: '../../assets/images/archive/mobile/meet-up-prep.png'
    },
    MOBILE_MEET_UP: {
        id: 'MOBILE_MEET_UP',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_meet-up.png',
        fullImagePath: '../../assets/images/archive/mobile/meet-up.png'
    },
    MOBILE_NOTIFICATION: {
        id: 'MOBILE_NOTIFICATION',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_notification.png',
        fullImagePath: '../../assets/images/archive/mobile/notification.png'
    },
    MOBILE_NOTIFICATIONS: {
        id: 'MOBILE_NOTIFICATIONS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_notifications.png',
        fullImagePath: '../../assets/images/archive/mobile/notifications.png'
    },
    MOBILE_ORDERS: {
        id: 'MOBILE_ORDERS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_orders.png',
        fullImagePath: '../../assets/images/archive/mobile/orders.png'
    },
    MOBILE_PLANS: {
        id: 'MOBILE_PLANS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_plans.png',
        fullImagePath: '../../assets/images/archive/mobile/plans.png'
    },
    MOBILE_ROOM_BOT: {
        id: 'MOBILE_ROOM_BOT',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_room-bot.png',
        fullImagePath: '../../assets/images/archive/mobile/room-bot.png'
    },
    MOBILE_ROOM_SETTINGS: {
        id: 'MOBILE_ROOM_SETTINGS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_room-settings.png',
        fullImagePath: '../../assets/images/archive/mobile/room-settings.png'
    },
    MOBILE_SEARCH_FORM_2: {
        id: 'MOBILE_SEARCH_FORM_2',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_search-form-2.png',
        fullImagePath: '../../assets/images/archive/mobile/search-form-2.png'
    },
    MOBILE_SEARCHING: {
        id: 'MOBILE_SEARCHING',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_searching.png',
        fullImagePath: '../../assets/images/archive/mobile/searching.png'
    },
    MOBILE_SPACES: {
        id: 'MOBILE_SPACES',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_spaces.png',
        fullImagePath: '../../assets/images/archive/mobile/spaces.png'
    },
    MOBILE_TAGS_SPECIAL: {
        id: 'MOBILE_TAGS_SPECIAL',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_tags-special.png',
        fullImagePath: '../../assets/images/archive/mobile/tags-special.png'
    },
    MOBILE_USER_FILTERS: {
        id: 'MOBILE_USER_FILTERS',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_user-filters.png',
        fullImagePath: '../../assets/images/archive/mobile/user-filters.png'
    },
    MOBILE_USER_PROFILE: {
        id: 'MOBILE_USER_PROFILE',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_user-profile.png',
        fullImagePath: '../../assets/images/archive/mobile/user-profile.png'
    },
    MOBILE_USER_SEARCH: {
        id: 'MOBILE_USER_SEARCH',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_user-search.png',
        fullImagePath: '../../assets/images/archive/mobile/user-search.png'
    },
    MOBILE_USER: {
        id: 'MOBILE_USER',
        thumbImagePath: '../../assets/images/archive/mobile/thumb_user.png',
        fullImagePath: '../../assets/images/archive/mobile/user.png'
    },
} as { [key: string]: { id: string, thumbImagePath: string, fullImagePath: string } };


class GalleryImage {
    constructor(public thumbImage: string, public fullImage: string) { }

    static init(): GalleryImage {
        return new GalleryImage('', '')
    }
}

type Gallery = { [id: string]: { thumbImage: string, fullImage: string } };

export default defineComponent({
    components: {
        Footer
    },

    data() {
        return {
            leftArrowIcon,
            rightArrowIcon,
            closeIcon,
            zoomInIcon,
            zoomOutIcon,
            intersectionObserver: null as null | IntersectionObserver,
            mobileVideo,
            desktopVideo,

            display1: false,
            gallery1: {
                [Images.ACTIVE_ORDERS.id]: GalleryImage.init(),
                [Images.BOT_SETTINGS.id]: GalleryImage.init(),
                [Images.CREATE_ACCOUNT.id]: GalleryImage.init(),
                [Images.CREATE_INVITATION_2.id]: GalleryImage.init(),
                [Images.CREATE_INVITATION_3.id]: GalleryImage.init(),
                [Images.CREATE_INVITATION.id]: GalleryImage.init(),
                [Images.EMOTICONS.id]: GalleryImage.init(),
                [Images.END_VOTING_NOTIF.id]: GalleryImage.init(),
                [Images.FORBIDDEN_LIST.id]: GalleryImage.init(),
                [Images.FORGOT_PASSWORD.id]: GalleryImage.init(),
                [Images.FRIENDSHIP_ROOM_BLACK.id]: GalleryImage.init(),
                [Images.FRIENDSHIP_ROOM_SETTINGS.id]: GalleryImage.init(),
                [Images.FRIENDSHIP_ROOM.id]: GalleryImage.init(),
                [Images.FRIENDSHIP_SETTINGS.id]: GalleryImage.init(),
                [Images.FRIENDSHIP_SPACE.id]: GalleryImage.init(),
                [Images.GROUP_SPACE.id]: GalleryImage.init(),
                [Images.LEAVE_GROUP.id]: GalleryImage.init(),
                [Images.MEET_UP.id]: GalleryImage.init(),
                [Images.MEETING_PROPOSITION.id]: GalleryImage.init(),
                [Images.MEETING_VOTING.id]: GalleryImage.init(),
                [Images.NOTIFICATIONS.id]: GalleryImage.init(),
                [Images.ORDER_A_SEARCH.id]: GalleryImage.init(),
                [Images.ORDERS_EXPIRE.id]: GalleryImage.init(),
                [Images.PLANS.id]: GalleryImage.init(),
                [Images.PROPOSITIONS.id]: GalleryImage.init(),
                [Images.SEARCH_FORM.id]: GalleryImage.init(),
                [Images.SEARCH_USERS.id]: GalleryImage.init(),
                [Images.SETTINGS.id]: GalleryImage.init(),
                [Images.SIGN_IN.id]: GalleryImage.init(),
                [Images.TAGS_ALL.id]: GalleryImage.init(),
                [Images.TAGS_MODAL.id]: GalleryImage.init(),
                [Images.TAGS_POPULAR.id]: GalleryImage.init(),
                [Images.TAGS_SPECIAL.id]: GalleryImage.init(),
                [Images.USER_PROFILE_1.id]: GalleryImage.init(),
                [Images.USER_PROFILE_2.id]: GalleryImage.init(),
                [Images.USER_PROFILE_3.id]: GalleryImage.init(),
                [Images.USER.id]: GalleryImage.init(),
                [Images.USERS_FILTERS.id]: GalleryImage.init(),
                [Images.VOTING_ACTIVE.id]: GalleryImage.init(),
                [Images.VOTING_CLOSED.id]: GalleryImage.init(),
                [Images.ORDER_A_SEARCH.id]: GalleryImage.init(),
            } as Gallery,
            currentImageIdOfGallery1: '',

            display2: false,
            gallery2: {
                [Images.MOBILE_EMOTICONS.id]: GalleryImage.init(),
                [Images.MOBILE_FORBIDDEN_LIST.id]: GalleryImage.init(),
                [Images.MOBILE_FRIENDSHIP_MENU.id]: GalleryImage.init(),
                [Images.MOBILE_FRIENDSHIP_ROOM.id]: GalleryImage.init(),
                [Images.MOBILE_FRIENDSHIP_SPACE.id]: GalleryImage.init(),
                [Images.MOBILE_LEAVE.id]: GalleryImage.init(),
                [Images.MOBILE_MEET_UP_PREP.id]: GalleryImage.init(),
                [Images.MOBILE_MEET_UP.id]: GalleryImage.init(),
                [Images.MOBILE_NOTIFICATION.id]: GalleryImage.init(),
                [Images.MOBILE_NOTIFICATIONS.id]: GalleryImage.init(),
                [Images.MOBILE_ORDERS.id]: GalleryImage.init(),
                [Images.MOBILE_PLANS.id]: GalleryImage.init(),
                [Images.MOBILE_ROOM_BOT.id]: GalleryImage.init(),
                [Images.MOBILE_ROOM_SETTINGS.id]: GalleryImage.init(),
                [Images.MOBILE_SEARCH_FORM_2.id]: GalleryImage.init(),
                [Images.MOBILE_SEARCHING.id]: GalleryImage.init(),
                [Images.MOBILE_SPACES.id]: GalleryImage.init(),
                [Images.MOBILE_TAGS_SPECIAL.id]: GalleryImage.init(),
                [Images.MOBILE_USER_FILTERS.id]: GalleryImage.init(),
                [Images.MOBILE_USER_PROFILE.id]: GalleryImage.init(),
                [Images.MOBILE_USER_SEARCH.id]: GalleryImage.init(),
                [Images.MOBILE_USER.id]: GalleryImage.init(),
            } as Gallery,
            currentImageIdOfGallery2: '',
        }
    },

    methods: {
        prevGallery1() {
            const index = Object.keys(this.gallery1).findIndex(id => id == this.currentImageIdOfGallery1);
            const galleryLength = Object.keys(this.gallery1).length;
            if (index == 0) {
                this.currentImageIdOfGallery1 = Object.keys(this.gallery1)[galleryLength - 1];
            }
            else {
                this.currentImageIdOfGallery1 = Object.keys(this.gallery1)[index - 1];
            }
            this.showImageGallery1(this.currentImageIdOfGallery1);
        },

        nextGallery1() {
            const index = Object.keys(this.gallery1).findIndex(id => id == this.currentImageIdOfGallery1);
            const galleryLength = Object.keys(this.gallery1).length;
            if (index >= galleryLength - 1) {
                this.currentImageIdOfGallery1 = Object.keys(this.gallery1)[0];
            }
            else {
                this.currentImageIdOfGallery1 = Object.keys(this.gallery1)[index + 1];
            }
            this.showImageGallery1(this.currentImageIdOfGallery1);
        },

        prevGallery2() {
            const index = Object.keys(this.gallery2).findIndex(id => id == this.currentImageIdOfGallery2);
            const galleryLength = Object.keys(this.gallery2).length;
            if (index == 0) {
                this.currentImageIdOfGallery2 = Object.keys(this.gallery2)[galleryLength - 1];
            }
            else {
                this.currentImageIdOfGallery2 = Object.keys(this.gallery2)[index - 1];
            }
            this.showImageGallery2(this.currentImageIdOfGallery2);
        },

        nextGallery2() {
            const index = Object.keys(this.gallery2).findIndex(id => id == this.currentImageIdOfGallery2);
            const galleryLength = Object.keys(this.gallery2).length;
            if (index >= galleryLength - 1) {
                this.currentImageIdOfGallery2 = Object.keys(this.gallery2)[0];
            }
            else {
                this.currentImageIdOfGallery2 = Object.keys(this.gallery2)[index + 1];
            }
            this.showImageGallery2(this.currentImageIdOfGallery2);
        },

        hide1() {
            this.display1 = false;
        },

        hide2() {
            this.display2 = false;
        },

        showImageGallery1(imageId: string) {
            if (this.gallery1[imageId].fullImage) {
                this.display1 = true;
            } else {
                import(/* @vite-ignore */ Images[imageId].fullImagePath).then(image => {
                    this.gallery1[imageId].fullImage = image.default;
                    this.currentImageIdOfGallery1 = imageId;
                    this.display1 = true;
                })
            }
        },

        showImageGallery2(imageId: string) {
            if (this.gallery2[imageId].fullImage) {
                this.display2 = true;
            } else {
                import(/* @vite-ignore */  Images[imageId].fullImagePath).then(image => {
                    this.gallery2[imageId].fullImage = image.default;
                    this.currentImageIdOfGallery2 = imageId;
                    this.display2 = true;
                })
            }
        },

        zoomIn() {
            const width = (this.$refs['image'] as HTMLElement).style.width;
            if (width) {
                (this.$refs['image'] as HTMLElement).style.width = parseInt(width) + 10 + '%';
            } else {
                (this.$refs['image'] as HTMLElement).style.width = '110%';
            }
        },

        zoomOut() {
            const width = (this.$refs['image'] as HTMLElement).style.width;
            if (parseInt(width) <= 100) return;
            if (width) {
                (this.$refs['image'] as HTMLElement).style.width = parseInt(width) - 10 + '%';
            }
        },
    },

    mounted() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            const offset = 300;

            entries.forEach(async entry => {
                if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y) {
                    if (Images[entry.target.id]) {
                        import(/* @vite-ignore */ Images[entry.target.id].thumbImagePath).then(image => {
                            if (entry.target.id in this.gallery1) {
                                this.gallery1[entry.target.id].thumbImage = image.default;
                            }
                            if (entry.target.id in this.gallery2) {
                                this.gallery2[entry.target.id].thumbImage = image.default;
                            }
                        })
                    }
                }

                if (entry.intersectionRect.y + offset >= entry.boundingClientRect.y) this.intersectionObserver?.unobserve(entry.target);
            });
        });

        [...Object.keys(this.gallery1), ...Object.keys(this.gallery2)].forEach((id) => {
            const element = document.getElementById(id);

            if (element && this.intersectionObserver) {
                this.intersectionObserver.observe(element);
            }
        });
    },

    unmounted() {
        this.intersectionObserver?.disconnect();
    }
})
</script>
<style scoped>
.app-archive {
    min-height: calc(
        calc(var(--vh, 1vh) * 100) - var(--bottom-app-navigation-height)
    );
    background-color: var(--clr-grayscale-11-1);
}

.content {
    letter-spacing: 0px;
    max-width: var(--content-width-0);
    font-size: 1.1em;
    margin: 5rem auto 5rem auto;
    text-align: left;
    word-spacing: 1px;
    line-height: 30px;
    transition: max-height 0.9s ease-out;
}

.content a,
a.content-like {
    color: var(--secondary-color-0);
}

figcaption {
    font-style: italic;
    text-align: center;
    opacity: 0.8;
    word-wrap: break-word;
    line-height: 1.4;
    font-size: 0.9em;
}

.content strong {
    color: var(--text-color-0);
}

.content strong em {
    color: var(--text-color-0);
}

.content h2 {
    font-size: 2.6rem;
    padding: 0.2em 0;
}

.content h2 {
    font-size: 2.2rem;
}

.content h2,
h2,
h3,
h4,
h5,
h6 {
    margin: 1em 0;
    line-height: 1.2;
}

.content p {
    margin: 1em 0;
    display: block !important;
}

.content img {
    width: 100%;
    border-radius: 0.5rem;
}

.content ol,
ul {
    padding-left: 1.2em;
}

.content blockquote {
    border-left: 6px solid var(--clr-grayscale-9);
    margin: 1.5em 0;
    padding: 0.5em 0.75em;
    quotes: "\201C""\201D""\2018""\2019";
    font-style: italic;
}

.content blockquote p {
    display: inline;
}
</style>