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
    "items": [
      { "id": "burberry_commercial_seamless.mp4", "collectionId": "commercials", "type": "video", "src": "/visuals/Commercials /burberry_commercial_seamless.mp4", "w": 1920, "h": 1080, "title": "Burberry Commercial" },
      { "id": "ferragamo_commercial_final.mp4", "collectionId": "commercials", "type": "video", "src": "/visuals/Commercials /ferragamo_commercial_final.mp4", "w": 1920, "h": 1080, "title": "Ferragamo Commercial" },
      { "id": "GIVENCHY_COMMERCIAL_SONG_50s.mp4", "collectionId": "commercials", "type": "video", "src": "/visuals/Commercials /GIVENCHY_COMMERCIAL_SONG_50s.mp4", "w": 1920, "h": 1080, "title": "Givenchy Commercial" },
      { "id": "japanese_shawl_v1_music.mp4", "collectionId": "commercials", "type": "video", "src": "/visuals/Commercials /japanese_shawl_v1_music.mp4", "w": 1920, "h": 1080, "title": "Japanese Shawl" },
      { "id": "mcqueen_glasses_with_music.mp4", "collectionId": "commercials", "type": "video", "src": "/visuals/Commercials /mcqueen_glasses_with_music.mp4", "w": 1920, "h": 1080, "title": "McQueen Glasses" }
    ]
  },
  {
    "id": "vision-2026",
    "title": "Vision 2026",
    "items": [
      { "id": "vision2026_1", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_beauty_editorial_po_c4c39570-5f5e-4bd6-830a-ec46fdeffd97_0.png", "w": 816, "h": 1456, "title": "2026 Beauty Editorial" },
      { "id": "vision2026_2", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__3cae96cc-c6fc-4618-84bc-b5bba2320fba_1.png", "w": 816, "h": 1456, "title": "2026 Commercial Fashion" },
      { "id": "vision2026_3", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_fashion__8e9c5b38-91e5-4f03-894d-41bf5c63c9b5_2.png", "w": 816, "h": 1456, "title": "2026 Commercial Fashion 2" },
      { "id": "vision2026_4", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_footwear_4e30387a-b8ea-47bc-b979-414640970524_0.png", "w": 816, "h": 1456, "title": "2026 Footwear" },
      { "id": "vision2026_5", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_commercial_handbag__f62ca7a2-3ade-4d13-883a-128eedb27d83_0.png", "w": 816, "h": 1456, "title": "2026 Handbag" },
      { "id": "vision2026_6", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_09c81b0c-d89a-4cc7-851e-ca361606f0d8_0.png", "w": 816, "h": 1456, "title": "2026 Editorial" },
      { "id": "vision2026_7", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_commercia_1ea79a05-f627-4d82-b7b8-82ddfe22ce24_0.png", "w": 816, "h": 1456, "title": "2026 Editorial 2" },
      { "id": "vision2026_8", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_1e2cc33a-66eb-4647-a557-d1e4d674fc01_3.png", "w": 816, "h": 1456, "title": "2026 Film Still" },
      { "id": "vision2026_9", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_0.png", "w": 816, "h": 1456, "title": "2026 Film Still 2" },
      { "id": "vision2026_10", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_1.png", "w": 816, "h": 1456, "title": "2026 Film Still 3" },
      { "id": "vision2026_11", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_2a0e6a90-6e77-4da7-99b3-fb8daf38072e_2.png", "w": 816, "h": 1456, "title": "2026 Film Still 4" },
      { "id": "vision2026_12", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_9113ec1b-28e0-4007-afd7-93257245801e_1.png", "w": 816, "h": 1456, "title": "2026 Film Still 5" },
      { "id": "vision2026_13", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_d27b08c7-3dbc-4c16-88b1-ada65d9d1622_1.png", "w": 816, "h": 1456, "title": "2026 Film Still 6" },
      { "id": "vision2026_14", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_editorial_film_stil_fb0cb3f1-1083-4530-83f2-bcd2cce3d388_2.png", "w": 816, "h": 1456, "title": "2026 Film Still 7" },
      { "id": "vision2026_15", "collectionId": "vision-2026", "type": "image", "src": "/visuals/vision 2026/aifashioartists_Irving_Penn-inspired_2026_macro_beauty_editor_5c0e0bb4-249f-4a4c-a856-25a6110eebf3_1.png", "w": 816, "h": 1456, "title": "2026 Macro Beauty" }
    ]
  },
  {
    "id": "story",
    "title": "Story",
    "items": [
      { "id": "story_1", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_bathroom_portrait_vertic_0bf194f4-7ce1-4c7f-81d7-ab5c59471e56_1.png", "w": 816, "h": 1456, "title": "Bathroom Portrait" },
      { "id": "story_2", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_4d9f9b6d-f6bc-4210-84be-96231825326a_0.png", "w": 816, "h": 1456, "title": "Editorial Fashion Film" },
      { "id": "story_3", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_0.png", "w": 816, "h": 1456, "title": "Editorial Fashion Film 2" },
      { "id": "story_4", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_film_s_5e4603cb-018a-4305-ab25-80e2a64ab062_3.png", "w": 816, "h": 1456, "title": "Editorial Fashion Film 3" },
      { "id": "story_5", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__6dcc4d5f-32a1-494f-af42-82dd35ef14e4_1.png", "w": 816, "h": 1456, "title": "Editorial Fashion Scene" },
      { "id": "story_6", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_editorial_fashion_scene__ba2bfdd1-d8e7-4a96-9417-29f6296c29d0_0.png", "w": 816, "h": 1456, "title": "Editorial Fashion Scene 2" },
      { "id": "story_7", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_2de90fdd-5d03-431d-a212-0b369cc80457_0.png", "w": 816, "h": 1456, "title": "Fashion Portrait" },
      { "id": "story_8", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5d19cd2e-6a0f-4757-bf36-ae449c32a579_2.png", "w": 816, "h": 1456, "title": "Fashion Portrait 2" },
      { "id": "story_9", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_5de92329-37a0-4363-b19f-1c040630b5b8_0.png", "w": 816, "h": 1456, "title": "Fashion Portrait 3" },
      { "id": "story_10", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-inspired_fashion_portrait_with_th_76525de6-eb14-4276-90ae-6ed41039f750_1.png", "w": 816, "h": 1456, "title": "Fashion Portrait 4" },
      { "id": "story_11", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Irving_Penn-style_indoor_still_life_with_a_to_dd260008-f5c1-40f8-bb5c-25df896de7d9_0.png", "w": 816, "h": 1456, "title": "Indoor Still Life" },
      { "id": "story_12", "collectionId": "story", "type": "image", "src": "/visuals/story/aifashioartists_Vertical_45_editorial_portrait_with_domestic__e49f34d5-0b4c-4c1f-9519-a38d395cfe66_2.png", "w": 816, "h": 1456, "title": "Editorial Portrait" }
    ]
  },
  {
    "id": "story-video",
    "title": "Story Video",
    "items": [
      { "id": "story_video_1", "collectionId": "story-video", "type": "video", "src": "/visuals/story video/Award_winning_2026_202601192220_9m3eq.mp4", "w": 1920, "h": 1080, "title": "Award Winning 2026" },
      { "id": "story_video_2", "collectionId": "story-video", "type": "video", "src": "/visuals/story video/Award_winning_2026_202601192220_uzsln.mp4", "w": 1920, "h": 1080, "title": "Award Winning 2026 II" },
      { "id": "story_video_3", "collectionId": "story-video", "type": "video", "src": "/visuals/story video/WhatsApp Video 2026-01-19 at 22.26.06.mp4", "w": 1920, "h": 1080, "title": "Story Video" }
    ]
  },
  {
    "id": "portraits",
    "title": "Portraits",
    "items": [
      { "id": "portraits_1", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_httpss.mj.run7-v-YsURIYc_Irving_Penn-inspired_9d4a0c21-b9c1-4d8b-84ad-f3ae0b41a598_0.png", "w": 816, "h": 1456, "title": "Muse Portrait" },
      { "id": "portraits_2", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_i_b0cd0894-37db-47b0-acf9-1160f5e0aecc_1.png", "w": 816, "h": 1456, "title": "Muse Portrait 2026" },
      { "id": "portraits_3", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_0.png", "w": 816, "h": 1456, "title": "Muse Portrait 2026 II" },
      { "id": "portraits_4", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_1.png", "w": 816, "h": 1456, "title": "Muse Portrait 2026 III" },
      { "id": "portraits_5", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_92b8a804-d98f-48f5-a7ff-787011c3a8c4_2.png", "w": 816, "h": 1456, "title": "Muse Portrait 2026 IV" },
      { "id": "portraits_6", "collectionId": "portraits", "type": "image", "src": "/visuals/portraits/aifashioartists_Irving_Penn-inspired_muse_portrait_for_2026_m_cc38f428-602e-4ed8-9c24-308eaab5dd45_0.png", "w": 816, "h": 1456, "title": "Muse Portrait 2026 V" }
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
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_a_linen_edge_barely_visi_698a780a-eb5d-472d-aa9c-9bbe3918f15d_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless a linen edge barely visi 698a780a-eb5d-472d-aa9c-9bbe3918f15d 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._86730bc1-88ff-40d7-a37f-76e6d0578dd2_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._86730bc1-88ff-40d7-a37f-76e6d0578dd2_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds quiet sparkle. 86730bc1-88ff-40d7-a37f-76e6d0578dd2 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._c6476586-13dd-4f70-9e4a-0f91b157bd66_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_air_holds_quiet_sparkle._c6476586-13dd-4f70-9e4a-0f91b157bd66_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds quiet sparkle. c6476586-13dd-4f70-9e4a-0f91b157bd66 0"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_air_holds_specks_of_dust_602c2f94-ea67-457a-af97-8591df6f3dd7_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_air_holds_specks_of_dust_602c2f94-ea67-457a-af97-8591df6f3dd7_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless air holds specks of dust 602c2f94-ea67-457a-af97-8591df6f3dd7 2"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b091b3fe-c96c-414c-89be-f117c786bd4b_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b091b3fe-c96c-414c-89be-f117c786bd4b_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b091b3fe-c96c-414c-89be-f117c786bd4b 3"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b47d97f9-ece6-49ad-83fe-f859608efe46 0"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_breath_of_dust._Story_th_b47d97f9-ece6-49ad-83fe-f859608efe46_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless breath of dust. Story th b47d97f9-ece6-49ad-83fe-f859608efe46 3"
      },
      {
        "id": "olgavas_imagine_chalk-white_seamless_dust_motes_spark._Story__fa26db24-3109-4e43-88b0-3e1ad16b95c5_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_chalk-white_seamless_dust_motes_spark._Story__fa26db24-3109-4e43-88b0-3e1ad16b95c5_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine chalk-white seamless dust motes spark. Story  fa26db24-3109-4e43-88b0-3e1ad16b95c5 3"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 0"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 1"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 2"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_93222c94-0c85-4b91-9813-be646b854004_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise 93222c94-0c85-4b91-9813-be646b854004 3"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise f7d3eb25-2a23-41ab-bd37-f39ba662afa0 0"
      },
      {
        "id": "olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_close-crop_beauty_headshot_soft_bangs_precise_f7d3eb25-2a23-41ab-bd37-f39ba662afa0_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine close-crop beauty headshot soft bangs precise f7d3eb25-2a23-41ab-bd37-f39ba662afa0 1"
      },
      {
        "id": "olgavas_imagine_linen_daylight_cove_airy_negative_space._Stor_13ff141a-cbea-4dab-8cd3-7cd137d3b9fc_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linen_daylight_cove_airy_negative_space._Stor_13ff141a-cbea-4dab-8cd3-7cd137d3b9fc_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linen daylight cove airy negative space. Stor 13ff141a-cbea-4dab-8cd3-7cd137d3b9fc 0"
      },
      {
        "id": "olgavas_imagine_linen_tabletop_still-life_at_waist_height._St_517d9af7-4511-4773-bb68-eba8b245f185_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linen_tabletop_still-life_at_waist_height._St_517d9af7-4511-4773-bb68-eba8b245f185_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linen tabletop still-life at waist height. St 517d9af7-4511-4773-bb68-eba8b245f185 1"
      },
      {
        "id": "olgavas_imagine_linensky_gradient_backdrop_air_bright._Story__550c5bfa-eeb2-473b-9e40-a66d55bbed0d_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linensky_gradient_backdrop_air_bright._Story__550c5bfa-eeb2-473b-9e40-a66d55bbed0d_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky gradient backdrop air bright. Story  550c5bfa-eeb2-473b-9e40-a66d55bbed0d 1"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_245b7bbc-ead1-4773-b881-05a55fb41fda_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_245b7bbc-ead1-4773-b881-05a55fb41fda_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu 245b7bbc-ead1-4773-b881-05a55fb41fda 3"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_7ba8bc47-1519-4876-bdad-9d5bd6051b63_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_7ba8bc47-1519-4876-bdad-9d5bd6051b63_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu 7ba8bc47-1519-4876-bdad-9d5bd6051b63 2"
      },
      {
        "id": "olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_c33afa0d-14b3-4109-81a1-e4dd42fe6923_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_linensky_studio_breeze_implied._Story_one_flu_c33afa0d-14b3-4109-81a1-e4dd42fe6923_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine linensky studio breeze implied. Story one flu c33afa0d-14b3-4109-81a1-e4dd42fe6923 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_3f62c861-58d8-4995-8f60-29fd70426bf0_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_3f62c861-58d8-4995-8f60-29fd70426bf0_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto 3f62c861-58d8-4995-8f60-29fd70426bf0 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto cea63a3e-71ab-4342-8792-3892e8e819da 1"
      },
      {
        "id": "olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_pale_mineral_plaster_airy_negative_space._Sto_cea63a3e-71ab-4342-8792-3892e8e819da_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine pale mineral plaster airy negative space. Sto cea63a3e-71ab-4342-8792-3892e8e819da 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_667ac654-0b4a-4c0c-9001-69a04e019ca7_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_667ac654-0b4a-4c0c-9001-69a04e019ca7_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 667ac654-0b4a-4c0c-9001-69a04e019ca7 0"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 1"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_2.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 2"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_9d921841-d307-410f-be6b-d5850adf8322_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall 9d921841-d307-410f-be6b-d5850adf8322 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_0.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall dce7ff2b-a885-460d-b896-0cbcb89ef9ab 0"
      },
      {
        "id": "olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_studio_void_a_single_linen_roll_fall_dce7ff2b-a885-460d-b896-0cbcb89ef9ab_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink studio void a single linen roll fall dce7ff2b-a885-460d-b896-0cbcb89ef9ab 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__66099eb8-0904-4338-a9d5-c2c45cea195e_1.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__66099eb8-0904-4338-a9d5-c2c45cea195e_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void linen seam low. Story a bright  66099eb8-0904-4338-a9d5-c2c45cea195e 1"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__c2d16262-846b-41aa-911b-8b7e1c4ea25a_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_void_linen_seam_low._Story_a_bright__c2d16262-846b-41aa-911b-8b7e1c4ea25a_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void linen seam low. Story a bright  c2d16262-846b-41aa-911b-8b7e1c4ea25a 3"
      },
      {
        "id": "olgavas_imagine_soot-ink_void_muslin_cube_at_knee_height._Sto_7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a_3.png",
        "collectionId": "2026",
        "type": "image",
        "src": "/visuals/2026/olgavas_imagine_soot-ink_void_muslin_cube_at_knee_height._Sto_7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine soot-ink void muslin cube at knee height. Sto 7d1b1a10-e075-4b92-8b8c-cfcb4bda0d8a 3"
      }
    ]
  },
  {
    "id": "Love",
    "title": "Love",
    "items": [
      {
        "id": "olgavas_Home_kitchen_at_blue_hour_wet_coats_drying_on_chairs__a21b5e92-74ed-4b0a-9a0a-ee71ede78e1e_1.png",
        "collectionId": "Love",
        "type": "image",
        "src": "/visuals/Love/olgavas_Home_kitchen_at_blue_hour_wet_coats_drying_on_chairs__a21b5e92-74ed-4b0a-9a0a-ee71ede78e1e_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Home kitchen at blue hour wet coats drying on chairs  a21b5e92-74ed-4b0a-9a0a-ee71ede78e1e 1"
      },
      {
        "id": "olgavas_Irving-Penn_studio_restraint__PradaMiu_Miu_tenderness_b1c41260-8015-42b3-b4ee-acdf03d093fd_2.png",
        "collectionId": "Love",
        "type": "image",
        "src": "/visuals/Love/olgavas_Irving-Penn_studio_restraint__PradaMiu_Miu_tenderness_b1c41260-8015-42b3-b4ee-acdf03d093fd_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Irving-Penn studio restraint  PradaMiu Miu tenderness b1c41260-8015-42b3-b4ee-acdf03d093fd 2"
      },
      {
        "id": "olgavas_Lobby_elevator_opens_bone-white_silk-gabardine_coat_p_ff43c8da-e6c9-4dd7-8263-d9421e2a84e1_3.png",
        "collectionId": "Love",
        "type": "image",
        "src": "/visuals/Love/olgavas_Lobby_elevator_opens_bone-white_silk-gabardine_coat_p_ff43c8da-e6c9-4dd7-8263-d9421e2a84e1_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Lobby elevator opens bone-white silk-gabardine coat p ff43c8da-e6c9-4dd7-8263-d9421e2a84e1 3"
      },
      {
        "id": "olgavas_Riverside_caf_in_light_rain_Penn_still-life_poetics___cd248d49-3e26-4e7e-9777-9c0bd29a1399_1.png",
        "collectionId": "Love",
        "type": "image",
        "src": "/visuals/Love/olgavas_Riverside_caf_in_light_rain_Penn_still-life_poetics___cd248d49-3e26-4e7e-9777-9c0bd29a1399_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Riverside caf in light rain Penn still-life poetics   cd248d49-3e26-4e7e-9777-9c0bd29a1399 1"
      },
      {
        "id": "olgavas_Riverside_caf_in_light_rain_Penn_still-life_poetics___cd248d49-3e26-4e7e-9777-9c0bd29a1399_3.png",
        "collectionId": "Love",
        "type": "image",
        "src": "/visuals/Love/olgavas_Riverside_caf_in_light_rain_Penn_still-life_poetics___cd248d49-3e26-4e7e-9777-9c0bd29a1399_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Riverside caf in light rain Penn still-life poetics   cd248d49-3e26-4e7e-9777-9c0bd29a1399 3"
      }
    ]
  },
  {
    "id": "Poster",
    "title": "Poster",
    "items": [
      {
        "id": "olgavas_modern_graphic_art_print_abstract_female_figure_integ_b97bf51b-5769-4f8c-9875-692b278a0afb_2.png",
        "collectionId": "Poster",
        "type": "image",
        "src": "/visuals/Poster/olgavas_modern_graphic_art_print_abstract_female_figure_integ_b97bf51b-5769-4f8c-9875-692b278a0afb_2.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas modern graphic art print abstract female figure integ b97bf51b-5769-4f8c-9875-692b278a0afb 2"
      }
    ]
  },
  {
    "id": "blues",
    "title": "blues",
    "items": [
      {
        "id": "olgavas_High_balcony_at_blue_hour_matte_color-block_panels_be_0d1cbad3-2315-48f7-a1f5-4aef5251b5e9_2.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_High_balcony_at_blue_hour_matte_color-block_panels_be_0d1cbad3-2315-48f7-a1f5-4aef5251b5e9_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas High balcony at blue hour matte color-block panels be 0d1cbad3-2315-48f7-a1f5-4aef5251b5e9 2"
      },
      {
        "id": "olgavas_High_balcony_at_blue_hour_matte_color-block_panels_be_0d1cbad3-2315-48f7-a1f5-4aef5251b5e9_3.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_High_balcony_at_blue_hour_matte_color-block_panels_be_0d1cbad3-2315-48f7-a1f5-4aef5251b5e9_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas High balcony at blue hour matte color-block panels be 0d1cbad3-2315-48f7-a1f5-4aef5251b5e9 3"
      },
      {
        "id": "olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_0b02ff48-568e-46e8-b5c3-c2aeb0933c64_0.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_0b02ff48-568e-46e8-b5c3-c2aeb0933c64_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Penn-inflected discipline  PradaMiu Miu 2026 high bal 0b02ff48-568e-46e8-b5c3-c2aeb0933c64 0"
      },
      {
        "id": "olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_0b02ff48-568e-46e8-b5c3-c2aeb0933c64_2.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_0b02ff48-568e-46e8-b5c3-c2aeb0933c64_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Penn-inflected discipline  PradaMiu Miu 2026 high bal 0b02ff48-568e-46e8-b5c3-c2aeb0933c64 2"
      },
      {
        "id": "olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_f2b96b36-486f-42ab-a97f-679def12daf7_0.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_f2b96b36-486f-42ab-a97f-679def12daf7_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Penn-inflected discipline  PradaMiu Miu 2026 high bal f2b96b36-486f-42ab-a97f-679def12daf7 0"
      },
      {
        "id": "olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_f2b96b36-486f-42ab-a97f-679def12daf7_1.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_Penn-inflected_discipline__PradaMiu_Miu_2026_high_bal_f2b96b36-486f-42ab-a97f-679def12daf7_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Penn-inflected discipline  PradaMiu Miu 2026 high bal f2b96b36-486f-42ab-a97f-679def12daf7 1"
      },
      {
        "id": "olgavas_glass_pavilion_blue-hour_fade_translucent_color-block_869765ee-bfd6-427a-84ac-1fbccfbdbf6a_0.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_glass_pavilion_blue-hour_fade_translucent_color-block_869765ee-bfd6-427a-84ac-1fbccfbdbf6a_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas glass pavilion blue-hour fade translucent color-block 869765ee-bfd6-427a-84ac-1fbccfbdbf6a 0"
      },
      {
        "id": "olgavas_rooftop_helipad_at_blue_hour_matte_color-block_wall_V_a6c5cd91-9522-4fb1-9976-1d8661911980_0.png",
        "collectionId": "blues",
        "type": "image",
        "src": "/visuals/blues/olgavas_rooftop_helipad_at_blue_hour_matte_color-block_wall_V_a6c5cd91-9522-4fb1-9976-1d8661911980_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas rooftop helipad at blue hour matte color-block wall V a6c5cd91-9522-4fb1-9976-1d8661911980 0"
      }
    ]
  },
  {
    "id": "breathtaking",
    "title": "breathtaking",
    "items": [
      {
        "id": "olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_1.png",
        "collectionId": "breathtaking",
        "type": "image",
        "src": "/visuals/breathtaking/olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Backseat at blue hour rain pearls on glass slate-blue 755205d4-c5d2-4b04-8389-2be67a2ef7c1 1"
      },
      {
        "id": "olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_2.png",
        "collectionId": "breathtaking",
        "type": "image",
        "src": "/visuals/breathtaking/olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Backseat at blue hour rain pearls on glass slate-blue 755205d4-c5d2-4b04-8389-2be67a2ef7c1 2"
      },
      {
        "id": "olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_3.png",
        "collectionId": "breathtaking",
        "type": "image",
        "src": "/visuals/breathtaking/olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_755205d4-c5d2-4b04-8389-2be67a2ef7c1_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Backseat at blue hour rain pearls on glass slate-blue 755205d4-c5d2-4b04-8389-2be67a2ef7c1 3"
      },
      {
        "id": "olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_8eca0268-bc62-49d5-980e-e5b809505c01_0.png",
        "collectionId": "breathtaking",
        "type": "image",
        "src": "/visuals/breathtaking/olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_8eca0268-bc62-49d5-980e-e5b809505c01_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Backseat at blue hour rain pearls on glass slate-blue 8eca0268-bc62-49d5-980e-e5b809505c01 0"
      },
      {
        "id": "olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_8eca0268-bc62-49d5-980e-e5b809505c01_2.png",
        "collectionId": "breathtaking",
        "type": "image",
        "src": "/visuals/breathtaking/olgavas_Backseat_at_blue_hour_rain_pearls_on_glass_slate-blue_8eca0268-bc62-49d5-980e-e5b809505c01_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Backseat at blue hour rain pearls on glass slate-blue 8eca0268-bc62-49d5-980e-e5b809505c01 2"
      }
    ]
  },
  {
    "id": "fashion-portrets-2",
    "title": "fashion-portrets-2",
    "items": [
      {
        "id": "olgavas_imagine_Macro_portrait_Penn_still-life_discipline_mee_d7e239c4-5390-4b0d-82b0-ff20bb35dd5c_2.png",
        "collectionId": "fashion-portrets-2",
        "type": "image",
        "src": "/visuals/fashion-portrets-2/olgavas_imagine_Macro_portrait_Penn_still-life_discipline_mee_d7e239c4-5390-4b0d-82b0-ff20bb35dd5c_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Macro portrait Penn still-life discipline mee d7e239c4-5390-4b0d-82b0-ff20bb35dd5c 2"
      },
      {
        "id": "olgavas_imagine_Macro_portrait_chin-to-sternum_Dior_silk_twil_b2b73c91-dbc4-46ee-91aa-1894387f0e3b_0.png",
        "collectionId": "fashion-portrets-2",
        "type": "image",
        "src": "/visuals/fashion-portrets-2/olgavas_imagine_Macro_portrait_chin-to-sternum_Dior_silk_twil_b2b73c91-dbc4-46ee-91aa-1894387f0e3b_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Macro portrait chin-to-sternum Dior silk twil b2b73c91-dbc4-46ee-91aa-1894387f0e3b 0"
      },
      {
        "id": "olgavas_imagine_Platinum-print_bust_portrait_Celine_FW25_baro_588d160b-5e7b-4cfb-928a-345feb9605b5_3.png",
        "collectionId": "fashion-portrets-2",
        "type": "image",
        "src": "/visuals/fashion-portrets-2/olgavas_imagine_Platinum-print_bust_portrait_Celine_FW25_baro_588d160b-5e7b-4cfb-928a-345feb9605b5_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print bust portrait Celine FW25 baro 588d160b-5e7b-4cfb-928a-345feb9605b5 3"
      }
    ]
  },
  {
    "id": "fashion-portrets-3",
    "title": "fashion-portrets-3",
    "items": [
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__39d210de-63e6-4157-b467-3b500776dab7_0.png",
        "collectionId": "fashion-portrets-3",
        "type": "image",
        "src": "/visuals/fashion-portrets-3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__39d210de-63e6-4157-b467-3b500776dab7_0.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  39d210de-63e6-4157-b467-3b500776dab7 0"
      },
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_0.png",
        "collectionId": "fashion-portrets-3",
        "type": "image",
        "src": "/visuals/fashion-portrets-3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_0.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  d8bf2d97-b96e-4386-b400-b07beca919d9 0"
      },
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_3.png",
        "collectionId": "fashion-portrets-3",
        "type": "image",
        "src": "/visuals/fashion-portrets-3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_3.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  d8bf2d97-b96e-4386-b400-b07beca919d9 3"
      },
      {
        "id": "olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_7c269375-9da7-4a46-8840-c4debac87af5_1.png",
        "collectionId": "fashion-portrets-3",
        "type": "image",
        "src": "/visuals/fashion-portrets-3/olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_7c269375-9da7-4a46-8840-c4debac87af5_1.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Waist-level macro studio still Penn style pow 7c269375-9da7-4a46-8840-c4debac87af5 1"
      },
      {
        "id": "olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_86c324da-d035-4644-9507-2c504b874aa3_3.png",
        "collectionId": "fashion-portrets-3",
        "type": "image",
        "src": "/visuals/fashion-portrets-3/olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_86c324da-d035-4644-9507-2c504b874aa3_3.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Waist-level macro studio still Penn style pow 86c324da-d035-4644-9507-2c504b874aa3 3"
      }
    ]
  },
  {
    "id": "fashion-portrets-horizontal",
    "title": "fashion-portrets-horizontal",
    "items": [
      {
        "id": "olgavas_imagine_Platinum-print_close-crop_Prada_2025_neutral__8b373c32-42ca-4962-85d3-0bf8ecb7f146_1.png",
        "collectionId": "fashion-portrets-horizontal",
        "type": "image",
        "src": "/visuals/fashion-portrets-horizontal/olgavas_imagine_Platinum-print_close-crop_Prada_2025_neutral__8b373c32-42ca-4962-85d3-0bf8ecb7f146_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print close-crop Prada 2025 neutral  8b373c32-42ca-4962-85d3-0bf8ecb7f146 1"
      },
      {
        "id": "olgavas_imagine_Platinum-print_close-crop_Prada_Summer_2025_n_8883ec81-dc9e-48dd-ac43-45509cd7e92e_2.png",
        "collectionId": "fashion-portrets-horizontal",
        "type": "image",
        "src": "/visuals/fashion-portrets-horizontal/olgavas_imagine_Platinum-print_close-crop_Prada_Summer_2025_n_8883ec81-dc9e-48dd-ac43-45509cd7e92e_2.png",
        "w": 896,
        "h": 1344,
        "title": "olgavas imagine Platinum-print close-crop Prada Summer 2025 n 8883ec81-dc9e-48dd-ac43-45509cd7e92e 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_c3ea87de-3c0d-485b-8d0f-884d5d01982f_2.png",
        "collectionId": "fashion-portrets-horizontal",
        "type": "image",
        "src": "/visuals/fashion-portrets-horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_c3ea87de-3c0d-485b-8d0f-884d5d01982f_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print half-body Miu Miu rose-dust co c3ea87de-3c0d-485b-8d0f-884d5d01982f 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_2.png",
        "collectionId": "fashion-portrets-horizontal",
        "type": "image",
        "src": "/visuals/fashion-portrets-horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print half-body Miu Miu rose-dust co ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_3.png",
        "collectionId": "fashion-portrets-horizontal",
        "type": "image",
        "src": "/visuals/fashion-portrets-horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print half-body Miu Miu rose-dust co ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20 3"
      }
    ]
  },
  {
    "id": "grangy",
    "title": "grangy",
    "items": [
      {
        "id": "olgavas_Irving-Penn_outdoor_rigor__Prada_2026_dusk_train_plat_09cc80c7-fa88-4e9c-a922-f102c7f01b5d_1.png",
        "collectionId": "grangy",
        "type": "image",
        "src": "/visuals/grangy/olgavas_Irving-Penn_outdoor_rigor__Prada_2026_dusk_train_plat_09cc80c7-fa88-4e9c-a922-f102c7f01b5d_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Irving-Penn outdoor rigor  Prada 2026 dusk train plat 09cc80c7-fa88-4e9c-a922-f102c7f01b5d 1"
      },
      {
        "id": "olgavas_Irving-Penn_outdoor_rigor__Prada_2026_dusk_train_plat_09cc80c7-fa88-4e9c-a922-f102c7f01b5d_2.png",
        "collectionId": "grangy",
        "type": "image",
        "src": "/visuals/grangy/olgavas_Irving-Penn_outdoor_rigor__Prada_2026_dusk_train_plat_09cc80c7-fa88-4e9c-a922-f102c7f01b5d_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas Irving-Penn outdoor rigor  Prada 2026 dusk train plat 09cc80c7-fa88-4e9c-a922-f102c7f01b5d 2"
      }
    ]
  },
  {
    "id": "korean photography wall art ",
    "title": "korean photography wall art ",
    "items": [
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_5f0a23d4-6774-405b-a494-a86e4bfba45d_1.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_5f0a23d4-6774-405b-a494-a86e4bfba45d_1.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa 5f0a23d4-6774-405b-a494-a86e4bfba45d 1"
      },
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_dd8020ca-54be-4717-8dc7-f0506de7e33f_0.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_dd8020ca-54be-4717-8dc7-f0506de7e33f_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa dd8020ca-54be-4717-8dc7-f0506de7e33f 0"
      },
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa f41b2022-06ef-4a31-9de9-efe91822a091 0"
      },
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_3.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_3.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa f41b2022-06ef-4a31-9de9-efe91822a091 3"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 02d1a57d-9a59-494b-a8b6-f83c1edefefb 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 2abb8ead-b452-476a-a997-6911c5d9c288 2"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 1"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "collectionId": "korean photography wall art ",
        "type": "image",
        "src": "/visuals/korean photography wall art /olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 3"
      }
    ]
  },
  {
    "id": "korean-photography-wall-art",
    "title": "korean-photography-wall-art",
    "items": [
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa f41b2022-06ef-4a31-9de9-efe91822a091 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_02d1a57d-9a59-494b-a8b6-f83c1edefefb_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 02d1a57d-9a59-494b-a8b6-f83c1edefefb 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_2abb8ead-b452-476a-a997-6911c5d9c288_2.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 2abb8ead-b452-476a-a997-6911c5d9c288 2"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 0"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_1.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 1"
      },
      {
        "id": "olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_portrait_of_a_Korean_girl_in_hanbok_with_moon_jar_Kim_75c36939-3b07-4972-835a-e8c4ed40a9b6_3.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas portrait of a Korean girl in hanbok with moon jar Kim 75c36939-3b07-4972-835a-e8c4ed40a9b6 3"
      }
    ]
  },
  {
    "id": "summer-2025",
    "title": "summer-2025",
    "items": [
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "collectionId": "summer-2025",
        "type": "image",
        "src": "/visuals/summer-2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 0e59b83f-ad41-48fa-a1cc-48b6cda0759f 2"
      },
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "collectionId": "summer-2025",
        "type": "image",
        "src": "/visuals/summer-2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5 0"
      }
    ]
  },
  {
    "id": "videos",
    "title": "videos",
    "items": [
      {
        "id": "Generated File October 01, 2025 - 3_24PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 01, 2025 - 3_24PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 01, 2025 - 3 24PM"
      },
      {
        "id": "Generated File October 02, 2025 - 12_32AM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 02, 2025 - 12_32AM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 02, 2025 - 12 32AM"
      },
      {
        "id": "Generated File October 02, 2025 - 1_21PM 2.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 02, 2025 - 1_21PM 2.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 02, 2025 - 1 21PM 2"
      },
      {
        "id": "Generated File October 02, 2025 - 1_24PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 02, 2025 - 1_24PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 02, 2025 - 1 24PM"
      },
      {
        "id": "Generated File October 02, 2025 - 6_16PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 02, 2025 - 6_16PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 02, 2025 - 6 16PM"
      },
      {
        "id": "Generated File October 02, 2025 - 6_30PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 02, 2025 - 6_30PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 02, 2025 - 6 30PM"
      },
      {
        "id": "Generated File October 03, 2025 - 10_29PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 03, 2025 - 10_29PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 03, 2025 - 10 29PM"
      },
      {
        "id": "Generated File October 03, 2025 - 10_46PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 03, 2025 - 10_46PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 03, 2025 - 10 46PM"
      },
      {
        "id": "Generated File October 03, 2025 - 11_08PM 2.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 03, 2025 - 11_08PM 2.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 03, 2025 - 11 08PM 2"
      },
      {
        "id": "Generated File October 07, 2025 - 10_08PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 07, 2025 - 10_08PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 07, 2025 - 10 08PM"
      },
      {
        "id": "Generated File October 07, 2025 - 10_34PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 07, 2025 - 10_34PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 07, 2025 - 10 34PM"
      },
      {
        "id": "Generated File October 07, 2025 - 10_37PM.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/Generated File October 07, 2025 - 10_37PM.mp4",
        "w": 0,
        "h": 0,
        "title": "Generated File October 07, 2025 - 10 37PM"
      },
      {
        "id": "ready10.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready10.mp4",
        "w": 0,
        "h": 0,
        "title": "ready10"
      },
      {
        "id": "ready11.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready11.mp4",
        "w": 0,
        "h": 0,
        "title": "ready11"
      },
      {
        "id": "ready13.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready13.mp4",
        "w": 0,
        "h": 0,
        "title": "ready13"
      },
      {
        "id": "ready16.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready16.mp4",
        "w": 0,
        "h": 0,
        "title": "ready16"
      },
      {
        "id": "ready17.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready17.mp4",
        "w": 0,
        "h": 0,
        "title": "ready17"
      },
      {
        "id": "ready19.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready19.mp4",
        "w": 0,
        "h": 0,
        "title": "ready19"
      },
      {
        "id": "ready20.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready20.mp4",
        "w": 0,
        "h": 0,
        "title": "ready20"
      },
      {
        "id": "ready21.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready21.mp4",
        "w": 0,
        "h": 0,
        "title": "ready21"
      },
      {
        "id": "ready22.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready22.mp4",
        "w": 0,
        "h": 0,
        "title": "ready22"
      },
      {
        "id": "ready8.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready8.mp4",
        "w": 0,
        "h": 0,
        "title": "ready8"
      },
      {
        "id": "ready9.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/ready9.mp4",
        "w": 0,
        "h": 0,
        "title": "ready9"
      },
      {
        "id": "social_olgavas_Sea_wall_at_blue_hour_matte_color-blocks_Sunwashed_Ap_29191b20-3244-43eb-bd2a-62136407f084_0.mp4",
        "collectionId": "videos",
        "type": "video",
        "src": "/visuals/videos/social_olgavas_Sea_wall_at_blue_hour_matte_color-blocks_Sunwashed_Ap_29191b20-3244-43eb-bd2a-62136407f084_0.mp4",
        "w": 0,
        "h": 0,
        "title": "social olgavas Sea wall at blue hour matte color-blocks Sunwashed Ap 29191b20-3244-43eb-bd2a-62136407f084 0"
      }
    ]
  }
] as any;
