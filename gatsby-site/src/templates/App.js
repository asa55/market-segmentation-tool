import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import Slider from '@material-ui/core/Slider';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const drawerWidth = 240;

const data01 = [
  { name: 'Group A', value: 30 }, 
  { name: 'Group B', value: 70 }, 
];
const data02 = [
  { name: 'A1', value: 99 },
  { name: 'A2', value: 1 },
];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24,
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: '80vh',
    },
    sliderContainer: {
      paddingLeft: 32,
      width: 150,
    }
  }));

function ContinuousSlider(value, handleChange) {
  const classes = useStyles();

  return (
    <div className={classes.sliderContainer}>
      <Grid container>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid>
    </div>
  );
}

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () =>  setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const [valueS1, setValueS1] = React.useState(30);
  const [valueS2, setValueS2] = React.useState(30);
  const [valueS3, setValueS3] = React.useState(30);
  const [valueS4, setValueS4] = React.useState(30);
  const [valueS5, setValueS5] = React.useState(30);
  const [valueS6, setValueS6] = React.useState(30);
  const [valueS7, setValueS7] = React.useState(30);

  const handleChange1 = (event, newValue) => setValueS1(newValue);
  const handleChange2 = (event, newValue) => setValueS2(newValue);
  const handleChange3 = (event, newValue) => setValueS3(newValue);
  const handleChange4 = (event, newValue) => setValueS4(newValue);
  const handleChange5 = (event, newValue) => setValueS5(newValue);
  const handleChange6 = (event, newValue) => setValueS6(newValue);
  const handleChange7 = (event, newValue) => setValueS7(newValue);

  const data01 = [ { value: valueS1 }, { value: 100-valueS1 }, ];
  const data02 = [ { value: valueS2 }, { value: 100-valueS2 }, ];
  const data03 = [ { value: valueS3 }, { value: 100-valueS3 }, ];
  const data04 = [ { value: valueS4 }, { value: 100-valueS4 }, ];
  const data05 = [ { value: valueS5 }, { value: 100-valueS5 }, ];
  const data06 = [ { value: valueS6 }, { value: 100-valueS6 }, ];
  const data07 = [ { value: valueS7 }, { value: 100-valueS7 }, ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            market-segmentation-tool
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <ListItemIcon>
                <DataUsageIcon />
              </ListItemIcon>
              <ListItemText primary="Category 1" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS1} onChange={handleChange1} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
            <ListItem button>
              <ListItemIcon>
                <DataUsageIcon />
              </ListItemIcon>
              <ListItemText primary="Category 2" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS2} onChange={handleChange2} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
            <ListItem button>
              <ListItemIcon>
                <DataUsageIcon />
              </ListItemIcon>
              <ListItemText primary="Category 3" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS3} onChange={handleChange3} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
              <ListItem button>
                <ListItemIcon>
                  <DataUsageIcon />
                </ListItemIcon>
              <ListItemText primary="Category 4" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS4} onChange={handleChange4} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
              <ListItem button>
                <ListItemIcon>
                  <DataUsageIcon />
                </ListItemIcon>
              <ListItemText primary="Category 5" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS5} onChange={handleChange5} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
              <ListItem button>
                <ListItemIcon>
                  <DataUsageIcon />
                </ListItemIcon>
              <ListItemText primary="Category 6" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS6} onChange={handleChange6} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
              <ListItem button>
                <ListItemIcon>
                  <DataUsageIcon />
                </ListItemIcon>
              <ListItemText primary="Category 7" />
            </ListItem>
            <div className={classes.sliderContainer}>
              <Grid container>
                <Grid item xs>
                  <Slider value={valueS7} onChange={handleChange7} aria-labelledby="continuous-slider" />
                </Grid>
              </Grid>
            </div>
          </div>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                  Market Segment (🚧 under construction! 🚧)
                </Typography>
                <ResponsiveContainer>
                  <PieChart width={200} height={200}>
                    <Pie data={data01} dataKey="value" cx={'50%'} cy={'50%'} outerRadius={60} fill="#8884d8" />
                    <Pie data={data02} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={70} outerRadius={90} fill="#82ca9d" />
                    <Pie data={data03} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={100} outerRadius={120} fill="#8884d8" />
                    <Pie data={data04} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={130} outerRadius={150} fill="#82ca9d" />
                    <Pie data={data05} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={160} outerRadius={180} fill="#8884d8" />
                    <Pie data={data06} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={190} outerRadius={210} fill="#82ca9d" />
                    <Pie data={data07} dataKey="value" cx={'50%'} cy={'50%'} innerRadius={220} outerRadius={240} fill="#8884d8" label />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              <Link color="inherit" href="https://asa55.github.io/">
                Click here to visit my homepage
              </Link>
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default App