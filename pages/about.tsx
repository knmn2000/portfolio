import React from 'react';
import { Title, Text, Container, Grid, Link, Card } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import {
  SiFirebase,
  SiPostgresql,
  SiTypescript,
  SiAmazonaws,
  SiGooglecloud,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiGraphql,
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
} from 'react-icons/si';
import { Post } from '@posts';
import { TransparentLink } from '@components';

const About = (): JSX.Element => {
  const experiences: Post[] = [
    {
      caption: ["Associate Software Engineer in the frontend team."],
      date: "July 2022 - Present",
      post: "Frontend Engineer",
      title: "Toddle",
    },
    {
      caption: [`
      • Worked under the Professional services delivery business unit.
      Worked with a team on a secure policy generator tool that helped users collect
      and consolidate the firewall rules of their network.`,
      `• This tool allowed users to edit, delete, manage and then upload rules to 
      Cisco FMC (firepower management center)
      where the new rules would come in effect.
      `, `• Underwent training to become a part of the CX telemetry and insights team, learned how to use the
      network profiler to detect and resolve network issues, learned how to onboard new network devices.`,
    `• Completed 200-901 DEVASC certification as part of this internship.`],
      date: "January 2022 - June 2022",
      post: "Technical Undergraduate Intern",
      title: "Cisco",
    },
    {
      caption: [`
      • Worked on the front-end of the product, built with ReactJS + TypeScript.
        Responsibilities included pushing out new features for the platform, fixing
        bugs, writing tests and making enhancements to the UI/UX.`,
      `• I was responsible for writing, debugging, testing and maintaining over 190
        scrapers which scrape regulatory documents and related news items. I was also
        responsible for overseeing the flow of the payloads through upstream services
        (Metabase, Kibana) and providing corrections wherever required.`,

      `• Wrote 18% of the scrapers in the codebase. Increased test coverage by 20%. 
      `],
      date: "March 2020 - December 2020",
      post: "Frontend Intern",
      title: "Radicali",
    },
  ];
  const stacks = React.useMemo(
    () => [
      {
        Icon: SiNodedotjs,
        url: 'https://nodejs.org/en/',
      },
      {
        Icon: SiMongodb,
        url: 'https://www.mongodb.com/',
      },
      {
        Icon: SiTypescript,
        url: 'https://www.typescriptlang.org/',
      },
      {
        Icon: SiReact,
        url: 'https://reactjs.org/',
      },
      {
        Icon: SiGraphql,
        url: 'https://graphql.org/',
      },
      {
        Icon: SiAmazonaws,
        url: 'https://aws.amazon.com/',
      },
      {
        Icon: SiNextdotjs,
        url: 'https://nextjs.org/',
      },
      {
        Icon: SiBootstrap,
        url: 'https://getbootstrap.com/',
      },
      {
        Icon: SiGooglecloud,
        url: 'https://cloud.google.com/',
      },
      {
        Icon: SiFirebase,
        url: 'https://firebase.google.com/',
      },
      {
        Icon: SiPostgresql,
        url: 'https://www.postgresql.org/',
      },
      {
        Icon: SiPython,
        url: 'https://www.python.org/',
      },
    ],
    [],
  );

  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <Container alignContent="center" alignItems="center">
        <Title fontSize={['3rem', '4rem']} as="h2">
          Developer {'&'} curious
        </Title>
        <Container maxWidth={['100%', '720px']} marginY="2rem">
          <Text>I&apos;m a Frontend developer living in Haryana.</Text>
          <Text>
            During my free time I like working out, playing the guitar, making photoshop
            edits. You can check out some of my guitar videos on instagram&nbsp;
            <a href="https://instagram.com/karan.mannan">Instagram</a>.
          </Text>
        </Container>
      </Container>

      <Container
        paddingY="4rem"
        gridGap="2rem"
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
      >
        <Title fontSize="40px" as="h2">
          Technologies I frequently use
        </Title>
        <Grid
          gridTemplateColumns={['repeat(3 , 1fr)', 'repeat(6 , 1fr)']}
          gridGap="1rem"
          justifyItems="center"
          maxWidth="40rem"
        >
          {stacks.map(({ Icon, url }, i) => (
            <Link href={url} key={url}>
              <Card key={i}>
                <Icon size="2rem" />
              </Card>
            </Link>
          ))}
        </Grid>
      </Container>
      <Container
        alignContent="center"
        alignItems="center"
        textAlign="center"
        width="100%"
        paddingBottom="4rem"
        gridGap="3rem"
      >
        <Title fontSize="40px" as="h2">
          Work Experiences
        </Title>
        <Container width="100%">
          {experiences.map((data, i) => (
              <Grid
                key={i}
                justifyItems="flex-start"
                gridGap="1rem"
                paddingY="2rem"
                borderBottom="1px solid rgba(0,0,0,0.1)"
                style={{ justifyContent: 'flex-start' }}
              >

                <Grid width="100%" >
                  <Container
                    width="100%"
                    alignItems="flex-start"
                    textAlign="start"
                  >
                    <Grid
                      width="100%"
                      justifyItems="flex-start"
                      justifyContent="flex-start"
                      gridGap="1rem"
                    >
                      <Title fontSize="1.5rem" margin={0} as="h3">
                        {data.title}
                      </Title>
                      <Text
                        fontSize="smaller"
                        margin={0}
                        color="rgba(0, 0, 0, 0.1)"
                      >
                        {data.date}
                      </Text>
                    </Grid>
                    {data.caption.map((caption, i)=>{
                      return <Text fontSize="1rem" style={{whiteSpace:'inherit'}}>{caption}</Text>
                    })}
                  </Container>
                </Grid>
              </Grid>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    },
  };
};

export default About;
