import React, { useEffect } from 'react';
import Giscus from '@giscus/react';

interface GiscusCommentsProps {
  repo?: string;
  repoId?: string;
  categoryId?: string;
}

const GiscusComments: React.FC<GiscusCommentsProps> = ({
  repo,
  repoId,
  categoryId,
}) => {
  // Giscus config using provided props or env defaults
  const giscusConfig = {
    repo: repo || import.meta.env.PUBLIC_GISCUS_REPO || 'tomcomtang/astro-cartoon-portfolio',
    repoId: repoId || import.meta.env.PUBLIC_GISCUS_REPO_ID || 'R_kgDOQhFeMw',
    category: 'General', // fixed
    categoryId: categoryId || import.meta.env.PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOQhFeM84CzVPU',
    mapping: 'pathname' as const, // fixed
    reactionsEnabled: '1' as const, // fixed
    emitMetadata: '0' as const, // fixed
    inputPosition: 'bottom' as const, // fixed
    theme: 'noborder_light' as const, // fixed
    lang: 'en' as const, // fixed
    loading: 'lazy' as const, // fixed
  };

  useEffect(() => {
    console.log('GiscusComments component mounted');
  }, []);

  return (
    <div id="giscus-container">
      <Giscus
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping={giscusConfig.mapping}
        reactionsEnabled={giscusConfig.reactionsEnabled}
        emitMetadata={giscusConfig.emitMetadata}
        inputPosition={giscusConfig.inputPosition}
        theme={giscusConfig.theme}
        lang={giscusConfig.lang}
        loading={giscusConfig.loading}
      />
    </div>
  );
};

export default GiscusComments;

