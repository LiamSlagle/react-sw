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
}

const ActionCard: React.FC<PropTypes> = ({ title }) => {
  const theme = useTheme();

  return (
    <Card>
      <CardActionArea>
        <CardContent sx={styles.cardContent}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography component="div" sx={styles.subtitle(theme)}>
            1977
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionCard;
