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
        <div class="max-w-[85%] max-h-full overflow-auto">
            <div class="w-full h-auto" ref="image">
                <img
                    id="image-viewer-1"
                    :class="{ 'invisible': !gallery1[currentImageIdOfGallery1]?.fullImage }"
                    class="object-contain w-full h-full"
                    :src="gallery1[currentImageIdOfGallery1]?.fullImage"
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
        <div class="max-w-[450px] max-h-full overflow-auto">
            <div class="w-full h-auto" ref="image">
                <img
                    id="image-viewer-2"
                    :class="{ 'invisible': !gallery2[currentImageIdOfGallery2]?.fullImage }"
                    class="object-contain w-full h-full"
                    :src="gallery2[currentImageIdOfGallery2]?.fullImage"
                    alt
                />
            </div>
        </div>
    </div>

    <div
        class="app-archive content m-t-20 m-b-10 w-clamp-min-90-800 p-7 rounded-4 m-x-auto box-shadow-2-11"
    >
        <h2>{{ $translations.archive.contextTitle }}</h2>

        <p>{{ $translations.archive.context }}</p>

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

        <h2>{{ $translations.archive.howItWorkedTitle }}</h2>
        <p>{{ $translations.archive.howItWorked }}</p>

        <h3>{{ $translations.archive.add1.title }}</h3>
        <blockquote>
            <p>{{ $translations.archive.add1.paragraph1 }}</p>
            <p>{{ $translations.archive.add1.paragraph2 }}</p>
            <p>{{ $translations.archive.add1.paragraph3 }}</p>
            <ul>
                <li>{{ $translations.archive.add1.paragraph3ListItem1 }}</li>
                <li>{{ $translations.archive.add1.paragraph3ListItem2 }}</li>
                <li>{{ $translations.archive.add1.paragraph3ListItem3 }}</li>
                <li>{{ $translations.archive.add1.paragraph3ListItem4 }}</li>
                <li>{{ $translations.archive.add1.paragraph3ListItem5 }}</li>
                <li>{{ $translations.archive.add1.paragraph3ListItem6 }}</li>
            </ul>

            <p>{{ $translations.archive.add1.paragraph4 }}</p>

            <p>{{ $translations.archive.add1.paragraph5 }}</p>
            <p>{{ $translations.archive.add1.paragraph6 }}</p>
            <p>
                {{ $translations.archive.add1.paragraph7FirstPart }}
                <br />
                {{ $translations.archive.add1.paragraph7SecondPart }}
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
        <h3>{{ $translations.archive.add2.title }}</h3>

        <blockquote>
            <p>{{ $translations.archive.add2.paragraph1 }}</p>

            <p>{{ $translations.archive.add2.paragraph2 }}</p>
            <p>{{ $translations.archive.add2.paragraph3 }}</p>
            <p>{{ $translations.archive.add2.paragraph4 }}</p>
            <p>{{ $translations.archive.add2.paragraph5 }}</p>

            <ul>
                <li>{{ $translations.archive.add2.list1Item1 }}</li>
                <li>{{ $translations.archive.add2.list1Item2 }}</li>
                <li>{{ $translations.archive.add2.list1Item3 }}</li>
                <li>{{ $translations.archive.add2.list1Item4 }}</li>
                <li>{{ $translations.archive.add2.list1Item5 }}</li>
            </ul>

            <p>{{ $translations.archive.add2.paragraph6 }}</p>
            <ul>
                <li>{{ $translations.archive.add2.list2Item1 }}</li>
                <li>{{ $translations.archive.add2.list2Item2 }}</li>
                <li>{{ $translations.archive.add2.list2Item3 }}</li>
            </ul>

            <p>{{ $translations.archive.add2.paragraph7 }}</p>
            <p>{{ $translations.archive.add2.paragraph8 }}</p>
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

        <h2>{{ $translations.archive.creatorsTitle }}</h2>

        <p>{{ $translations.archive.creatorsParagraph }}</p>
        <a href="https://igor.roztropinski.com" target="_blank">
            <em>Igor Roztropiński</em>
        </a>
        <br />
        <a
            href="https://www.linkedin.com/in/aleksander-roztropi%C5%84ski-226587180/"
            target="_blank"
        >
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
import { Images } from "../../core/archive/images/images";

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
            this.currentImageIdOfGallery1 = imageId;

            if (this.gallery1[imageId].fullImage) {
                this.display1 = true;
            } else {
                this.display1 = true;
                this.$nextTick(() => {
                    const element = document.getElementById('image-viewer-1') as HTMLImageElement;
                    if (element) {
                        element.src = Images[imageId].fullImagePath
                        this.gallery1[imageId].fullImage = element.src
                        this.display1 = true;
                    }
                })
            }
        },

        showImageGallery2(imageId: string) {
            this.currentImageIdOfGallery2 = imageId;

            if (this.gallery2[imageId].fullImage) {
                this.display2 = true;
            } else {
                this.display2 = true;
                this.$nextTick(() => {
                    const element = document.getElementById('image-viewer-2') as HTMLImageElement;
                    if (element) {
                        element.src = Images[imageId].fullImagePath
                        this.gallery2[imageId].fullImage = element.src
                        this.display2 = true;
                    }
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
                        const element = document.getElementById(entry.target.id) as HTMLImageElement;
                        if (element) {
                            element.src = Images[entry.target.id].thumbImagePath
                            if (entry.target.id in this.gallery1) {
                                this.gallery1[entry.target.id].thumbImage = element.src;
                            }
                            if (entry.target.id in this.gallery2) {
                                this.gallery2[entry.target.id].thumbImage = element.src;
                            }
                        }
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