const sharp = require('sharp');

sharp('public/logo.png')
  .removeAlpha()        // Remove any existing alpha channel
  .ensureAlpha()        // Add a new alpha channel
  .raw()               // Get raw pixel data
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    // Width * height * channels
    const pixels = new Uint8ClampedArray(data);
    
    // Make light gray background transparent
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      
      // If pixel is light (close to gray background color)
      if (r > 240 && g > 240 && b > 240) {
        pixels[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    // Save the modified image
    return sharp(pixels, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile('public/logo-transparent.png');
  })
  .then(() => console.log('Created transparent logo'))
  .catch(err => console.error('Error:', err)); 