import { UiLayoutContent } from '@/shared/layout';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function LayoutContent({ children }: Props): JSX.Element {
  return <UiLayoutContent>{children}</UiLayoutContent>;
}
