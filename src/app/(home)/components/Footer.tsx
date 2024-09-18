import DarkModeButton from '~/components/DarkModeButton'

function Footer() {
  return (
    <footer
      className="
        h-[40px]
        border-t border-gray-200 
        text-slate-700 
        dark:text-slate-400 dark:border-slate-700
        flex justify-start items-center
        px-4
      "
    >
      <div className="max-w-7xl flex-auto mx-auto flex justify-between items-center">
        <div className="text-xl">
          <DarkModeButton />
        </div>
        <div className="text-sm">© Wordwise 2024. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
