import type React from 'react'
import IconGithub from '~icons/simple-icons/github'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="mb-1 mt-4 flex w-full items-center justify-center gap-2.5 text-sm ease-in" onClick={(e) => e.currentTarget.blur()}>
        <a href="https://github.com/tanjie123/hellotyping-qwerty" target="_blank" rel="noreferrer">
          <IconGithub fontSize={15} className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100" />
        </a>
        <a
          className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noreferrer"
        >
          互联网ICP备案: 粤ICP备2023098287号
        </a>
      </footer>
    </>
  )
}

export default Footer
