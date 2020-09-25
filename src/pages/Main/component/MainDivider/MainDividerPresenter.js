import React from 'react';
import { PageHeader } from '../../../../component';

const MainDividerPresenter = props => {
  const { pageName, domain, children } = props;
  return (
    <div style={styles.container}>
      {domain || pageName ? (
        <PageHeader pageName={pageName} domain={domain}>
          <div style={{ width: '100%', height: '90%' }}>{children}</div>
        </PageHeader>
      ) : (
        children
      )}
    </div>
  );
};

const styles = {
  container: { width: '32%', height: '100%' }
};

export default MainDividerPresenter;
