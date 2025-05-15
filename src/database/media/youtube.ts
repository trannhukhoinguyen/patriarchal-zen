import {colors} from "@database/constants.ts";

export interface YoutubeVideo {
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
export interface YoutubeList {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover?: string;
    authors?: string[];
    list?: YoutubeVideo[];
}

export const youtubeVideos: YoutubeVideo[] = [
    {
        id: 1,
        title: "Video 1",
        image: "/images/media/",
    },
    {
        id: 2,
        title: "Video 2",
        image: "/images/media/",
    },
    {
        id: 3,
        title: "Video 3",
        image: "/images/media/",
    },
    {
        id: 4,
        title: "Video 4",
        image: "/images/media/",
    },
    {
        id: 5,
        title: "Video 5",
        image: "/images/media/",
    },
    {
        id: 6,
        title: "Video 6",
        image: "/images/media/",
    },
];

export const youtubeVideoLists: YoutubeList[] = [
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
