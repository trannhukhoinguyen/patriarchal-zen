import {colors} from "@database/constants.ts";

export interface Video {
    id: number;
    title: string;
    image?: string,
    authors?: string[];
    channel?: string;
    duration?: string;
    path?: string;
    link?: string;
    other_link?: string;
    episodeId?: string;
}
export interface VideoList {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover?: string;
    authors?: string[];
    list?: Video[];
}

export const videos: Video[] = [
    {
        id: 1,
        title: "Video 1",
        image: "/images/youtube/",
    },
    {
        id: 2,
        title: "Video 2",
        image: "/images/youtube/",
    },
    {
        id: 3,
        title: "Video 3",
        image: "/images/youtube/",
    },
    {
        id: 4,
        title: "Video 4",
        image: "/images/youtube/",
    },
    {
        id: 5,
        title: "Video 5",
        image: "/images/youtube/",
    },
    {
        id: 6,
        title: "Video 6",
        image: "/images/youtube/",
    },
];

export const videoLists: VideoList[] = [
    {
        id: "1",
        title: "List 1",
        color: colors.teal,
        cover: "/images/youtube/",
        list: [],
    },
    {
        id: "2",
        title: "List 2",
        color: colors.green,
        cover: "/images/youtube/",
        list: [],
    },
    {
        id: "3",
        title: "List 3",
        color: colors.rose,
        cover: "/images/youtube/",
        list: [],
    },
    {
        id: "4",
        title: "List 4",
        color: colors.red,
        cover: "/images/youtube/",
        list: [],
    },
    {
        id: "5",
        title: "List 5",
        color: colors.pink,
        cover: "/images/youtube/",
        list: [],
    },
    {
        id: "6",
        title: "List 6",
        color: colors.gray,
        cover: "/images/youtube/",
        list: [],
    },
];
