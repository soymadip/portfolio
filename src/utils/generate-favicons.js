const fs = require('fs');
const path = require('path');

const { favicons } = require('favicons');
const { downloadImage } = require('./imageDownloader');
const { reshapeImage } = require('./imageProcessor');

// favicon-generator plugin
module.exports = function(context, options) {

  const {
    imagePath = null,
    outputPath = 'favicon',
    circular = true,
    shape = 'circle',
    generateOnDev = true,

  } = options || {};

  return {
    name: 'favicon-generator',
    
    async loadContent() {
      if (process.env.NODE_ENV === 'production' || process.env.GENERATE_FAVICONS || generateOnDev) {
        await generateFavicons(context, {
          imagePath,
          outputPath,
          circular,
          shape,
        });
      }
    }
  };
};


async function generateFavicons(context, options = {}) {

  try {
    console.log('\nGenerating favicons...');
    
    const {siteConfig} = context;
    const profilePicUrl = options.imagePath || siteConfig.customFields.profilePic;
    const circular = options.circular !== false;
    const shape = options.shape || 'circle';
    const outputDir = path.resolve(context.siteDir, 'static', options.outputPath);
    const reshapedImagePath = path.resolve(context.siteDir, 'temp_reshaped_pic.png');
    

    // Configuration for favicons
    const configuration = {
      path: `/${options.outputPath}/`,
      appName: siteConfig.title || 'Portfolio',
      appShortName: siteConfig.title || 'Portfolio',
      appDescription: siteConfig.tagline || 'Portfolio',
      background: '#1e1e2e',
      theme_color: '#202030',
      appleStatusBarStyle: 'black-translucent',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      version: '1.0',
      logging: true,
      icons: {
        android: {
          offset: 0,
          background: true,
          mask: false,
          overlayGlow: false,
          androidPlayStore: false,
        },
        appleIcon: true,
        appleStartup: false,
        favicons: true,
        windows: false,
        yandex: false,
      },
    };
    
    // Download and process image
    const downloadedImagePath = await downloadImage(profilePicUrl, context.siteDir, 'temp_profile_pic.png');

    let finalImagePath = downloadedImagePath;
    
    if (circular) {
      finalImagePath = await reshapeImage(downloadedImagePath, reshapedImagePath, shape);
      fs.unlinkSync(downloadedImagePath);
    }
    
    // Generate favicons
    const response = await favicons(finalImagePath, configuration);
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // List of files we want to keep
    const requiredFiles = [
      'android-chrome-192x192.png',
      'android-chrome-512x512.png',
      'apple-touch-icon.png',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'favicon.ico'
    ];
    
    // Save only the required image files
    response.images
      .filter(image => requiredFiles.includes(image.name))
      .forEach(image => {
        fs.writeFileSync(path.join(outputDir, image.name), image.contents);
        console.log(`Generated: ${image.name}`);
      });
    
    // Save the webmanifest file
    response.files
      .filter(file => file.name === 'manifest.webmanifest')
      .forEach(file => {
        fs.writeFileSync(path.join(outputDir, 'site.webmanifest'), file.contents);
        console.log('Generated: site.webmanifest');
      });
    
    // Clean up temporary files
    fs.unlinkSync(finalImagePath);
    
    console.log('Favicons generated successfully!\n');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

// CLI command for manual triggar 
if (require.main === module) {
  const siteDir = path.resolve(__dirname, '../..');
  const siteConfig = require('../../docusaurus.config.js');
  const config = siteConfig.default || siteConfig;
  
  generateFavicons({
    siteDir,
    siteConfig: config
  }).catch(error => {
    console.error('Error in CLI mode:', error);
    process.exit(1);
  });
}
