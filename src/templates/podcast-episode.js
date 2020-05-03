import Layout from "../components/Layout";

export const PodcastEpisodeTemplate = ({
        description,
        title,
        audiofile
    }) =>
{
    return (
        <section className="section">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
            <p>{audiofile}</p>
        </section>)
}

const PodcastEpisode = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <PodcastEpisodeTemplate
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                audiofile={post.frontmatter.audiofile}
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
        tags
        audiofile
      }
    }
  }
`