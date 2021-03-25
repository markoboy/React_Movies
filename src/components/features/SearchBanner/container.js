import Banner from '@components/common/Banner';
import BannerImage from '@resources/banner.jpg';
import React from 'react';
import SearchBannerComponent from './component';

export default function SearchBannerContainer() {
  return (
    <Banner imgSrc={BannerImage} imgAlt="Posts of movies on the wall">
      <SearchBannerComponent title="Find your Movie" />
    </Banner>
  );
}
