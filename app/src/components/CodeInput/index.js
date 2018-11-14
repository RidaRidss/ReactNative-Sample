import React, { Component } from "react";
import { View, TextInput } from "react-native";

// styles
import styles from "./styles";
import { Colors } from "../../theme";

export default class CodeInput extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      value: "‒ ‒ ‒ ‒"
    };
  }

  handleTextChange = value => {
    let backspace = false;
    if (value.length < this.state.value.length) {
      backspace = true;
    }
    let index = this.state.index;

    const val = value.replace(/ /g, "").split("");
    if (backspace) {
      if (index === 6) {
        val[2] = "‒";
      }
      if (index === 4) {
        val[1] = "‒";
      } else if (index === 2) {
        val[0] = "‒";
      }
    }
    if (val.length < 4) {
      val.push("‒");
    }
    let spaced = val.join(" ");

    if (spaced.length > 7) {
      spaced = spaced.slice(0, 7);
    }

    if (!backspace) {
      if (index % 2 !== 0 && index < 6) {
        index += 3;
      } else if (index < 6) {
        index += 2;
      } else if (index === 6) {
        index++;
      }
    } else if (index === 1) {
      index--;
    } else {
      index -= 2;
    }

    this.setState({
      index
    });
    return spaced;
  };

  onChangeText = value => {
    this.setState({
      value: this.handleTextChange(value)
    });
  };

  render() {
    return (
      <View style={{ width: 100, flex: 1 }}>
        <TextInput
        selectionColor={Colors.charcoal}
          ref="input"
          keyboardType="phone-pad"
          onChangeText={this.onChangeText}
          underlineColorAndroid="transparent"
          maxLength={this.state.index === 7 ? 7 : 8}
          style={styles.input}
          value={this.state.value}
          onSubmitEditing={this.props.onSubmitEditing}
          selection={{ start: this.state.index, end: this.state.index }}
        />
      </View>
    );
  }

  focus() {
    this.refs.input.focus();
  }

  getValue() {
    let val = this.state.value.replace(/ /g, "");
    val = val.replace(/‒/g, "");
    return val;
  }
}
