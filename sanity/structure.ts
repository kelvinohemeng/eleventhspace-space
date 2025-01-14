import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Testing Environment')
    .items([
      S.documentTypeListItem('category').title('Category'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'post'].includes(item.getId()!),
      ),
      // S.documentTypeListItem('siteSettings').title('Site Settings'),
    ])

//   S.list()
//     .title('Testing Environment')
//     .items(
//       context.currentUser?.roles.find((role) => role.name === 'administrator')
//         ? [
//             S.documentTypeListItem('product').title('Products'),
//             S.documentTypeListItem('category').title('Category'),
//             S.divider(),
//             S.documentTypeListItem('siteSettings').title('Site Settings'),
//           ]
//         : [
//             S.documentTypeListItem('post').title('Posts'),
//             S.documentTypeListItem('category').title('Categories'),
//           ],
//     )
