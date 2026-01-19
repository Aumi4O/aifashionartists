export type MediaItem = {
  id: string;
  collectionId: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  w: number;
  h: number;
  title?: string;
  year?: string;
  tags?: string[];
};

export type Collection = {
  id: string;
  title: string;
  blurb?: string;
  items: MediaItem[];
};

export const collections: Collection[] = [
  {
    "id": "commercials",
    "title": "Commercials",
    "blurb": "Fashion film campaigns for luxury brands",
    "items": [
      {
        "id": "burberry_commercial_seamless.mp4",
        "collectionId": "commercials",
        "type": "video",
        "src": "/visuals/videos/Commercials/burberry_commercial_seamless.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Burberry Commercial"
      },
      {
        "id": "ferragamo_commercial_final.mp4",
        "collectionId": "commercials",
        "type": "video",
        "src": "/visuals/videos/Commercials/ferragamo_commercial_final.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Ferragamo Commercial"
      },
      {
        "id": "GIVENCHY_COMMERCIAL_SONG_50s.mp4",
        "collectionId": "commercials",
        "type": "video",
        "src": "/visuals/videos/Commercials/GIVENCHY_COMMERCIAL_SONG_50s.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Givenchy Commercial"
      },
      {
        "id": "japanese_shawl_v1_music.mp4",
        "collectionId": "commercials",
        "type": "video",
        "src": "/visuals/videos/Commercials/japanese_shawl_v1_music.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Japanese Shawl"
      },
      {
        "id": "mcqueen_glasses_with_music.mp4",
        "collectionId": "commercials",
        "type": "video",
        "src": "/visuals/videos/Commercials/mcqueen_glasses_with_music.mp4",
        "w": 1920,
        "h": 1080,
        "title": "McQueen Glasses"
      }
    ]
  },
  {
    "id": "portraits",
    "title": "Portraits",
    "blurb": "Irving Penn-inspired muse portraits",
    "items": [
      {
        "id": "aifashioartists_httpss.mj.run7-v-YsURIYc_Irving_Penn-inspired_9d4a0c21-b9c1-4d8b-84ad-f3ae0b41a598_0.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_httpss.mj.run7-v-YsURIYc_Irving_Penn-inspired_9d4a0c21-b9c1-4d8b-84ad-f3ae0b41a598_0.png",
        "w": 816,
        "h": 1456,
        "title": "Penn-inspired Portrait I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_i_b0cd0894-37db-47b0-acf9-1160f5e0aecc_1.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_i_b0cd0894-37db-47b0-acf9-1160f5e0aecc_1.png",
        "w": 816,
        "h": 1456,
        "title": "Muse Portrait 2026"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_0.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_0.png",
        "w": 816,
        "h": 1456,
        "title": "Muse Portrait II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_1.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_1.png",
        "w": 816,
        "h": 1456,
        "title": "Muse Portrait III"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_2.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_2.png",
        "w": 816,
        "h": 1456,
        "title": "Muse Portrait IV"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_cc38f428-602e-4ed8-9c24-308eaab5dd45_0.png",
        "collectionId": "portraits",
        "type": "image",
        "src": "/visuals/images/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_cc38f428-602e-4ed8-9c24-308eaab5dd45_0.png",
        "w": 816,
        "h": 1456,
        "title": "Muse Portrait V"
      }
    ]
  },
  {
    "id": "story",
    "title": "Story",
    "blurb": "Editorial fashion narratives",
    "items": [
      {
        "id": "aifashioartists_Irving_Penn-inspired_bathroom_portrait_vertic_0bf194f4-7ce1-4c7f-81d7-ab5c59471e56_1.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_bathroom_portrait_vertic_0bf194f4-7ce1-4c7f-81d7-ab5c59471e56_1.png",
        "w": 816,
        "h": 1456,
        "title": "Bathroom Portrait"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_4d9f9b6d-f6bc-4210-84be-96231825326a_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_4d9f9b6d-f6bc-4210-84be-96231825326a_0.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Film Still I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_0.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Film Still II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_3.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_3.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Film Still III"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__6dcc4d5f-32a1-494f-af42-82dd35ef14e4_1.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__6dcc4d5f-32a1-494f-af42-82dd35ef14e4_1.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Scene I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__ba2bfdd1-d8e7-4a96-9417-29f6296c29d0_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__ba2bfdd1-d8e7-4a96-9417-29f6296c29d0_0.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Scene II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_2de90fdd-5d03-431d-a212-0b369cc80457_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_2de90fdd-5d03-431d-a212-0b369cc80457_0.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Portrait I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5d19cd2e-6a0f-4757-bf36-ae449c32a579_2.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5d19cd2e-6a0f-4757-bf36-ae449c32a579_2.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Portrait II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5de92329-37a0-4363-b19f-1c040630b5b8_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5de92329-37a0-4363-b19f-1c040630b5b8_0.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Portrait III"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_76525de6-eb14-4276-90ae-6ed41039f750_1.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_76525de6-eb14-4276-90ae-6ed41039f750_1.png",
        "w": 816,
        "h": 1456,
        "title": "Fashion Portrait IV"
      },
      {
        "id": "aifashioartists_Irving_Penn-style_indoor_still_life_with_a_to_dd260008-f5c1-40f8-bb5c-25df896de7d9_0.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Irving_Penn-style_indoor_still_life_with_a_to_dd260008-f5c1-40f8-bb5c-25df896de7d9_0.png",
        "w": 816,
        "h": 1456,
        "title": "Indoor Still Life"
      },
      {
        "id": "aifashioartists_Vertical_45_editorial_portrait_with_domestic__e49f34d5-0b4c-4c1f-9519-a38d395cfe66_2.png",
        "collectionId": "story",
        "type": "image",
        "src": "/visuals/images/story/aifashioartists_Vertical_45_editorial_portrait_with_domestic__e49f34d5-0b4c-4c1f-9519-a38d395cfe66_2.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Portrait"
      }
    ]
  },
  {
    "id": "story-video",
    "title": "Story Video",
    "blurb": "Moving image narratives",
    "items": [
      {
        "id": "Award_winning_2026_202601192220_9m3eq.mp4",
        "collectionId": "story-video",
        "type": "video",
        "src": "/visuals/videos/story video/Award_winning_2026_202601192220_9m3eq.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Award Winning 2026 I"
      },
      {
        "id": "Award_winning_2026_202601192220_uzsln.mp4",
        "collectionId": "story-video",
        "type": "video",
        "src": "/visuals/videos/story video/Award_winning_2026_202601192220_uzsln.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Award Winning 2026 II"
      },
      {
        "id": "WhatsApp Video 2026-01-19 at 22.26.06.mp4",
        "collectionId": "story-video",
        "type": "video",
        "src": "/visuals/videos/story video/WhatsApp Video 2026-01-19 at 22.26.06.mp4",
        "w": 1920,
        "h": 1080,
        "title": "Story Video III"
      }
    ]
  },
  {
    "id": "vision-2026",
    "title": "Vision 2026",
    "blurb": "Forward-looking editorial and commercial work",
    "items": [
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_beauty_editorial_po_c4c39570-5f5e-4bd6-830a-ec46fdeffd97_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_beauty_editorial_po_c4c39570-5f5e-4bd6-830a-ec46fdeffd97_0.png",
        "w": 816,
        "h": 1456,
        "title": "Beauty Editorial 2026"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__3cae96cc-c6fc-4618-84bc-b5bba2320fba_1.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__3cae96cc-c6fc-4618-84bc-b5bba2320fba_1.png",
        "w": 816,
        "h": 1456,
        "title": "Commercial Fashion I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__8e9c5b38-91e5-4f03-894d-41bf5c63c9b5_2.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__8e9c5b38-91e5-4f03-894d-41bf5c63c9b5_2.png",
        "w": 816,
        "h": 1456,
        "title": "Commercial Fashion II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_commercial_footwear_4e30387a-b8ea-47bc-b979-414640970524_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_footwear_4e30387a-b8ea-47bc-b979-414640970524_0.png",
        "w": 816,
        "h": 1456,
        "title": "Commercial Footwear"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_commercial_handbag__f62ca7a2-3ade-4d13-883a-128eedb27d83_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_handbag__f62ca7a2-3ade-4d13-883a-128eedb27d83_0.png",
        "w": 816,
        "h": 1456,
        "title": "Commercial Handbag"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_09c81b0c-d89a-4cc7-851e-ca361606f0d8_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_09c81b0c-d89a-4cc7-851e-ca361606f0d8_0.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Commercial I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_1ea79a05-f627-4d82-b7b8-82ddfe22ce24_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_1ea79a05-f627-4d82-b7b8-82ddfe22ce24_0.png",
        "w": 816,
        "h": 1456,
        "title": "Editorial Commercial II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_1e2cc33a-66eb-4647-a557-d1e4d674fc01_3.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_1e2cc33a-66eb-4647-a557-d1e4d674fc01_3.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still I"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_0.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_0.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still II"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_1.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_1.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still III"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_2.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_2.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still IV"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_9113ec1b-28e0-4007-afd7-93257245801e_1.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_9113ec1b-28e0-4007-afd7-93257245801e_1.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still V"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_d27b08c7-3dbc-4c16-88b1-ada65d9d1622_1.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_d27b08c7-3dbc-4c16-88b1-ada65d9d1622_1.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still VI"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_fb0cb3f1-1083-4530-83f2-bcd2cce3d388_2.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_fb0cb3f1-1083-4530-83f2-bcd2cce3d388_2.png",
        "w": 816,
        "h": 1456,
        "title": "Film Still VII"
      },
      {
        "id": "aifashioartists_Irving_Penn-inspired_2026_macro_beauty_editor_5c0e0bb4-249f-4a4c-a856-25a6110eebf3_1.png",
        "collectionId": "vision-2026",
        "type": "image",
        "src": "/visuals/images/vision 2026/aifashioartists_Irving_Penn-inspired_2026_macro_beauty_editor_5c0e0bb4-249f-4a4c-a856-25a6110eebf3_1.png",
        "w": 816,
        "h": 1456,
        "title": "Macro Beauty Editorial"
      }
    ]
  },
  {
    "id": "2026",
    "title": "2026",
    "items": [
      {
        "id": "olgavas_imagine_chalk-white_seamless_a_linen_edge_barely_visi_698a780a-eb5d-472d-aa9c-9bbe3918f15d_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_a_linen_edge_barely_visi_698a780a-eb5d-472d-aa9c-9bbe3918f15d_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless a linen edge barely visi 698a780a-eb5d-472d-aa9c-9bbe3918f15d 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._86730bc1-88ff-40d7-a37f-76e6d0578dd2_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._86730bc1-88ff-40d7-a37f-76e6d0578dd2_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds quiet sparkle. 86730bc1-88ff-40d7-a37f-76e6d0578dd2 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._c6476586-13dd-4f70-9e4a-0f91b157bd66_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._c6476586-13dd-4f70-9e4a-0f91b157bd66_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds quiet sparkle. c6476586-13dd-4f70-9e4a-0f91b157bd66 0"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_specks_of_dust_602c2f94-ea67-457a-af97-8591df6f3dd7_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_air_holds_specks_of_dust_602c2f94-ea67-457a-af97-8591df6f3dd7_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds specks of dust 602c2f94-ea67-457a-af97-8591df6f3dd7 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b091b3fe-c96c-414c-89be-f117c786bd4b_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b091b3fe-c96c-414c-89be-f117c786bd4b_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b091b3fe-c96c-414c-89be-f117c786bd4b 3"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b47d97f9-ece6-49ad-83fe-f859608efe46 0"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b47d97f9-ece6-49ad-83fe-f859608efe46 3"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_dust_motes_spark._Story__fa26db24-3109-4e43-88b0-3e1ad16b95c5_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_chalk-white_seamless_dust_motes_spark._Story__fa26db24-3109-4e43-88b0-3e1ad16b95c5_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless dust motes spark. Story  fa26db24-3109-4e43-88b0-3e1ad16b95c5 3"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 0"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 1"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 2"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 3"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise f7d3eb25-2a23-41ab-bd37-f39ba662afa0 0"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise f7d3eb25-2a23-41ab-bd37-f39ba662afa0 1"
      },
      {
        "id": "olgavas_imagine_linen_daylight_cove_airy_negative_space._Stor_13ff141a-cbea-4dab-8cd3-7cd137d3b9fc_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linen_daylight_cove_airy_negative_space._Stor_13ff141a-cbea-4dab-8cd3-7cd137d3b9fc_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linen daylight cove airy negative space. Stor 13ff141a-cbea-4dab-8cd3-7cd137d3b9fc 0"
      },
      {
        "id": "olgavas_imagine_linen_tabletop_still-life_at_waist_height._St_517d9af7-4511-4773-bb68-eba8b245f185_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linen_tabletop_still-life_at_waist_height._St_517d9af7-4511-4773-bb68-eba8b245f185_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linen tabletop still-life at waist height. St 517d9af7-4511-4773-bb68-eba8b245f185 1"
      },
      {
        "id": "olgavas_imagine_linensky_gradient_backdrop_air_bright._Story__550c5bfa-eeb2-473b-9e40-a66d55bbed0d_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linensky_gradient_backdrop_air_bright._Story__550c5bfa-eeb2-473b-9e40-a66d55bbed0d_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky gradient backdrop air bright. Story  550c5bfa-eeb2-473b-9e40-a66d55bbed0d 1"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_245b7bbc-ead1-4773-b881-05a55fb41fda_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_245b7bbc-ead1-4773-b881-05a55fb41fda_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu 245b7bbc-ead1-4773-b881-05a55fb41fda 3"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_7ba8bc47-1519-4876-bdad-9d5bd6051b63_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_7ba8bc47-1519-4876-bdad-9d5bd6051b63_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu 7ba8bc47-1519-4876-bdad-9d5bd6051b63 2"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_c33afa0d-14b3-4109-81a1-e4dd42fe6923_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_c33afa0d-14b3-4109-81a1-e4dd42fe6923_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu c33afa0d-14b3-4109-81a1-e4dd42fe6923 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_3f62c861-58d8-4995-8f60-29fd70426bf0_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_3f62c861-58d8-4995-8f60-29fd70426bf0_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto 3f62c861-58d8-4995-8f60-29fd70426bf0 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto cea63a3e-71ab-4342-8792-3892e8e819da 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto cea63a3e-71ab-4342-8792-3892e8e819da 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_667ac654-0b4a-4c0c-9001-69a04e019ca7_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_667ac654-0b4a-4c0c-9001-69a04e019ca7_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 667ac654-0b4a-4c0c-9001-69a04e019ca7 0"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 1"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 2"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall dce7ff2b-a885-460d-b896-0cbcb89ef9ab 0"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall dce7ff2b-a885-460d-b896-0cbcb89ef9ab 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__66099eb8-0904-4338-a9d5-c2c45cea195e_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__66099eb8-0904-4338-a9d5-c2c45cea195e_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void linen seam low. Story a bright  66099eb8-0904-4338-a9d5-c2c45cea195e 1"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__c2d16262-846b-41aa-911b-8b7e1c4ea25a_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__c2d16262-846b-41aa-911b-8b7e1c4ea25a_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void linen seam low. Story a bright  c2d16262-846b-41aa-911b-8b7e1c4ea25a 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_muslin_cube_at_knee_height._Sto_7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/images/2026/olgavas_imagine_soot-ink_void_muslin_cube_at_knee_height._Sto_7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void muslin cube at knee height. Sto 7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a 3"
      }
    ]
  },
  {
    "id": "korean-photography-wall-art",
    "title": "Korean Photography",
    "items": [
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa f41b2022-06ef-4a31-9de9-efe91822a091 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 02d1a57d-9a59-494b-a8b6-f83c1edefefb 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 2abb8ead-b452-476a-a997-6911c5d9c288 2"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 1"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/images/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 3"
      }
    ]
  },
  {
    "id": "summer-2025",
    "title": "Summer 2025",
    "items": [
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "collectionId": "summer-2025",
        "type": "image",
        "src": "/visuals/images/Summer 2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 0e59b83f-ad41-48fa-a1cc-48b6cda0759f 2"
      },
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "collectionId": "summer-2025",
        "type": "image",
        "src": "/visuals/images/Summer 2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5 0"
      }
    ]
  }
] as any;
