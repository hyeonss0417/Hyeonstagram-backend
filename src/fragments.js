export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment {
        id
        text
        user {
            username
        }
    }
`;

export const FEED_FRAGMENT = `
    fragment PostParts on Post {
        
    }
`;

export const USER_FRAGMENT = `
    fragment UserParts on User {
        id
        username
    }
`;

export const FILE_FRAGMENT = `
    fragment FileParts on File {
        id
        url
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
