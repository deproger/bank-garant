import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bank-garant',

  projectId: 'b9rirvpq',
  dataset: 'otzivi',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
