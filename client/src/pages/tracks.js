import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

const TRACKS = gql`
  query ExampleQuery {
  tracksHome {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
  }
}
`

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return 'loading...';

  if (error) return error.message;

  return <Layout grid>{data?.tracksHome?.map((track) => (
    <TrackCard key={track.id} track={track}></TrackCard>
  ))} </Layout>;
};

export default Tracks;
