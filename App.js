/**
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

const missingImage = require('./missing-image.jpg')

const rows = []
for (var i = 0; i < 100; i++) {
  const columns = []
  for(var k = 0; k < 4; k++) {
    columns.push({
      id: `${i}-${k}`
    })    
  }
  rows.push(columns)
}

type Props = {}

export default class App extends Component<Props, void> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={rows}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id

  _renderItem = ({ item: columns }) => {
    return (
      <View style={styles.row}>
        { columns.map(({ id }) => {
            return (
              <View style={styles.column}>
                <Image defaultSource={missingImage} source={"unknown-image"} style={{height: 200, width: '100%'}} />
              </View>
            )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  row: {
    borderColor: '#000',
    borderWidth: 1,
    flexDirection: 'row',
    height:200
  },
  column: {
    backgroundColor: 'red',
    flex:1
  }
});
