import React from 'react'
import Layout from '@theme/Layout'
import Section from '../components/Section'
import Hero from '../components/Hero'
import Button from '../components/Button'

const Home = () => (
  <Layout
    title="Home"
    description="A portal of ACTUM Digital projects dedicated to web accessibility."
  >
    <main>
      <Section>
        <Hero />
      </Section>

      <Section>
        <h2 className="text--center">The Purpose</h2>

        <div className="row row--gap" style={{ justifyContent: 'center' }}>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/knowledge-sharing.png" srcSet="/img/knowledge-sharing.png 1x, /img/knowledge-sharing-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3 className="text--center">Knowledge Sharing</h3>
            <p>We want to share our knowledge about web accessibility. We also want to help you experience differences between more and less accessible web.</p>
          </div>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/accessibility-awareness.png" srcSet="/img/accessibility-awareness.png 1x, /img/accessibility-awareness-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3 className="text--center">Accessibility Awareness</h3>
            <p>Our goal is to raise awareness about web accessibility. Accessibility is essential, not something you can choose to ignore. Many websites are still not accessible to a large number of users.</p>
          </div>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/knowledge-base.png" srcSet="/img/knowledge-base.png 1x, /img/knowledge-base-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3 className="text--center">Knowledge Base</h3>
            <p>We want to keep this project also as our knowledge base. It reflects our experience with web accessibility, and we update it as we learn more.</p>
          </div>
        </div>
      </Section>

      <Section>
        <p>The following sections give you a quick look at the current projects.</p>
      </Section>

      <Section>
        <div className="row row--align-center row--gap">
          <div className="col col--6">
            <h2>WCAG Documents</h2>
            <p>WCAG is short for <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noreferrer noopener">Web Content Accessibility Guidelines</a>. These guidelines explain how to make the web more accessible to people of all abilities and disabilities.</p>
            <p>Our simplified WCAG documents are here to help you learn the essential information. Use this knowledge to understand and create more accessible websites.</p>
            <p>There are also videos to explain the guidelines. We are working on creating more content and videos, so stay tuned for updates.</p>

            <Button label="Browse WCAG documents" href="/docs/wcag-documents/intro" />
          </div>
          <div className="col col--6">
            <img src="/img/wcag-documents.png" srcSet="/img/wcag-documents.png 1x, /img/wcag-documents-2x.png 2x" alt="" loading="lazy" width="600" height="400" style={{ aspectRatio: '600/400'}} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="row row--align-center row--gap">
          <div className="col col--6">
            <h2>Inaccessible Components</h2>
            <p>Inaccessible components show the common accessibility and usability issues on web.</p>
            <p>The components show some bad practices in web development, so that you can avoid them.</p>
            <p>There are also videos to explain the issues. We are working on creating more content and videos, so stay tuned for updates.</p>

            <Button label="Browse inaccessible components" href="/docs/inaccessible-components/intro" />
          </div>
          <div className="col col--6">
            <img src="/img/inaccessible-components.png" srcSet="/img/inaccessible-components.png 1x, /img/inaccessible-components-2x.png 2x" alt="" loading="lazy" width="600" height="400" style={{ aspectRatio: '600/400'}} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="row row--align-center row--gap">
          <div className="col col--6">
            <h2>User preferences</h2>

            <p>Users have many options for how to customize their web-browsing experience today. When set in the operating system, certain user preferences apply to all websites. But others need implementation from developers to function.</p>
            <p>Learn about user preferences and how to support them. Understand what it could mean for users if these preferences are not respected.</p>
            <p>There are also videos to explain the details. We are working on creating more content and videos, so stay tuned for updates.</p>

            <Button label="Browse user preferences" href="/docs/user-preferences/intro" />
          </div>
          <div className="col col--6">
            <img src="/img/user-preferences.png" srcSet="/img/user-preferences.png 1x, /img/user-preferences-2x.png 2x" alt="" loading="lazy" width="600" height="359" style={{ aspectRatio: '600/359'}} />
          </div>
        </div>
      </Section>
    </main>
  </Layout>
)

export default Home
