import { ContentfulContentSource } from '@stackbit/cms-contentful'


export default {
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [
        new ContentfulContentSource({
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            environment: process.env.CONTENTFUL_ENVIRONMENT,
            previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
            accessToken: process.env.CONTENTFUL_TOKEN
        })
    ],
    modelExtensions: [{
        type: 'page', urlPath: '/product/{slug}', name: 'product'
    }]
}