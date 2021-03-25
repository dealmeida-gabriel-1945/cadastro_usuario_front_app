import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {View, Text} from "react-native";
import {IconButton, TextInput} from "react-native-paper";
import {ColorConstants} from "../util/constants/color.constants";
import {FlexStyle} from "../style/flex.style";
import {PositionStyle} from "../style/position.style";

export class DatePicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            value: props.value,
            onChange: props.onChange
        }
    }

    render() {
        let {value} = this.props;
        return(
            <View style={[FlexStyle.makeFlex(1), FlexStyle.flexOrientation.flexRow]}>
                <View style={FlexStyle.makeFlex(6)}>
                    <TextInput
                        label="Data de Nascimento"
                        type="outlined"
                        disabled={true}
                        value={`${value.getDate()}/${(value.getMonth() < 9) ? '0':''}${value.getMonth()+1}/${value.getFullYear()}`}
                        onChangeText={text => this.setState({login: usuario.setField('nome', text)})}
                    />
                </View>
                <View style={[FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}>
                    <IconButton
                        icon="calendar"
                        color={ColorConstants.VERDE_AGUA}
                        size={30}
                        onPress={() => this.setState({showing: true})}
                    />
                </View>
                {   this.state.showing &&
                    (<DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.value}
                        maximumDate={new Date()}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={datan => {
                            this.setState({showing: false});
                            this.state.onChange(new Date(datan.nativeEvent.timestamp));
                        }}
                    />)
                }
            </View>
        )
    }
}
