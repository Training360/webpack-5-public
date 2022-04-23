const loadImage = (avatar) => import(/* webpackMode: "eager" */ `../assets/img/${avatar}`)

// async function loadImage (avatar) {
//   try {
//     const template = await import(`../assets/img/${avatar}`)
//     console.log(template)
//   } catch (err) {
//     console.error('template error')
//     return new Error(err)
//   }
// }

export default loadImage
