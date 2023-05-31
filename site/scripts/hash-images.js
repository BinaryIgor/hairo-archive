const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const inspect = require('util').inspect;

const originalImagesPathPrefix = 'src/assets/images/archive';
const destinateImagesDirectoryPrefix = 'dist/images/archive';
const absoluteImagePathPrefix = '/images/archive';
const targetFileDirectory = 'src/core/archive/images/images.ts'

function copyFile(sourcePath, targetPath) {
    try {
        const targetDir = path.dirname(targetPath);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.copyFileSync(sourcePath, targetPath);
        console.log('File copied successfully.');
    } catch (err) {
        console.error('Error:', err);
    }
}

async function calculateImageHash(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('md5');
        const stream = fs.createReadStream(filePath);

        stream.on('data', data => {
            hash.update(data);
        });

        stream.on('end', () => {
            const imageHash = hash.digest('hex');
            resolve(imageHash);
        });

        stream.on('error', error => {
            reject(error);
        });
    });
}

async function hashImagePaths(images) {
    const hashedImages = {};

    for (const key in images) {
        if (images.hasOwnProperty(key)) {

            const image = images[key];
            let thumbImagePath = image.thumbImagePath;
            let fullImagePath = image.fullImagePath;

            const thumbHash = await calculateImageHash(thumbImagePath);
            const fullHash = await calculateImageHash(fullImagePath);

            const thumbPathParts = image.thumbImagePath.split('/');
            const fullPathParts = image.fullImagePath.split('/');

            thumbPathParts[thumbPathParts.length - 1] = thumbHash + '_' + thumbPathParts[thumbPathParts.length - 1];
            fullPathParts[fullPathParts.length - 1] = fullHash + '_' + fullPathParts[fullPathParts.length - 1];

            const thumbNewImagePath = thumbPathParts.join('/');
            const fullNewImagePath = fullPathParts.join('/');

            copyFile(thumbImagePath, thumbNewImagePath.replace(originalImagesPathPrefix, destinateImagesDirectoryPrefix))
            copyFile(fullImagePath, fullNewImagePath.replace(originalImagesPathPrefix, destinateImagesDirectoryPrefix))

            hashedImages[key] = {
                ...image,
                thumbImagePath: thumbNewImagePath.replace(originalImagesPathPrefix, absoluteImagePathPrefix),
                fullImagePath: fullNewImagePath.replace(originalImagesPathPrefix, absoluteImagePathPrefix),
            };
        }
    }

    return hashedImages;
}

