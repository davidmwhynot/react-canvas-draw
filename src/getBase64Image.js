export const getBase64Image = img => {
	// Create an empty canvas element
	const canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;

	// Copy the image contents to the canvas
	const ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);

	return canvas.toDataURL('image/svg+xml');
};
