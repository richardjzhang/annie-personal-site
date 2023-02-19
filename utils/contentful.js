import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllCaseStudies() {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query GetAllCaseStudies {
          caseStudyCollection {
            items {
              sys {
                id
              }
              title
              summary
              thumbnail {
                url
              }
            }
          }
        }
      `,
    });
    return data.caseStudyCollection.items;
  } catch (e) {
    console.log(e);
  }
}

export async function getCaseStudyBySlug(slug) {
  const { data } = await apolloClient.query({
    query: gql`
      query GetCaseStudyBySlug($slug: String!) {
        caseStudyCollection(where: { slug: $slug }) {
          items {
            sys {
              id
            }
            title
            summary
            thumbnail {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug,
    },
  });
  return data.caseStudyCollection.items[0];
}

export default { getAllCaseStudies, getCaseStudyBySlug };
