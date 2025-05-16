import { colors } from "./constants.ts";
import {
    youtubeVideos,
    youtubeVideoLists,
} from "./media/youtube.ts";
import {
    audios,
    audioLists,
} from "./media/audio.ts";
import {
    videos,
    videoLists,
} from "./media/video.ts";

interface Episode {
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
    color?: (typeof colors)[keyof typeof colors];
}
export const videosExample: Episode[] = videos;
export const audiosExample: Episode[] = audios;
export const youtubeVideosExample: Episode[] = youtubeVideos;
export interface Playlist {
    id: string;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover?: string;
    authors?: [];
    episodes?: Episode[];
}

export const playlists: Playlist[] = [
    {
        id: "1",
        title: "1",
        authors: [],
        color: colors.teal,
        cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
        episodes: videosExample,
    },
    {
        id: "2",
        title: "2",
        authors: [],
        color: colors.green,
        cover: "/images/pham_nhan_tu_tien_cover.jpg",
        episodes: videosExample,
    },
];

export const morePlaylists = [
    ...playlists.map((item) => ({
        ...item,
        id: item.id + "a",
    })),
];

export const sidebarPlaylists = [
    ...playlists.map((item) => ({
        ...item,
        id: item.id + "_side",
    })),
];

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
];

