// @mui
import { Container, Typography } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function PageFive() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Page Five">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Page Five
        </Typography>
        <Typography gutterBottom>
         My text area. By remzisahbaz
        </Typography>
        <Typography>
          My text area. By remzisahbazMy text area. By remzisahbazMy text area. By remzisahbazMy text area. By remzisahbaz
        </Typography>
      </Container>
    </Page>
  );
}
