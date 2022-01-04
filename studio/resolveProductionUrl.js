// Replace `remoteUrl` with your deployed Next.js site
const remoteUrl = `https://sanity-io-next-js-blog-one.vercel.app`
const localUrl = `http://localhost:3000`

const previewSecret = "OXCeU69ElOP14pTRu6JWQ3KxVtEanL"
export default function resolveProductionUrl(doc) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl

  const previewUrl = new URL(baseUrl)

  previewUrl.pathname = `/api/preview`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`)

  return previewUrl.toString()
}
