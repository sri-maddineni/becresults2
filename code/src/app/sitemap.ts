import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://becresults.itkonnects.com'

    // Main pages
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
    ]

    // Year sections (these are anchor links on the same page, but we can still include them)
    const years = ['Y20', 'Y21', 'Y22', 'Y23', 'Y24', 'HONORS']
    const yearRoutes = years.map((year) => ({
        url: `${baseUrl}#${year.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...routes, ...yearRoutes]
}

