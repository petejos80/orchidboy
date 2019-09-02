/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Box, Flex } from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import colors from '../utils/colors';
import ButtonPrimary, { ButtonSecondary } from '../components/Buttons';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  return (
    <PageWrapper>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, '1200px']}
          m={['3.5rem 0', '3.5rem 0', '3.5rem auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          textAlign="center"
        >
          <h1>{myData.title}</h1>
          <h3>{myData.subtitle}</h3>
          <Flex justifyContent="center" wrap={['wrap', 'wrap', 'nowrap']}>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonPrimary>About</ButtonPrimary>
              </Link>
            </Box>
            <Box m={[1]} width={[1, 1 / 2, 1 / 4]}>
              <Link to="/about">
                <ButtonSecondary>About</ButtonSecondary>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bg={colors.primary} py={[3, 3, 4]}>
        <Box
          width={[1, 1, '1200px']}
          m="0 auto"
          px={[3, 3, 0]}
          color={colors.secondary}
        >
          <h1>This could be another section</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra massa at enim fermentum, vel sagittis leo dictum. Vivamus eu tincidunt lacus. Cras gravida neque sed odio cursus egestas. In non nulla eget nunc pharetra tincidunt. In dignissim, est id posuere sollicitudin, felis dolor volutpat magna, vel fermentum eros turpis sagittis tellus. Nunc in massa id est blandit pretium eget et nisi. Aenean suscipit mauris nisl. Maecenas a dignissim est. Ut suscipit, turpis ut commodo ornare, quam quam congue felis, quis semper leo quam consectetur augue. Proin tristique orci nec nunc vehicula, at rutrum ex congue. In quam elit, vestibulum sit amet hendrerit vel, hendrerit a quam. Nam mauris magna, laoreet at mi a, eleifend varius nisi. Morbi scelerisque ante ex, sit amet egestas dui pulvinar sed. Aliquam dignissim dictum neque, ac porttitor nulla rhoncus nec. Nam sed sollicitudin lacus. Duis sit amet interdum massa.</p>

          <p>Sed tincidunt dignissim dolor dapibus malesuada. Nulla pulvinar porttitor risus vitae sodales. Sed tristique lorem id mi pellentesque, sit amet malesuada dolor iaculis. Vestibulum at arcu id ipsum ullamcorper venenatis. Pellentesque consectetur non nisl non interdum. Curabitur lorem mauris, finibus sit amet dolor vitae, tempor rutrum nunc. Donec ex lectus, vulputate nec augue sit amet, consectetur porta lorem. Vivamus mattis urna vel purus gravida sollicitudin.</p>

          <p>Quisque vel vulputate ex. Cras cursus, elit vitae porta cursus, mauris est consequat sem, non tincidunt ipsum diam a erat. Aliquam dui felis, placerat et tempus sit amet, pretium at dui. Morbi vel felis ut nisi imperdiet lacinia. Sed quis tristique magna. Etiam vitae porttitor ex. Ut rhoncus malesuada nisi, ac cursus velit sodales at. Aliquam risus libero, lobortis a felis nec, commodo pharetra dui. In hac habitasse platea dictumst. Suspendisse at semper purus. Donec eu ipsum hendrerit, euismod libero et, aliquam mi.</p>

          <p>Morbi imperdiet sollicitudin placerat. Nulla a nulla at risus porta accumsan scelerisque eu est. In finibus libero nisl, eu faucibus ante ultrices sed. Nunc dignissim tincidunt suscipit. Phasellus sollicitudin tristique metus vel porttitor. Aenean consequat volutpat ipsum eu auctor. Vivamus ullamcorper nisi lacus, vitae egestas lectus tempus id. Sed maximus dui sit amet est cursus mollis. Praesent quis quam malesuada, mollis orci vitae, consectetur odio. Suspendisse iaculis a dolor eu vestibulum. Curabitur in faucibus metus. Etiam tristique ornare tortor, ut porta dolor posuere sed. Nam ornare arcu in volutpat eleifend.</p>

          <p>Quisque vestibulum ipsum massa, vitae convallis nisi ornare eu. Nulla facilisi. Cras in purus elit. Quisque eget lorem neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eu nisl et nisl luctus facilisis. Cras ac dictum mauris. Nulla sed convallis metus, vitae imperdiet turpis. Sed purus arcu, lobortis et blandit sed, elementum sit amet leo. Mauris quis libero diam. Aenean ut felis purus. Maecenas ultrices eget augue sed feugiat. Ut eleifend vitae sapien eget vulputate. Sed euismod, metus laoreet suscipit luctus, est enim consectetur massa, a convallis massa lacus sit amet quam. Quisque et rhoncus metus. Quisque eleifend vitae risus eget laoreet.</p>
        </Box>
      </Box>
    </PageWrapper>
  );  
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`;