const Images = {
    ACTIVE_ORDERS: {
        id: 'ACTIVE_ORDERS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_active-orders.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/active-orders.png'
    },
    BOT_SETTINGS: {
        id: 'BOT_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_bot-settings.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/bot-settings.png'
    },
    CREATE_ACCOUNT: {
        id: 'CREATE_ACCOUNT',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-account.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-account.png'
    },
    CREATE_INVITATION_2: {
        id: 'CREATE_INVITATION_2',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation-2.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation-2.png'
    },
    CREATE_INVITATION_3: {
        id: 'CREATE_INVITATION_3',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation-3.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation-3.png'
    },
    CREATE_INVITATION: {
        id: 'CREATE_INVITATION',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation.png'
    },
    EMOTICONS: {
        id: 'EMOTICONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_emoticons.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/emoticons.png'
    },
    END_VOTING_NOTIF: {
        id: 'END_VOTING_NOTIF',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_end-voting-notif.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/end-voting-notif.png'
    },
    FORBIDDEN_LIST: {
        id: 'FORBIDDEN_LIST',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_forbidden-list.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/forbidden-list.png'
    },
    FORGOT_PASSWORD: {
        id: 'FORGOT_PASSWORD',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_forgot-password.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/forgot-password.png'
    },
    FRIENDSHIP_ROOM_BLACK: {
        id: 'FRIENDSHIP_ROOM_BLACK',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room-black.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room-black.png'
    },
    FRIENDSHIP_ROOM_SETTINGS: {
        id: 'FRIENDSHIP_ROOM_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room-settings.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room-settings.png'
    },
    FRIENDSHIP_ROOM: {
        id: 'FRIENDSHIP_ROOM',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room.png'
    },
    FRIENDSHIP_SETTINGS: {
        id: 'FRIENDSHIP_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-settings.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-settings.png'
    },
    FRIENDSHIP_SPACE: {
        id: 'FRIENDSHIP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-space.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-space.png'
    },
    GROUP_SPACE: {
        id: 'GROUP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_group-space.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/group-space.png'
    },
    LEAVE_GROUP: {
        id: 'LEAVE_GROUP',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_leave-group.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/leave-group.png'
    },
    MEET_UP: {
        id: 'MEET_UP',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meet-up.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/meet-up.png'
    },
    MEETING_PROPOSITION: {
        id: 'MEETING_PROPOSITION',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meeting-proposition.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/meeting-proposition.png'
    },
    MEETING_VOTING: {
        id: 'MEETING_VOTING',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meeting-voting.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/meeting-voting.png'
    },
    NOTIFICATIONS: {
        id: 'NOTIFICATIONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_notifications.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/notifications.png'
    },
    ORDER_A_SEARCH: {
        id: 'ORDER_A_SEARCH',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_order-a-search.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/order-a-search.png'
    },
    ORDERS_EXPIRE: {
        id: 'ORDERS_EXPIRE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_orders-expire.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/orders-expire.png'
    },
    PLANS: {
        id: 'PLANS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_plans.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/plans.png'
    },
    PROPOSITIONS: {
        id: 'PROPOSITIONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_propositions.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/propositions.png'
    },
    SEARCH_FORM: {
        id: 'SEARCH_FORM',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_search-form.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/search-form.png'
    },
    SEARCH_USERS: {
        id: 'SEARCH_USERS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_search-users.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/search-users.png'
    },
    SETTINGS: {
        id: 'SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_settings.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/settings.png'
    },
    SIGN_IN: {
        id: 'SIGN_IN',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_sign-in.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/sign-in.png'
    },
    TAGS_ALL: {
        id: 'TAGS_ALL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-all.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-all.png'
    },
    TAGS_MODAL: {
        id: 'TAGS_MODAL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-modal.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-modal.png'
    },
    TAGS_POPULAR: {
        id: 'TAGS_POPULAR',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-popular.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-popular.png'
    },
    TAGS_SPECIAL: {
        id: 'TAGS_SPECIAL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-special.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-special.png'
    },
    USER_PROFILE_1: {
        id: 'USER_PROFILE_1',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-1.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-1.png'
    },
    USER_PROFILE_2: {
        id: 'USER_PROFILE_2',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-2.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-2.png'
    },
    USER_PROFILE_3: {
        id: 'USER_PROFILE_3',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-3.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-3.png'
    },
    USER: {
        id: 'USER',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/user.png'
    },
    USERS_FILTERS: {
        id: 'USERS_FILTERS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_users-filters.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/users-filters.png'
    },
    VOTING_ACTIVE: {
        id: 'VOTING_ACTIVE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_voting-active.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/voting-active.png'
    },
    VOTING_CLOSED: {
        id: 'VOTING_CLOSED',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_voting-closed.png',
        fullImagePath: originalImagesPathPrefix + '/desktop/voting-closed.png'
    },
    MOBILE_EMOTICONS: {
        id: 'MOBILE_EMOTICONS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_emoticons.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/emoticons.png'
    },
    MOBILE_FORBIDDEN_LIST: {
        id: 'MOBILE_FORBIDDEN_LIST',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_forbidden-list.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/forbidden-list.png'
    },
    MOBILE_FRIENDSHIP_MENU: {
        id: 'MOBILE_FRIENDSHIP_MENU',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-menu.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-menu.png'
    },
    MOBILE_FRIENDSHIP_ROOM: {
        id: 'MOBILE_FRIENDSHIP_ROOM',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-room.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-room.png'
    },
    MOBILE_FRIENDSHIP_SPACE: {
        id: 'MOBILE_FRIENDSHIP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-space.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-space.png'
    },
    MOBILE_LEAVE: {
        id: 'MOBILE_LEAVE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_leave.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/leave.png'
    },
    MOBILE_MEET_UP_PREP: {
        id: 'MOBILE_MEET_UP_PREP',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_meet-up-prep.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/meet-up-prep.png'
    },
    MOBILE_MEET_UP: {
        id: 'MOBILE_MEET_UP',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_meet-up.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/meet-up.png'
    },
    MOBILE_NOTIFICATION: {
        id: 'MOBILE_NOTIFICATION',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_notification.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/notification.png'
    },
    MOBILE_NOTIFICATIONS: {
        id: 'MOBILE_NOTIFICATIONS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_notifications.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/notifications.png'
    },
    MOBILE_ORDERS: {
        id: 'MOBILE_ORDERS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_orders.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/orders.png'
    },
    MOBILE_PLANS: {
        id: 'MOBILE_PLANS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_plans.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/plans.png'
    },
    MOBILE_ROOM_BOT: {
        id: 'MOBILE_ROOM_BOT',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_room-bot.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/room-bot.png'
    },
    MOBILE_ROOM_SETTINGS: {
        id: 'MOBILE_ROOM_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_room-settings.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/room-settings.png'
    },
    MOBILE_SEARCH_FORM_2: {
        id: 'MOBILE_SEARCH_FORM_2',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_search-form-2.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/search-form-2.png'
    },
    MOBILE_SEARCHING: {
        id: 'MOBILE_SEARCHING',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_searching.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/searching.png'
    },
    MOBILE_SPACES: {
        id: 'MOBILE_SPACES',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_spaces.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/spaces.png'
    },
    MOBILE_TAGS_SPECIAL: {
        id: 'MOBILE_TAGS_SPECIAL',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_tags-special.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/tags-special.png'
    },
    MOBILE_USER_FILTERS: {
        id: 'MOBILE_USER_FILTERS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-filters.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-filters.png'
    },
    MOBILE_USER_PROFILE: {
        id: 'MOBILE_USER_PROFILE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-profile.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-profile.png'
    },
    MOBILE_USER_SEARCH: {
        id: 'MOBILE_USER_SEARCH',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-search.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-search.png'
    },
    MOBILE_USER: {
        id: 'MOBILE_USER',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user.png',
        fullImagePath: originalImagesPathPrefix + '/mobile/user.png'
    },
}

hashImagePaths(Images).then(value => {
    fs.writeFile(targetFileDirectory, `export const Images = ${inspect(JSON.parse(JSON.stringify(value)), false, 100)} as { [key: string]: { id: string, thumbImagePath: string, fullImagePath: string } };`, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Hashed image paths have been written to ${targetFileDirectory}`);
    });
});
