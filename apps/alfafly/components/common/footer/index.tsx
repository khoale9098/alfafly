import cn from 'classnames'
import Logo from '@components/common/logo'
import { ImLinkedin, ImGithub, ImFacebook } from 'react-icons/im'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={cn('h-12 bg-white border-t border-dashed m-auto w-full', s.footerSection)}>
      <div className="w-full items-start m-auto flex">
        <div className={s.data}>
          <Logo className="max-w-sm mb-4" />
          <p className="max-w-sm text-xs font-mono">
            Alphafly, a blog, a knowledge sharing platform
            {/* Nền tảng chia sẻ kiến thức của Khoa Le */}
            {/* A blog, functional theme for running a paid-membership publication on Ghost. */}
          </p>
          <div className="max-w-sm my-7 flex">
            <div style={{ margin: '0 7px 7px 0', width: '32px', height: '32px' }}>
              <a href="https://www.linkedin.com/in/khoale9098/" target="_blank">
                <ImLinkedin size={24} />
              </a>
            </div>
            <div style={{ margin: '0 7px 7px 0', width: '32px', height: '32px' }}>
              <a href="http://github.com/khoale9098" target="_blank">
                <ImGithub size={24} />
              </a>
            </div>
            <div style={{ margin: '0 7px 7px 0', width: '32px', height: '32px' }}>
              <a href="https://www.facebook.com/khoale.stand.up/" target="_blank">
                <ImFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
