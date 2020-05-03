import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PodcastRoll from '../components/PodcastRoll'

export const IndexPageTemplate = () => (
  <div>
    <PodcastRoll />
  </div>
)

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

export default IndexPage
