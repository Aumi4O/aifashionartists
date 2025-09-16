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
    "id": "Summer 2025",
    "title": "Summer 2025",
    "items": [
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "collectionId": "Summer 2025",
        "type": "image",
        "src": "/visuals/Summer 2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_0e59b83f-ad41-48fa-a1cc-48b6cda0759f_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 0e59b83f-ad41-48fa-a1cc-48b6cda0759f 2"
      },
      {
        "id": "olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "collectionId": "Summer 2025",
        "type": "image",
        "src": "/visuals/Summer 2025/olgavas_imagine_Three-quarter_portrait_Penn-inflected_discipl_7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Three-quarter portrait Penn-inflected discipl 7951eaf1-986c-4b4d-ba43-0f82cb2f6ca5 0"
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
    "id": "fashion portrets 2",
    "title": "fashion portrets 2",
    "items": [
      {
        "id": "olgavas_imagine_Macro_portrait_Penn_still-life_discipline_mee_d7e239c4-5390-4b0d-82b0-ff20bb35dd5c_2.png",
        "collectionId": "fashion portrets 2",
        "type": "image",
        "src": "/visuals/fashion portrets 2/olgavas_imagine_Macro_portrait_Penn_still-life_discipline_mee_d7e239c4-5390-4b0d-82b0-ff20bb35dd5c_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Macro portrait Penn still-life discipline mee d7e239c4-5390-4b0d-82b0-ff20bb35dd5c 2"
      },
      {
        "id": "olgavas_imagine_Macro_portrait_chin-to-sternum_Dior_silk_twil_b2b73c91-dbc4-46ee-91aa-1894387f0e3b_0.png",
        "collectionId": "fashion portrets 2",
        "type": "image",
        "src": "/visuals/fashion portrets 2/olgavas_imagine_Macro_portrait_chin-to-sternum_Dior_silk_twil_b2b73c91-dbc4-46ee-91aa-1894387f0e3b_0.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Macro portrait chin-to-sternum Dior silk twil b2b73c91-dbc4-46ee-91aa-1894387f0e3b 0"
      },
      {
        "id": "olgavas_imagine_Platinum-print_bust_portrait_Celine_FW25_baro_588d160b-5e7b-4cfb-928a-345feb9605b5_3.png",
        "collectionId": "fashion portrets 2",
        "type": "image",
        "src": "/visuals/fashion portrets 2/olgavas_imagine_Platinum-print_bust_portrait_Celine_FW25_baro_588d160b-5e7b-4cfb-928a-345feb9605b5_3.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print bust portrait Celine FW25 baro 588d160b-5e7b-4cfb-928a-345feb9605b5 3"
      }
    ]
  },
  {
    "id": "fashion portrets 3",
    "title": "fashion portrets 3",
    "items": [
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__39d210de-63e6-4157-b467-3b500776dab7_0.png",
        "collectionId": "fashion portrets 3",
        "type": "image",
        "src": "/visuals/fashion portrets 3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__39d210de-63e6-4157-b467-3b500776dab7_0.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  39d210de-63e6-4157-b467-3b500776dab7 0"
      },
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_0.png",
        "collectionId": "fashion portrets 3",
        "type": "image",
        "src": "/visuals/fashion portrets 3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_0.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  d8bf2d97-b96e-4386-b400-b07beca919d9 0"
      },
      {
        "id": "olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_3.png",
        "collectionId": "fashion portrets 3",
        "type": "image",
        "src": "/visuals/fashion portrets 3/olgavas_imagine_Macro_fashion_still_Irving-Penn_serenity_169__d8bf2d97-b96e-4386-b400-b07beca919d9_3.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Macro fashion still Irving-Penn serenity 169  d8bf2d97-b96e-4386-b400-b07beca919d9 3"
      },
      {
        "id": "olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_7c269375-9da7-4a46-8840-c4debac87af5_1.png",
        "collectionId": "fashion portrets 3",
        "type": "image",
        "src": "/visuals/fashion portrets 3/olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_7c269375-9da7-4a46-8840-c4debac87af5_1.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Waist-level macro studio still Penn style pow 7c269375-9da7-4a46-8840-c4debac87af5 1"
      },
      {
        "id": "olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_86c324da-d035-4644-9507-2c504b874aa3_3.png",
        "collectionId": "fashion portrets 3",
        "type": "image",
        "src": "/visuals/fashion portrets 3/olgavas_imagine_Waist-level_macro_studio_still_Penn_style_pow_86c324da-d035-4644-9507-2c504b874aa3_3.png",
        "w": 1456,
        "h": 816,
        "title": "olgavas imagine Waist-level macro studio still Penn style pow 86c324da-d035-4644-9507-2c504b874aa3 3"
      }
    ]
  },
  {
    "id": "fashion portrets horizontal",
    "title": "fashion portrets horizontal",
    "items": [
      {
        "id": "olgavas_imagine_Platinum-print_close-crop_Prada_2025_neutral__8b373c32-42ca-4962-85d3-0bf8ecb7f146_1.png",
        "collectionId": "fashion portrets horizontal",
        "type": "image",
        "src": "/visuals/fashion portrets horizontal/olgavas_imagine_Platinum-print_close-crop_Prada_2025_neutral__8b373c32-42ca-4962-85d3-0bf8ecb7f146_1.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print close-crop Prada 2025 neutral  8b373c32-42ca-4962-85d3-0bf8ecb7f146 1"
      },
      {
        "id": "olgavas_imagine_Platinum-print_close-crop_Prada_Summer_2025_n_8883ec81-dc9e-48dd-ac43-45509cd7e92e_2.png",
        "collectionId": "fashion portrets horizontal",
        "type": "image",
        "src": "/visuals/fashion portrets horizontal/olgavas_imagine_Platinum-print_close-crop_Prada_Summer_2025_n_8883ec81-dc9e-48dd-ac43-45509cd7e92e_2.png",
        "w": 896,
        "h": 1344,
        "title": "olgavas imagine Platinum-print close-crop Prada Summer 2025 n 8883ec81-dc9e-48dd-ac43-45509cd7e92e 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_c3ea87de-3c0d-485b-8d0f-884d5d01982f_2.png",
        "collectionId": "fashion portrets horizontal",
        "type": "image",
        "src": "/visuals/fashion portrets horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_c3ea87de-3c0d-485b-8d0f-884d5d01982f_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print half-body Miu Miu rose-dust co c3ea87de-3c0d-485b-8d0f-884d5d01982f 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_2.png",
        "collectionId": "fashion portrets horizontal",
        "type": "image",
        "src": "/visuals/fashion portrets horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_2.png",
        "w": 816,
        "h": 1456,
        "title": "olgavas imagine Platinum-print half-body Miu Miu rose-dust co ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20 2"
      },
      {
        "id": "olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_3.png",
        "collectionId": "fashion portrets horizontal",
        "type": "image",
        "src": "/visuals/fashion portrets horizontal/olgavas_imagine_Platinum-print_half-body_Miu_Miu_rose-dust_co_ceed2d2d-bad2-4a2c-b8a5-9ae2a5028c20_3.png",
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
    "id": "korean-photography-wall-art",
    "title": "Korean Photography",
    "items": [
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_5f0a23d4-6774-405b-a494-a86e4bfba45d_1.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_5f0a23d4-6774-405b-a494-a86e4bfba45d_1.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa 5f0a23d4-6774-405b-a494-a86e4bfba45d 1"
      },
      {
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_dd8020ca-54be-4717-8dc7-f0506de7e33f_0.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_dd8020ca-54be-4717-8dc7-f0506de7e33f_0.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa dd8020ca-54be-4717-8dc7-f0506de7e33f 0"
      },
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
        "id": "olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_3.png",
        "collectionId": "korean-photography-wall-art",
        "type": "image",
        "src": "/visuals/korean-photography-wall-art/olgavas_ethereal_Korean_model_in_sapphire-blue_hanbok_with_pa_f41b2022-06ef-4a31-9de9-efe91822a091_3.png",
        "w": 960,
        "h": 1200,
        "title": "olgavas ethereal Korean model in sapphire-blue hanbok with pa f41b2022-06ef-4a31-9de9-efe91822a091 3"
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
    "id": "videos",
    "title": "videos",
    "items": [
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
