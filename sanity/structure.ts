import type {StructureResolver} from 'sanity/structure'

// Use the default structure without customization
export const structure: StructureResolver = (S) => {
  return S.defaults()
}