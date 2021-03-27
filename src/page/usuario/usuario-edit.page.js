import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import {Pagination} from "../../model/pagination.model";
import {updateUsuario, updateUsuarios} from "../../service/redux/actions/usuario.action";
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
import {DatePicker} from "../../components/date-picker.component";
import {FilePicker} from "../../components/file-picker.component";
import {EndForm} from "../../components/end-form.component";
import {ErrorHandler} from "../../util/handler/error.handler";
import {UsuarioService} from "../../service/usuario.service";
import {updateUsuarioEdit} from "../../service/redux/actions/usuario-edit.action";
import {RoutesConstants} from "../../util/constants/routes.constants";



class UsuarioEditPage extends React.Component {
    constructor(props) {
        super(props);
        let {usuarioEdit} = props;
        this.state = {
            usuario: new Usuario(usuarioEdit.id, usuarioEdit.nome, new Date(usuarioEdit.dataNascimento), usuarioEdit.foto),
            usuarioBackup: new Usuario(usuarioEdit.id, usuarioEdit.nome, new Date(usuarioEdit.dataNascimento), usuarioEdit.foto),
            navigation: props.navigation,

            erroNome: new FormError(false),
            erroDataNascimento: new FormError(false),

            isLoading: false,
        };
    }
    render() {
        if(this.state.isLoading) return <View style={[PaddingStyle.makePadding(10,10,10,10), FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}><ActivityIndicatorComponent /></View>
        let {usuario, erroNome, usuarioBackup} = this.state;
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
                                onChangeText={text => this.setState({usuario: usuario.setField('nome', text)})}
                            />
                            <HelperText type="error" visible={erroNome.present}>
                                {erroNome.message}
                            </HelperText>
                        </View>
                        <View style={MarginStyle.makeMargin(0,0,0,5)}>
                            <DatePicker
                                value={usuario.dataNascimento}
                                onChange={dataN => this.setState({usuario: usuario.setField('dataNascimento', dataN)})}
                            />
                            <HelperText type="error" visible={erroNome.present}>
                                {erroNome.message}
                            </HelperText>
                        </View>
                        <View style={MarginStyle.makeMargin(0,0,0,5)}>
                            <FilePicker
                                value={usuario.foto}
                                onChange={foto => this.setState({usuario: usuario.setField('foto', foto)})}
                            />
                        </View>
                        <View style={MarginStyle.makeMargin(0,10,0,5)}>
                            <EndForm
                                onWipeOut={() => this.setState({usuario: usuarioBackup})}
                                onSubmit={() => this.submeteFormulario()}
                                onSubmitLabel={'Editar'}
                                onCancel={() => this.state.navigation.navigate(RoutesConstants.LIST_USUARIO)}
                                onCancelIcon="arrow-left"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }

    submeteFormulario() {
        if(!this.checkCampos()) return;
        this.setLoading(true);
        UsuarioService.updateUsuario(this.state.usuario)
            .then(response => {
                alert("Operação realizada com sucesso!")
            }).catch(erro => alert(`${ErrorHandler.getTitle(erro)} \n ${ErrorHandler.getMessage(erro)}`))
            .finally(() => this.setLoading(false));
    }

    checkCampos() {
        let {nome, dataNascimento} = this.state.usuario;
        if(!nome){
            this.setState({erroNome: new FormError(true, ErrorHandler.erroCampoObrigatorio('nome'))})
            return false;
        }
        if(!dataNascimento){
            this.setState({erroDataNascimento: new FormError(true, ErrorHandler.erroCampoObrigatorio('data de nascimento'))})
            return false;
        }
        if((nome.length < 3) || (nome.length > 100)){
            this.setState({erroNome: new FormError(true, ErrorHandler.erroTamanhoCampoObrigatorio('nome', 3, 100))})
            return false;
        }
        return true;
    }
    setLoading(loading){
        this.setState({isLoading: loading});
    }
}

const myMapDispatchToProps ={
    dispatchUpdateUsuarioEdit: updateUsuarioEdit,
};
const mapStateToProps = state => {
    const {usuario} = state;
    return {usuarioEdit: usuario.usuarioEdit};
}
export default connect(mapStateToProps, myMapDispatchToProps)(UsuarioEditPage);