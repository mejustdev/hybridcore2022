// schemas/objects/instagramPost.js
import InstagramPreview from "../components/preview/instagram";

export default {
  type: "object",
  name: "instagram",
  title: "Instagram Post",
  fields: [
    {
      name: "url",
      type: "url",
      description: "Visit an Instagram post in a browser and copy the URL"
    }
  ],
  preview: {
    select: { url: "url" },
    component: InstagramPreview
  }
};