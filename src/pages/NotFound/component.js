import Button from '@components/common/Forms/Button';
import SiteContainer from '@components/features/SiteContainer';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function NotFoundComponent() {
  return (
    <SiteContainer classes="background--dark-black justify-content--center text-align--center">
      <h1 className="font--regular">Page Not Found</h1>
      <section className="margin--bottom">
        <div className="not-found">
          <p className="not-found__text">404</p>
        </div>
        <Link to="/">
          <Button classes="btn--outline" tabIndex={-1}>
            Go back to home
          </Button>
        </Link>
      </section>
    </SiteContainer>
  );
}
