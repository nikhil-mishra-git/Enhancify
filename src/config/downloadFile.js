export const downloadImageFromURL = async (imageUrl, filename = 'download.png') => {
  try {
    const response = await fetch(imageUrl)
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  } catch (error) {
    const linkFallback = document.createElement('a')
    linkFallback.href = imageUrl
    linkFallback.download = filename
    linkFallback.click()
  }
}
