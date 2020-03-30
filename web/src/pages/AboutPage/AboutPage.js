import BlogLayout from 'src/layouts/BlogLayout'

import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <BlogLayout>
        <p>
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
      </BlogLayout>
    </>
  )
}

export default AboutPage
