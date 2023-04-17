import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'niviki-com-t-do-t-i-ch-nh-10f5e54221eb4b059bc5b5305da949ba',
  rootNotionPageId: '932c57663c84ee290eea979b5d22067?v=1a4493f99d6b4250885344aa129a7284',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'NUOC PHAP TRONG TOI',
  domain: 'france.fr',
  author: 'NƯỚC PHÁP TRONG TÔI',

  // open graph metadata (optional)
  description: 'Học tiếng Pháp và tìm hiểu văn hoá Pháp, cuộc sống, con người Pháp',

  // social usernames (optional)
  twitter: 'roses_are__rose',
  // github: 'transitive-bullshit',
  linkedin: 'nước-pháp-trong-tôi-698589272',
  
  facebook: 'https://www.facebook.com/groups/1581996288979585',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: '@MontreuxComedy/videos', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/hoa-don-dien-tu-voi-blockchain-p1/': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/giai-phap-hoa-don-dien-tu-voi-blockchain-phan-2-the-mvp': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/phong-van-business-analyst-ba-ky-su-phan-1': '/60ebc3f1d53646119f703fe5d13df633'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Accueil',
      pageId: '2932c57663c84ee290eea979b5d22067'
    },    
    {
      title: 'Journal intime',
      pageId: '5e324e7b7db6431fb04b897d78b5f69a'
    },    
    {
      title: 'Photos',
      pageId: '291685ac6a8c42689c64e59bdd11f5aa'
    },    
    {
      title: 'À propos',
      pageId: '05ef5a82fdcd439396835aa0b8bf4011'
    }
  ]
})
