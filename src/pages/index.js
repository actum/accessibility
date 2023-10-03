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

      <Section customClass="text--center">
        <h2>The Purpose</h2>

        <div className="row row--gap" style={{ justifyContent: 'center' }}>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/knowledge-sharing.png" srcSet="/img/knowledge-sharing.png 1x, /img/knowledge-sharing-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3>Knowledge Sharing</h3>
            <p>We want to share our knowledge about the web accessibility and also help people understand and experience differences between accessible and inaccessible web.</p>
          </div>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/accessibility-awareness.png" srcSet="/img/accessibility-awareness.png 1x, /img/accessibility-awareness-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3>Accessibility Awareness</h3>
            <p>We want to spread awareness about the web accessibility because we believe it is essential, not optional. A huge percent of websites are still inaccessible.</p>
          </div>
          <div className="col" style={{ maxWidth: '500px'}}>
            <img src="/img/knowledge-base.png" srcSet="/img/knowledge-base.png 1x, /img/knowledge-base-2x.png 2x" alt="" width="300" style={{ margin: '0 auto 1rem', aspectRatio: '300/200'}} />
            <h3>Knowledge Base</h3>
            <p>We want to keep this project also as our knowledge base, reflecting our experience with the web accessibility, and progressively update it as we learn more.</p>
          </div>
        </div>
      </Section>

      <Section customClass="text--center">
        <p>The following sections represent an overview of current projects.</p>
      </Section>

      <Section>
        <div className="row row--align-center row--gap">
          <div className="col col--6">
            <h2>WCAG Documents</h2>
            <p>WCAG (Web Content Accessibility Guidelines) documents published by the Web Accessibility Initiative (WAI) of the World Wide Web Consortium (W3C) explain how to make web content more accessible to people with various abilities and disabilities.</p>
            <p>Our simplified WCAG documents can help you to learn the essential information to understand and develop more accessible websites.</p>
            <p>There are also videos (explaining the guidelines) available for the documents - the videos and documents are made progressively.</p>

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
            <p>A collection of inaccessible components demonstrates common accessibility and usability issues developers create (mostly unintentionally) when building websites.</p>
            <p>Our inaccessible components show common bad practices in web development so you can avoid them.</p>
            <p>There are also videos (explaining the issues) available for the components - the videos are made progressively.</p>

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

            <p>Users have many options how to customize their web-browsing experience today. While certain user preferences take effect across all websites once set in the operating system (such as zoom or resolution changes), others require implementation from developers to function appropriately - light, dark, or high-contrast (forced colors) mode, reduced motion mode, or font size preferences.</p>
            <p>Learn about these user preferences, how to support them with some implementation tips, and what it could mean for users if the preferences are not respected.</p>
            <p>There are also videos (explaining the issues) available for each component.</p>

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
