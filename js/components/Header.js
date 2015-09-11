var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

class Header extends React.Component {
  render() {
    const { username, todoNumber } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todos</Text>
        <Text style={styles.subTitle}>哈囉，{username}：您今天有 {todoNumber} 條待辦事項！</Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 8,
    paddingHorizontal: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 45,
    textAlign: 'center',
    paddingBottom: 16
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 17,
    color: 'rgba(0,0,0,0.54)'
  }
});

module.exports = Header;
