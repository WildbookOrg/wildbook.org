import React from 'react';
import { take } from 'lodash-es';
import { useIntl, FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import {
  Row,
  Box,
  SpaceAroundCard,
} from '../../components/Containers';
import ButtonLink from '../../components/ButtonLink';
import ResponsiveText from '../../components/ResponsiveText';
import academiaIcon from '../../assets/academia-icon.svg';
import codeIcon from '../../assets/code-icon.svg';
import newsIcon from '../../assets/news-icon.svg';
import speciesIcon from '../../assets/species-icon.svg';
import hero from '../../assets/hero2.jpg';
import newsData from '../news/newsData';
import ActionableMetric from './ActionableMetric';
import ImageCard from './ImageCard';

const visibleNews = take(newsData, 3);

export default function Splash() {
  const intl = useIntl();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const pageNotFound = intl.formatMessage({ id: 'HOME' });
  useDocumentTitle(pageNotFound);

  return (
    <div style={{ marginTop: 64 }}>
      <Row style={{ marginTop: 116, position: 'relative' }}>
        <ResponsiveText
          style={{
            margin: '0 auto',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            width: '80%',
            top: isSm ? '17%' : '26%',
          }}
          variant="h1"
        >
          <FormattedMessage id="SPLASH_TAGLINE" />
        </ResponsiveText>
        <img src={hero} alt="hero" style={{ width: '100%' }} />
      </Row>
      <Row>
        <Box>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              style={{
                marginTop: 20,
                maxWidth: 880,
              }}
              variant="subtitle1"
            >
              <FormattedMessage id="SPLASH_SUBTITLE" />
            </Typography>
            <ButtonLink
              href="/platforms"
              display="primary"
              style={{
                marginTop: 40,
                marginBottom: 16,
              }}
            >
              <FormattedMessage id="EXPLORE_PLATFORMS" />
            </ButtonLink>
          </div>
        </Box>
      </Row>
      <Row>
        {visibleNews.map(articleData => (
          <ImageCard
            variant="black"
            date={articleData.dateString}
            imgSrc={articleData.image}
            title={articleData.title}
            url={`/news${articleData.path}`}
          />
        ))}
      </Row>
      <Row>
        <Box variant="black">
          <SpaceAroundCard>
            <ActionableMetric
              title="53 species"
              description="Support automated identification, powered by state-of-the-art machine learning algorithms."
              ask="Explore projects"
              href="/projects"
              imgSrc={speciesIcon}
            />
            <ActionableMetric
              title="190k lines of code"
              description="We love sharing our work with the research community. Every line of code is open source."
              ask="View repositories"
              href="https://github.com/WildbookOrg"
              external
              imgSrc={codeIcon}
            />
            <ActionableMetric
              title="81 publications"
              description="In peer-reviewed journals, coauthored by Wild Me staff and powered by Wild Me technologies."
              ask="See publications"
              href="/publications"
              imgSrc={academiaIcon}
            />
            <ActionableMetric
              title="7 ID algorithms"
              description={
                'Allow us to tailor our matching techniques to the unique "fingerprint" of each species.'
              }
              ask="View products"
              href="/products"
              imgSrc={newsIcon}
            />
          </SpaceAroundCard>
        </Box>
      </Row>
      <Row>
        <div style={{ margin: '60px auto', textAlign: 'center' }}>
          <Typography variant="h5">
            <FormattedMessage id="DONATION_ASK" />
          </Typography>
          <ButtonLink
            href="/donate"
            display="primary"
            style={{ marginTop: 40, marginBottom: 20 }}
          >
            <FormattedMessage id="DONATE" />
          </ButtonLink>
        </div>
      </Row>
    </div>
  );
}
