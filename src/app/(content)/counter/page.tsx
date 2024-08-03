import { Metadata } from 'next';
import React from 'react';
import { UiCounter } from './ui-counter';

export const metadata: Metadata = {
  title: 'Counter Page'
};

export default function CounterPage(): JSX.Element {
  return <UiCounter />;
}
