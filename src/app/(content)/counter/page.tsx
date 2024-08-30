import { Metadata } from 'next';
import React from 'react';
import { UiSectionCounter } from './section';

export const metadata: Metadata = {
  title: 'Counter Page'
};

export default function CounterPage(): JSX.Element {
  return <UiSectionCounter />;
}
