import IconPlus from '@/components/icon-plus'

export default function Home() {
  return (
    <main className='px-6 py-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center gap-2 border-b'>
          <span>推荐</span>
          <span>热门</span>

          <IconPlus />
        </div>
      </div>
    </main>
  )
}
