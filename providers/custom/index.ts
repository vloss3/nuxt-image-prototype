import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL, options = {} } = {}) => {
  const {
    baseURL: providerBaseURL = '',
    unsplashBaseURL = 'https://images.unsplash.com',
  } = options

  let sourceURL = joinURL(unsplashBaseURL, src.replace('unsplash:', '')) 

  const { width, height } = modifiers

  if (sourceURL.includes('unsplash.com')) {
    const unsplashParams = new URLSearchParams()
    
    if (width) unsplashParams.append('w', String(width))
    if (height) unsplashParams.append('h', String(height))
    unsplashParams.append('fm', 'webp')
    
    const paramString = unsplashParams.toString() ? `?${unsplashParams.toString()}` : ''
    sourceURL = sourceURL + paramString
  }
  
  return {
    url: baseURL || providerBaseURL ? joinURL(baseURL || providerBaseURL, sourceURL) : sourceURL
  }
} 