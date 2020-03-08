export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment {
        id
        text
        user {
            username
        }
    }
`;

export const CHATROOM_FRAGEMENT = `
    fragment ChatRoomParts on ChatRoom {
        id
        participants {
            id
            username
            avatar
        }
    }
`;

// export const FEED_FRAGMENT = `
//     fragment PostParts on Post {

//     }
// `;

export const USER_FRAGMENT = `
        id
        username
        avatar
`;

// export const FILE_FRAGMENT = `
//     fragment FileParts on File {
//         id
//         url
//     }
// `;

export const MESSAGE_FRAGMENT = `
    fragment MessageParts on Message {
        id
        text
        to {
            ${USER_FRAGMENT}
        }
        from {
            ${USER_FRAGMENT}
        }
    }
`;

// export const USER_FRAGMENT = `
//     fragment UserParts on User{
//         id
//         username
//         email
//         firstName
//         lastName
//         bio
//         posts {
//             id
//             location
//             caption
//         }
//     }
// `;
