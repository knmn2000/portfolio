import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Title, Container, Text, Button, Grid, Link, List } from '@components';

type Project = {
  slug: string;
  url: string;
  preview: string;
  title: string;
  caption: string;
  tags: string[];
};

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 4px;
  transition: 0.2s ease-in-out 0s;

  :hover {
    transform: scale(1.02);
  }
`;

const ProjectContainer = styled(Container)`
  :hover > * img {
    transform: scale(1.03);
  }
`;

const ProjectTag = styled.li`
  color: rgb(105, 105, 105);
  font-size: 13px;
  letter-spacing: 0.03em;
`;

const ProjectButton = styled(Button)`
  padding: 12px 30px;
`;
const projects: Project[] = [
  {
    slug: '1',
    url: 'https://github.com/knmn2000/Bajaj_FinSearch-hackrx2.0',
    preview: './img/bajaj.png',
    title: 'BajajFinSearch',
    caption:
      'An anonymous work marketplace with A.I based job matching. Available on Mobile and website.',
    tags: ['NodeJs', 'ElasticSearch', 'Kibana'],
  },
  {
    slug: '2',
    url: 'https://github.com/knmn2000/crossBoards',
    preview: './img/crossboards.png',
    title: 'Crossboards',
    caption:
      'Made a React Native app and a ReactJS webapp to make copying text across devices easier. All content is synced via Firestore, in real-time',
    tags: ['reactJS', 'Firebase', 'ReactNative'],
  },
  {
    slug: '3',
    url: 'https://github.com/knmn2000/Miles-Prower',
    preview: './img/sonic.png',
    title: 'BajajFinSearch',
    caption:
      'An anonymous work marketplace with A.I based job matching. Available on Mobile and website.',
    tags: ['reactJS'],
  },
  {
    slug: '4',
    url: 'https://github.com/knmn2000/MuskAPI',
    preview: './img/musk.png',
    title: 'MuskAPI',
    caption:
      'Scraped the twitter profile of Elon Musk for his tweets and made them available as a service publicly',
    tags: ['Typescript', 'ReactJS', 'Python', 'Scrapy'],
  },
  {
    slug: '5',
    url: 'https://github.com/knmn2000/jioGuessr',
    preview: './img/jioguessr.png',
    title: 'JioGuessr',
    caption:
      'Open source version of the popular game GeoGuessr. The game drops you in a random Google maps-street view location, and the player needs to guess where they are by navigating around the streets and looking for clues.',
    tags: ['Typescript', 'ReactJS', 'NodeJs'],
  },
];
const Projects = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window
      .matchMedia('(min-width: 800px)')
      .addEventListener('change', (e) => setIsMobile(e.matches));
  }, []);
  return (
    <Container marginBottom="5rem">
      <Head>
        <title>Projects</title>
      </Head>
      <Container alignItems="center">
        <Title>Projects</Title>
        <Text textAlign="center">
          I&apos;m always working on new projects. <br />
          You can find them on my&nbsp;
          <a href="https://github.com/knmn2000">Github</a>.
        </Text>
      </Container>
      <Grid
        py="4rem"
        gridTemplateColumns={['3fr', `repeat(${isMobile ? '2' : '1'}, 1fr)`]}
        width="100%"
        gridGap={isMobile ? '5%' : '1%'}
        id="projects-grid"
      >
        {projects.map((data: Project) => (
          <ProjectContainer
            key={data.slug}
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            gridGap="1.5rem"
          >
            <Link href={data.url} width="100%">
              <ProjectImage src={data.preview} />
            </Link>
            <Container
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Link href={data.url}>
                <Title fontSize="2rem" as="h2">
                  {data.title}
                </Title>
              </Link>
              <Link href={data.url}>
                <ProjectButton variant="secondary">View Project</ProjectButton>
              </Link>
            </Container>
            <Container gridGap="1rem">
              <Text
                textAlign="start"
                margin={0}
                lineHeight="180%"
                letterSpacing="0.02rem"
              >
                {data.caption}
              </Text>
              <List marginY="1rem">
                {data.tags.map((tag: string) => (
                  <ProjectTag key={tag}>{tag}</ProjectTag>
                ))}
              </List>
            </Container>
          </ProjectContainer>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
