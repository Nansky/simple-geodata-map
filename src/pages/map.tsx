'use client';

import dynamic from 'next/dynamic';

const MapPage = () => {
  const NotSSRMaps = dynamic(() => import('../components/maps/maps'), {
    ssr: false,
  });

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-screen-lg flex-col items-center justify-center gap-8 text-center">
      <NotSSRMaps />
    </div>
  );
};

export default MapPage;