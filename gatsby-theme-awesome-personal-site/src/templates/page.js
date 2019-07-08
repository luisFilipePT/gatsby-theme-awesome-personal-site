import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"
import Test from "../components/test";

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <Test/>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default PageTemplate
