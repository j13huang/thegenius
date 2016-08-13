import React from 'react';
import {connect} from 'react-redux';

function Game({test}) {
  return (
    <div>
      <p>HELLO WORLD!{test}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  test: "john",
});

export default connect(mapStateToProps)(Game);
