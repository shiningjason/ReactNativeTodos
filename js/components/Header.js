var React = require('react-native');

class Header extends React.Component {
  render() {
    const { username, todoNumber } = this.props;
    return (
      <header style={styles.container}>
        <h1 style={styles.title}>Todos</h1>
        <p style={styles.subTitle}>哈囉，{username}：您今天有 {todoNumber} 條待辦事項！</p>
      </header>
    );
  }
}

Header.propTypes = {
  username: React.PropTypes.string,
  todoNumber: React.PropTypes.number.isRequired
};

Header.defaultProps = {
  username: '路人甲'
};

const styles = {
  container: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingRight: 16,
    paddingLeft: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    paddingBottom: 31
  },
  subTitle: {
    fontWeight: 'lighter',
    fontSize: 17,
    color: 'rgba(0,0,0,0.54)'
  }
};

module.exports = Header;
