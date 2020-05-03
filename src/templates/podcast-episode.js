import React from 'react'
import Layout from '../components/Layout'

export const PodcastEpisodeTemplate = ({ description, title, audiofile }) => {
  return (
    <section className="section">
      <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
        {title}
      </h1>
      <p>{description}</p>
      <a href={audiofile}>File</a>
    </section>
  )
}

const PodcastEpisode = ({ data }) => {
  const { markdownRemark: podcast } = data

  return (
    <Layout>
      <PodcastEpisodeTemplate
        title={podcast.frontmatter.title}
        description={podcast.frontmatter.description}
        audiofile={`/img/${podcast.frontmatter.audiofile.base}`}
      />
    </Layout>
  )
}

export default PodcastEpisode

export const pageQuery = graphql`
  query PodcastEpisodeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        audiofile {
          base
        }
      }
    }
  }
`
