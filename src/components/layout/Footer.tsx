import favicon from "/favicon.svg"

function Footer() {
          return (
                    <div className="text-center">Made with <img className='inline' width={30} src={favicon} alt="favicon" /> by <a href="https://aleks-jova-portfolio.netlify.app" className="underline underline-offset-4 text-primary">Aleks</a></div>
          )
}

export default Footer