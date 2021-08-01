import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/swap',
  },
  {
    label: t('Exchange'),
    icon: 'TradeIcon',
    href: '/swap',
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/swap',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/swap',
  },

]

export default config
