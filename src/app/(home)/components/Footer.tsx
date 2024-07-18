function Footer() {
  return (
    <footer
      className="
        h-[40px]
        border-t border-gray-200 
        text-slate-700 
        dark:text-slate-400 dark:border-slate-700
        flex justify-start items-center
        px-2
      "
    >
      <div className="max-w-7xl flex-auto mx-auto flex justify-between items-center">
        <div className="text-xl">Wordwise</div>
        <div className="text-sm">© Wordwise 2023. All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
