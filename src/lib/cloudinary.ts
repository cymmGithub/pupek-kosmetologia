import { Cloudinary } from "@cloudinary/url-gen";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

if (!cloudName) {
	console.warn(
		"VITE_CLOUDINARY_CLOUD_NAME is not set. Add it to your .env.local file."
	);
}

export const cld = new Cloudinary({
	cloud: {
		cloudName: cloudName || "demo",
	},
	url: {
		secure: true,
	},
});
