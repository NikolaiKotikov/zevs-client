export function generateHead(ctx) {
  const title = ctx.$store.state.settings?.seo?.title
  const meta = generateMetaArray(ctx.$store.state.settings?.seo?.meta)

  return {
    title,
    meta,
  }
}

function generateMetaArray(metaItems) {
  if (!metaItems?.length) {
    return []
  }
  return metaItems?.map((tag) => {
    return { name: tag.name, hid: tag.name, content: tag.content }
  })
}
