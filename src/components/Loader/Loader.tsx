import React, { FunctionComponent } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { SolarSystemLoading } from 'react-loadingg';
import { Colors } from '../../theme/theme';

const Loader: FunctionComponent = () => {
  return <SolarSystemLoading color={Colors.loader} />;
};

export default Loader;
