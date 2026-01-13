import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { cld } from "@/lib/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { auto as autoQuality } from "@cloudinary/url-gen/qualifiers/quality";

interface CloudinaryImageProps {
	publicId: string;
	alt: string;
	className?: string;
	width?: number;
	height?: number;
	priority?: boolean;
}

const CloudinaryImage = ({
	publicId,
	alt,
	className = "",
	width = 1920,
	height,
	priority = false,
}: CloudinaryImageProps) => {
	const image = cld
		.image(publicId)
		.delivery(format(auto()))
		.delivery(quality(autoQuality()));

	if (height) {
		image.resize(fill().width(width).height(height).gravity(autoGravity()));
	} else {
		image.resize(fill().width(width).gravity(autoGravity()));
	}

	const plugins = priority
		? []
		: [lazyload(), placeholder({ mode: "blur" })];

	return (
		<AdvancedImage
			cldImg={image}
			alt={alt}
			className={className}
			plugins={plugins}
		/>
	);
};

export default CloudinaryImage;
