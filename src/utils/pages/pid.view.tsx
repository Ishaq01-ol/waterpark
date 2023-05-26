/* eslint-disable */
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Core } from '@/components';
import { System } from '@/system';

import type { MainPageProps } from './pid.types';
import { UserContext } from '@/pages/_app';

const MainView = ({ }: MainPageProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const viewRef = useRef<any>();
  const userContext = useContext(UserContext);
  const [view, setView] = useState('')

  let systemInstance;
  useEffect(() => {
    // pid as unknown as (EModuleViews | EOperationViews)
    const loadView = async () => {
      const { pid } = router.query;
      if (userContext?.user) {
        systemInstance = System.getInstance(userContext?.user)
        const view: any = await systemInstance.getView(pid as any);
        setView(view)
        viewRef.current = view;
      }
      setLoading(false);
    };

    if (!router.isReady) return;
    loadView();
  }, [router.isReady, router.query, userContext?.user, view]);

  return loading ? <Core.LoadingComponent /> : <React.Fragment>{viewRef.current.default()}</React.Fragment>;
};

export default MainView;
