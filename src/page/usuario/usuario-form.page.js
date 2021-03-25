import React from "react";
import {
    View, Text,
    SafeAreaView, ScrollView, RefreshControl
} from "react-native";
import {DatePicker} from 'native-base';
import {Pagination} from "../../model/pagination.model";
import {updateUsuarios} from "../../service/redux/actions/usuario.actions";
import {connect} from "react-redux";
import {CustomHeader} from "../../components/custom-header.component";
import {FlexStyle} from "../../style/flex.style";
import {HelperText, TextInput} from "react-native-paper";
import {Usuario} from "../../model/usuario.model";
import {PaddingStyle} from "../../style/padding.style";
import {PositionStyle} from "../../style/position.style";
import {ActivityIndicatorComponent} from "../../components/activity-indicator.component";
import {MarginStyle} from "../../style/margin.style";
import {FormError} from "../../model/form-error.model";
import {ColorConstants} from "../../util/constants/color.constants";

class UsuarioFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: new Usuario(),
            navigation: props.navigation,
            pagination: new Pagination(),

            erroNome: new FormError(false),
            erroDataNascimento: new FormError(false),

            isLoading: false,
        };
    }
    render() {
        if(this.state.isLoading) return <View style={[PaddingStyle.makePadding(10,10,10,10), FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}><ActivityIndicatorComponent /></View>
        let {usuario, erroNome, erroDataNascimento} = this.state;
        return(
            <>
                <CustomHeader drawerNavigation={this.state.navigation}/>
                <SafeAreaView style={FlexStyle.makeFlex(1)}>
                    <ScrollView style={PaddingStyle.makePadding(10,10,10,10)}>
                        <View style={MarginStyle.makeMargin(0,0,0,5)}>
                            <TextInput
                                label="Nome"
                                type="outlined"
                                value={usuario.nome}
                                onChangeText={text => this.setState({login: usuario.setField('nome', text)})}
                            />
                            <HelperText type="error" visible={erroNome.present}>
                                {erroNome.message}
                            </HelperText>
                        </View>
                        <View style={MarginStyle.makeMargin(0,0,0,5)}>

                            <HelperText type="error" visible={erroNome.present}>
                                {erroNome.message}
                            </HelperText>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}
const myMapDispatchToProps ={
    dipatchUpdateUsuario: updateUsuarios,
};
const mapStateToProps = state => {
    const {usuarios} = state;
    return {usuarios};
}
//currying
export default connect(mapStateToProps, myMapDispatchToProps)(UsuarioFormPage);
