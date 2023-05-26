/* eslint-disable */
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

import { Core } from '@/components';
import { System } from '@/system';

import type { ModuleSlugPageProps } from './slug.types';
import React from 'react';
import { UserContext } from '@/pages/_app';

const InternalPageUI = ({ }: ModuleSlugPageProps) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const viewRef = useRef<any>();
  const userContext = useContext(UserContext);
  const [view, setView] = useState('')

  useEffect(() => {
    let systemInstance;
    const loadView = async () => {
      // const user = {
      //   id: 'string',
      //   first_name: 'John',
      //   last_name: 'Doe',
      //   email: 'email',
      //   rec_email: 'rec',
      //   photo_url: '',
      //   phone: {},
      //   scopes: [],
      //   operations: ["manage-users"],
      //   package: {},
      //   modules: ["tasks"],
      //   role: null,
      //   admin: false,
      //   active: true,
      // }
      const { pid, slug } = router.query;
      systemInstance = System.getInstance(userContext?.user)
      const view: any = await systemInstance.getView(
        `${pid}.${slug}` as any
      );
      setView(view)
      viewRef.current = view;
      setLoading(false);
    };

    if (!router.isReady) return;
    loadView();
  }, [router.isReady, router.query, userContext?.user, view]);

  return loading ? <Core.LoadingComponent /> : <React.Fragment>{viewRef.current.default()}</React.Fragment>;
};

export default InternalPageUI;
