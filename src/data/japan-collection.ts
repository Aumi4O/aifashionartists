import type { MediaItem } from "./collections";

// Featured images that go above the fold (the 6 you specified)
export const featuredJapanImages = [
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_283b3591-6795-4e55-add9-034ccac7a423_1.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_802aacbc-a37a-4e1c-850a-2ba54451f53f_3.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_47fda7b6-c1c0-4fce-97dd-dffe222e7b5f_2.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_7422fbab-ea40-4fe9-b572-8e9708b51ca7_2.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_9f270ce1-53d9-4bac-8d5e-1da56af8708f_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_a2c28332-1d11-4fa3-8c7d-320803dff5c6_0.png",
];

// All Japan storytelling images
export const japanImages = [
  "aifashioartists_barefaced_adult_face_no_makeup_no_styled_hair_14c3aa2e-d34c-4f27-99e0-95926ab7eeba_3.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_0d9f58d6-dcd8-4488-90a3-446d1626b629_2.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_29084a8c-b60f-4a4a-8fad-070fc475d944_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_47fda7b6-c1c0-4fce-97dd-dffe222e7b5f_2.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_6cb27ef1-2716-432a-8d3e-ce004c282d4f_1.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_6db424c6-9ee1-4664-9b66-d075b38a4b38_3.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_93613db0-8121-4677-827f-17fb02595799_1.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_9f270ce1-53d9-4bac-8d5e-1da56af8708f_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_9f270ce1-53d9-4bac-8d5e-1da56af8708f_2.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_a19c24ba-3e62-4c6a-8183-be768d5f4d99_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_a2c28332-1d11-4fa3-8c7d-320803dff5c6_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_a2c28332-1d11-4fa3-8c7d-320803dff5c6_1.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_b3ff7659-dff8-4628-be4c-84b6ae45368d_0.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_edbc7f5f-06bc-4fc3-b554-d099dde93479_1.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_f325de1e-73ad-4a1a-8210-d6d42bc6a50b_3.png",
  "aifashioartists_photorealistic_documentary_film_still_contemp_f93e0ed7-fcf2-4faa-b6ef-cb9aacf72dee_3.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_1ac5186a-cd49-4515-a7c9-f9fa8ce54ecf_2.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_60cb3d4c-9404-48da-ad9b-55b15e1bcaed_0.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_60cb3d4c-9404-48da-ad9b-55b15e1bcaed_2.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_7422fbab-ea40-4fe9-b572-8e9708b51ca7_2.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_7422fbab-ea40-4fe9-b572-8e9708b51ca7_3.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_c37f0cd9-9b23-438e-b8e9-10e8b71a6d67_0.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_c37f0cd9-9b23-438e-b8e9-10e8b71a6d67_3.png",
  "aifashioartists_sunlit_documentary_realism_bright_natural_day_ddce185c-060f-44f1-be49-d7a1d1c7725c_0.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_283b3591-6795-4e55-add9-034ccac7a423_1.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_802aacbc-a37a-4e1c-850a-2ba54451f53f_2.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_802aacbc-a37a-4e1c-850a-2ba54451f53f_3.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_8846eed2-0dbb-4091-80fc-cd8516554e9f_3.png",
  "aifashioartists_sunlit_documentary_street_portrait_in_Japan_c_bcddc160-ffc4-44db-aeae-283e4e188d19_1.png",
];

// Build MediaItem array from filenames - featured first, then rest
export function getJapanItems(): MediaItem[] {
  // Japan images are at /japan on R2 (not under /images)
  const basePath = "https://pub-5eaed9249f7e40d2bcaefedeba000523.r2.dev/japan";
  
  // Create a set of featured images for quick lookup
  const featuredSet = new Set(featuredJapanImages);
  
  // Get non-featured images
  const otherImages = japanImages.filter(img => !featuredSet.has(img));
  
  // Featured first, then others
  const orderedImages = [...featuredJapanImages, ...otherImages];
  
  return orderedImages.map((filename, index) => {
    const encodedFilename = encodeURIComponent(filename);
    
    // Determine if landscape (16:9) or portrait based on filename patterns
    // The "realism_bright_natural_day" and some "documentary_film_still" are landscapes
    const isLandscape = filename.includes("realism_bright_natural_day") || 
                        filename.includes("documentary_film_still_contemp_9f270ce1") ||
                        filename.includes("documentary_film_still_contemp_a2c28332") ||
                        filename.includes("documentary_film_still_contemp_47fda7b6");
    
    return {
      id: `japan_${index}`,
      collectionId: "japan",
      type: "image" as const,
      src: `${basePath}/${encodedFilename}`,
      w: isLandscape ? 1456 : 816,
      h: isLandscape ? 816 : 1456,
      title: filename.replace(/\.[^/.]+$/, "").replace(/_/g, " ").replace(/-/g, " "),
    };
  });
}
