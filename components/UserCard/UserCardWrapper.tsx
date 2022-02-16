import React from 'react';
import { Grid } from '@chakra-ui/react';
import { breakPoints, GridAreas } from '../../themes/breakPoints';
import { useTheme } from '../../hooks/useTheme';

export const UserCardWrapper: React.FC = ({ children }) => {
  const { mainCard, spaceMonoFont } = useTheme();
  const { containerWidth } = breakPoints;
  const { userCard } = GridAreas;
  return (
    <Grid
      marginTop="24px"
      padding={{
        base: '0 24px 24px 24px',
        md: '0 40px 40px 40px',
        lg: '0 48px 48px 48px',
      }}
      border="1px"
      height="auto"
      width={containerWidth}
      borderRadius={15}
      bgColor={mainCard.bg}
      fontFamily={spaceMonoFont}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      gridTemplateColumns={userCard.columns}
      gridTemplateAreas={userCard.grid}
    >
      {children}
    </Grid>
  );
};
