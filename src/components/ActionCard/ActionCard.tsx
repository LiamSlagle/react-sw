import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import styles from './styles';

interface PropTypes {
  title: string;
  subtitle?: string;
}

const ActionCard: React.FC<PropTypes> = ({ title, subtitle }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardActionArea>
        <CardContent sx={styles.cardContent}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          {subtitle && (
            <Typography component="div" sx={styles.subtitle(theme)}>
              {subtitle}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionCard;
