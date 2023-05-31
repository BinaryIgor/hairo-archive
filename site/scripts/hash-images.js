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
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_active-orders.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/active-orders.jpg'
    },
    BOT_SETTINGS: {
        id: 'BOT_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_bot-settings.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/bot-settings.jpg'
    },
    CREATE_ACCOUNT: {
        id: 'CREATE_ACCOUNT',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-account.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-account.jpg'
    },
    CREATE_INVITATION_2: {
        id: 'CREATE_INVITATION_2',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation-2.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation-2.jpg'
    },
    CREATE_INVITATION_3: {
        id: 'CREATE_INVITATION_3',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation-3.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation-3.jpg'
    },
    CREATE_INVITATION: {
        id: 'CREATE_INVITATION',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_create-invitation.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/create-invitation.jpg'
    },
    EMOTICONS: {
        id: 'EMOTICONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_emoticons.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/emoticons.jpg'
    },
    END_VOTING_NOTIF: {
        id: 'END_VOTING_NOTIF',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_end-voting-notif.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/end-voting-notif.jpg'
    },
    FORBIDDEN_LIST: {
        id: 'FORBIDDEN_LIST',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_forbidden-list.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/forbidden-list.jpg'
    },
    FORGOT_PASSWORD: {
        id: 'FORGOT_PASSWORD',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_forgot-password.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/forgot-password.jpg'
    },
    FRIENDSHIP_ROOM_BLACK: {
        id: 'FRIENDSHIP_ROOM_BLACK',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room-black.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room-black.jpg'
    },
    FRIENDSHIP_ROOM_SETTINGS: {
        id: 'FRIENDSHIP_ROOM_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room-settings.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room-settings.jpg'
    },
    FRIENDSHIP_ROOM: {
        id: 'FRIENDSHIP_ROOM',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-room.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-room.jpg'
    },
    FRIENDSHIP_SETTINGS: {
        id: 'FRIENDSHIP_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-settings.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-settings.jpg'
    },
    FRIENDSHIP_SPACE: {
        id: 'FRIENDSHIP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_friendship-space.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/friendship-space.jpg'
    },
    GROUP_SPACE: {
        id: 'GROUP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_group-space.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/group-space.jpg'
    },
    LEAVE_GROUP: {
        id: 'LEAVE_GROUP',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_leave-group.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/leave-group.jpg'
    },
    MEET_UP: {
        id: 'MEET_UP',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meet-up.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/meet-up.jpg'
    },
    MEETING_PROPOSITION: {
        id: 'MEETING_PROPOSITION',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meeting-proposition.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/meeting-proposition.jpg'
    },
    MEETING_VOTING: {
        id: 'MEETING_VOTING',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_meeting-voting.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/meeting-voting.jpg'
    },
    NOTIFICATIONS: {
        id: 'NOTIFICATIONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_notifications.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/notifications.jpg'
    },
    ORDER_A_SEARCH: {
        id: 'ORDER_A_SEARCH',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_order-a-search.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/order-a-search.jpg'
    },
    ORDERS_EXPIRE: {
        id: 'ORDERS_EXPIRE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_orders-expire.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/orders-expire.jpg'
    },
    PLANS: {
        id: 'PLANS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_plans.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/plans.jpg'
    },
    PROPOSITIONS: {
        id: 'PROPOSITIONS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_propositions.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/propositions.jpg'
    },
    SEARCH_FORM: {
        id: 'SEARCH_FORM',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_search-form.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/search-form.jpg'
    },
    SEARCH_USERS: {
        id: 'SEARCH_USERS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_search-users.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/search-users.jpg'
    },
    SETTINGS: {
        id: 'SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_settings.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/settings.jpg'
    },
    SIGN_IN: {
        id: 'SIGN_IN',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_sign-in.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/sign-in.jpg'
    },
    TAGS_ALL: {
        id: 'TAGS_ALL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-all.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-all.jpg'
    },
    TAGS_MODAL: {
        id: 'TAGS_MODAL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-modal.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-modal.jpg'
    },
    TAGS_POPULAR: {
        id: 'TAGS_POPULAR',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-popular.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-popular.jpg'
    },
    TAGS_SPECIAL: {
        id: 'TAGS_SPECIAL',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_tags-special.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/tags-special.jpg'
    },
    USER_PROFILE_1: {
        id: 'USER_PROFILE_1',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-1.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-1.jpg'
    },
    USER_PROFILE_2: {
        id: 'USER_PROFILE_2',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-2.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-2.jpg'
    },
    USER_PROFILE_3: {
        id: 'USER_PROFILE_3',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user-profile-3.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/user-profile-3.jpg'
    },
    USER: {
        id: 'USER',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_user.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/user.jpg'
    },
    USERS_FILTERS: {
        id: 'USERS_FILTERS',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_users-filters.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/users-filters.jpg'
    },
    VOTING_ACTIVE: {
        id: 'VOTING_ACTIVE',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_voting-active.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/voting-active.jpg'
    },
    VOTING_CLOSED: {
        id: 'VOTING_CLOSED',
        thumbImagePath: originalImagesPathPrefix + '/desktop/thumb_voting-closed.jpg',
        fullImagePath: originalImagesPathPrefix + '/desktop/voting-closed.jpg'
    },
    MOBILE_EMOTICONS: {
        id: 'MOBILE_EMOTICONS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_emoticons.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/emoticons.jpg'
    },
    MOBILE_FORBIDDEN_LIST: {
        id: 'MOBILE_FORBIDDEN_LIST',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_forbidden-list.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/forbidden-list.jpg'
    },
    MOBILE_FRIENDSHIP_MENU: {
        id: 'MOBILE_FRIENDSHIP_MENU',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-menu.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-menu.jpg'
    },
    MOBILE_FRIENDSHIP_ROOM: {
        id: 'MOBILE_FRIENDSHIP_ROOM',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-room.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-room.jpg'
    },
    MOBILE_FRIENDSHIP_SPACE: {
        id: 'MOBILE_FRIENDSHIP_SPACE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_friendship-space.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/friendship-space.jpg'
    },
    MOBILE_LEAVE: {
        id: 'MOBILE_LEAVE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_leave.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/leave.jpg'
    },
    MOBILE_MEET_UP_PREP: {
        id: 'MOBILE_MEET_UP_PREP',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_meet-up-prep.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/meet-up-prep.jpg'
    },
    MOBILE_MEET_UP: {
        id: 'MOBILE_MEET_UP',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_meet-up.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/meet-up.jpg'
    },
    MOBILE_NOTIFICATION: {
        id: 'MOBILE_NOTIFICATION',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_notification.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/notification.jpg'
    },
    MOBILE_NOTIFICATIONS: {
        id: 'MOBILE_NOTIFICATIONS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_notifications.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/notifications.jpg'
    },
    MOBILE_ORDERS: {
        id: 'MOBILE_ORDERS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_orders.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/orders.jpg'
    },
    MOBILE_PLANS: {
        id: 'MOBILE_PLANS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_plans.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/plans.jpg'
    },
    MOBILE_ROOM_BOT: {
        id: 'MOBILE_ROOM_BOT',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_room-bot.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/room-bot.jpg'
    },
    MOBILE_ROOM_SETTINGS: {
        id: 'MOBILE_ROOM_SETTINGS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_room-settings.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/room-settings.jpg'
    },
    MOBILE_SEARCH_FORM_2: {
        id: 'MOBILE_SEARCH_FORM_2',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_search-form-2.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/search-form-2.jpg'
    },
    MOBILE_SEARCHING: {
        id: 'MOBILE_SEARCHING',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_searching.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/searching.jpg'
    },
    MOBILE_SPACES: {
        id: 'MOBILE_SPACES',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_spaces.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/spaces.jpg'
    },
    MOBILE_TAGS_SPECIAL: {
        id: 'MOBILE_TAGS_SPECIAL',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_tags-special.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/tags-special.jpg'
    },
    MOBILE_USER_FILTERS: {
        id: 'MOBILE_USER_FILTERS',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-filters.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-filters.jpg'
    },
    MOBILE_USER_PROFILE: {
        id: 'MOBILE_USER_PROFILE',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-profile.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-profile.jpg'
    },
    MOBILE_USER_SEARCH: {
        id: 'MOBILE_USER_SEARCH',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user-search.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/user-search.jpg'
    },
    MOBILE_USER: {
        id: 'MOBILE_USER',
        thumbImagePath: originalImagesPathPrefix + '/mobile/thumb_user.jpg',
        fullImagePath: originalImagesPathPrefix + '/mobile/user.jpg'
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
