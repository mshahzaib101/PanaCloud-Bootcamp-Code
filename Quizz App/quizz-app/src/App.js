import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import storageRef from './index';

///
let defaultQuerry = 'redux';
const pathbase = 'https://hn.algolia.com/api/v1'
const pathsearch = '/search';
const parmsearch = 'query=';

// Cloud messaging

const Cmessaging = firebase.messaging();




// Cloud messaging

////

var provider = new firebase.auth.GoogleAuthProvider();
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});



class InteractiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }
  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    src: '',
    a: '',
    b: '',
  };


  handleSubmit=(event) =>{
    event.preventDefault();
    console.log(this.fileInput.current.files[0])
    var file =this.fileInput.current.files[0];
    var mountainsRef = storageRef.child('PHOTOS');
    this.setState({src:mountainsRef,})
    mountainsRef.put('file').then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
    // alert(
    //   `Selected file - ${
    //     this.fileInput.current.files[0].name
    //   }`
    // );
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  click= () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  click1 = (event) => {
    console.log(storageRef);
    console.log(event);
  }

  click2 = () => {
    // Data URL string
var message = 'https://lh5.googleusercontent.com/-h6rdPXlhCXA/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq29TgX7rLI6vFIarAoWZIbNA8e3Gw/mo/photo.jpg';
var mountainsRef2 = storageRef.child('profile pic');
mountainsRef2.putString(message).then(function(snapshot) {
  console.log('Uploaded a raw string!');
});
  }

  a = (ev) => {
    this.setState({a: ev.target.value,})
  }
  b = () => {
    this.setState({b: this.state.a});
    // console.log(this.state.b);

    var url = `${pathbase}${pathsearch}?${parmsearch}${this.state.b}`
    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))

  }
  c = () => {
    var mountainsRef2 = storageRef.child('profile pic');
    fetch('https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/10422376_10152142699272623_2876956110947339528_n.jpg?_nc_cat=0&oh=5d141fcbef44106bfc7ae2cab9c387a9&oe=5BDB46C0')
    .then(response => response.blob())
    .then(result => {
      mountainsRef2.put(result).then(function(snapshot) {
  console.log('Uploaded a raw string!');
  });
      console.log(result)})
    .catch(error => console.log(error));

    this.setState({src: mountainsRef2});

    
}

messaging = () => {
  console.log(messaging)
}



  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.state;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper
                  className={classes.paper}
                  style={{ paddingTop: (value + 1) * 10, paddingBottom: (value + 1) * 10 }}
                >
                  {`Cell ${value + 1}`}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>direction</FormLabel>
                  <RadioGroup
                    name="direction"
                    aria-label="direction"
                    value={direction}
                    onChange={this.handleChange('direction')}
                  >
                    <FormControlLabel value="row" control={<Radio />} label="row" />
                    <FormControlLabel value="row-reverse" control={<Radio />} label="row-reverse" />
                    <FormControlLabel value="column" control={<Radio />} label="column" />
                    <FormControlLabel
                      value="column-reverse"
                      control={<Radio />}
                      label="column-reverse"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>justify</FormLabel>
                  <RadioGroup
                    name="justify"
                    aria-label="justify"
                    value={justify}
                    onChange={this.handleChange('justify')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel
                      value="space-between"
                      control={<Radio />}
                      label="space-between"
                    />
                    <FormControlLabel
                      value="space-around"
                      control={<Radio />}
                      label="space-around"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={4}>
                <FormControl component="fieldset">
                  <FormLabel>alignItems</FormLabel>
                  <RadioGroup
                    name="alignItems"
                    aria-label="alignItems"
                    value={alignItems}
                    onChange={this.handleChange('alignItems')}
                  >
                    <FormControlLabel value="flex-start" control={<Radio />} label="flex-start" />
                    <FormControlLabel value="center" control={<Radio />} label="center" />
                    <FormControlLabel value="flex-end" control={<Radio />} label="flex-end" />
                    <FormControlLabel value="stretch" control={<Radio />} label="stretch" />
                    <FormControlLabel value="baseline" control={<Radio />} label="baseline" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Button variant="contained" onClick={this.click} color="primary" className={classes.button}>
        login
      </Button>
      
      <Button variant="contained" onClick={this.click2} color="primary" className={classes.button}>
        download
      </Button>
  

<form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <input type='text' onChange={this.a} value={this.state.a} />
      <br />
      <button type="submit" onClick={this.b}>Search</button>
      <button type="submit" onClick={this.c}>pic</button>
      <img src={this.state.src} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
      <button type="submit" onClick={this.messaging}>MESSAGING</button>
      </Grid>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveGrid);
