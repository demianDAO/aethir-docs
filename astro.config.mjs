import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Aethir 中文指南',
      social: {
        github: 'https://github.com/demianDAO/aethir-docs'
      },
      sidebar: [
        {
          label: '新手指南',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '什么是Aethir', link: '/guides/what-is-aethir' },
            { label: '埃瑟尔的进度更新#1', link: '/guides/progress-update-1' },
            {
              label: '埃瑟尔完成 1.5 亿美元的 Pre-A 轮融资',
              link: '/guides/aethir-closes-150-m'
            }
          ]
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' }
        }
      ]
    })
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } }
});
