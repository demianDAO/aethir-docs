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
            {
              label: '隐私、区块链和去中心化的未来',
              link: '/guides/future-of-privacy-blockchain-dci'
            },
            {
              label: 'Aethir简介：为云基础架构的未来赋能',
              link: '/guides/introducing-aethir-empowering-the-future-of-cloud'
            },
            { label: '什么是云游戏？', link: '/guides/what-is-cloud-gaming' },
            {
              label: '区块链会如何改变云游戏？',
              link: '/guides/blockchian-change-cloud-game'
            },
            {
              label: 'IMX 对去中心化游戏的探索',
              link: '/guides/imx-game'
            },
            {
              label: '《Deadrop》今年最热门的 Web3 游戏即将上线',
              link: '/guides/deadrop-game-web3'
            },
            {
              label: '游戏的未来就在这里：揭开生成式人工智能革命的面纱',
              link: '/guides/the-future-gaming'
            },
            {
              label: '看不见的人工智能创新引擎： 开源项目',
              link: '/guides/the-unseen-engine-of-ai'
            },
            { label: '什么是Aethir', link: '/guides/what-is-aethir' },
            { label: '艾瑟尔新手指南', link: '/guides/aethir-guide' },
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
