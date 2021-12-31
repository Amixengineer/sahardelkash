import React from 'react';
import Layout from './src/pages/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}