const fs = require('fs');
const path = require('path');

const { favicons } = require('favicons');
const { downloadImage } = require('./imageDownloader');
const { reshapeImage } = require('./imageProcessor');
const { getCssVar } = require('./cssUtils');

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
    console.log('\n[INFO] Generating favicons...');
    
    const {siteConfig} = context;
    const profilePicUrl = options.imagePath || siteConfig.customFields.profilePic;
    const appVersion = siteConfig.customFields.version || '1.0';

    const circular = options.circular !== false;
    const shape = options.shape || 'circle';
    const outputDir = path.resolve(context.siteDir, 'static', options.outputPath);
    const reshapedImagePath = path.resolve(context.siteDir, 'temp_reshaped_pic.png');


    // Configuration for favicons
    const configuration = {
      path: `/${options.outputPath}/`,
      appName: siteConfig.title || 'Portfolio',
      appDescription: siteConfig.tagline || 'Portfolio',
      background: getCssVar('--ifm-background-color'),
      theme_color: getCssVar('--ifm-color-primary'),
      appleStatusBarStyle: 'black-translucent',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      version: appVersion,
      orientation: 'natural',
      logging: true,
      icons: {
        android: {
          offset: 0,
          background: false,
          mask: true,
          overlayGlow: false,
          androidPlayStore: true,
        },
        appleIcon: true,
        appleStartup: false,
        favicons: true,
        windows: false,
        yandex: false,
      }
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
    
    // Save all generated images 
    response.images.forEach(image => {

      fs.writeFileSync(path.join(outputDir, image.name), image.contents);
      console.log(`Generated: ${image.name}`);
    });

    // Save all manifest/config files
    response.files.forEach(file => {

      // Inject version into manifest
      if (file.name === 'manifest.webmanifest') {
        try {
          const manifest = JSON.parse(file.contents);
          manifest.version = appVersion;

          fs.writeFileSync(
            path.join(outputDir, file.name), 
            JSON.stringify(manifest, null, 2)
          );
          console.log(`Generated: ${file.name}`);

        } catch (err) {

          fs.writeFileSync(path.join(outputDir, file.name), file.contents);

          console.error('[ERROR] Failed to inject version into manifest:', err);
          console.log(`Generated: ${file.name} (without version)`);
        }
      } else {

        fs.writeFileSync(path.join(outputDir, file.name), file.contents);
        console.log(`Generated: ${file.name}`);
      }
    });

    // Clean up temporary files
    fs.unlinkSync(finalImagePath);

    console.log('[SUCCESS] Favicons generated successfully!\n');
  } catch (error) {

    console.error('[ERROR] Error generating favicons:', error);
  }
}

// CLI command for manual trigger
if (require.main === module) {
  const siteDir = path.resolve(__dirname, '../..');
  const siteConfig = require('../../docusaurus.config.js').default;
  
  generateFavicons({
    siteDir,
    siteConfig
  }).catch(error => {
    console.error('Error in CLI mode:', error);
    process.exit(1);
  });
}
