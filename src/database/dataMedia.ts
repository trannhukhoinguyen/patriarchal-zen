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
        episodes: videos,
    },
    {
        id: "2",
        title: "2",
        authors: [],
        color: colors.green,
        cover: "/images/pham_nhan_tu_tien_cover.jpg",
        episodes: videos,
    },
    {
        id: "3",
        title: "3",
        authors: [],
        color: colors.rose,
        cover: "/images/mortals-journey-to-immortality-season-3.png",
        episodes: videos,
    },
    {
        id: "4",
        title: "4",
        authors: [],
        color: colors.red,
        cover: "/images/pham_nhan_tu_tien.jpg",
        episodes: videos,
    },
    /* {
      id: "5",
      title: "5",
      authors: [],
      color: colors.pink,
      cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
      episodes: [],
    },
    {
      id: "6",
      title: "6",
      authors: [],
      color: colors.gray,
      cover: "/images/pham_nhan_tu_tien_duyen_khoi.jpg",
      episodes: [],
    },*/
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

