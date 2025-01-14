import {categoryType} from './categoryType'
import {blockContent} from './blockContentType'
import {type SchemaTypeDefinition} from 'sanity'
import {orderType} from './orderType'
import {productType} from './productType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [categoryType, blockContent, orderType, productType],
}
