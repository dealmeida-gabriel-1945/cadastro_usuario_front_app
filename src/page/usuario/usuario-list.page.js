import React from "react";
import {
    View, Text,
    SafeAreaView, ScrollView, RefreshControl, Pressable
} from "react-native";
import {connect} from "react-redux";
import {updateUsuario} from "../../service/redux/actions/usuario.action";
import {UsuarioService} from "../../service/usuario.service";
import {Pagination} from "../../model/pagination.model";
import {DataTable} from "react-native-paper";
import {FlexStyle} from "../../style/flex.style";
import {PositionStyle} from "../../style/position.style";
import {PaddingStyle} from "../../style/padding.style";
import {CustomHeader} from "../../components/custom-header.component";
import {MarginStyle} from "../../style/margin.style";
import {ActivityIndicatorComponent} from "../../components/activity-indicator.component";
import {AppUtil} from "../../util/app.util";
import {ErrorHandler} from "../../util/handler/error.handler";
import { Button, Icon} from 'native-base';
import {ColorConstants} from "../../util/constants/color.constants";
import ShowUsuario from "../../components/show-usuario.component";

class UsuarioListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
            navigation: props.navigation,
            pagination: new Pagination(),
            userToView: null,

            isLoading: false,
        };
    }

    componentDidMount() {
        this.buscaPage();
    }

    buscaPage(){
        this.setLoading(true);
        UsuarioService.listUsuario(this.state.pagination)
            .then(response => {
                this.updatePagination('totalElements', response.data.totalElements);
                this.setState({usuarios: response.data.content})
            }).catch(erro => alert(`${ErrorHandler.getTitle(erro)} \n ${ErrorHandler.getMessage(erro)}`))
            .finally(() => this.setLoading(false))
    }

    render() {
        if(this.state.isLoading) return <View style={[PaddingStyle.makePadding(10,10,10,10), FlexStyle.makeFlex(1), PositionStyle.centralizadoXY]}><ActivityIndicatorComponent /></View>
        if((this.props.usuariosPage) && this.props.usuariosPage.content.length !== this.state.pagination.content.length) this.setState({pagination: this.props.usuariosPage})
        let {pagination, isLoading, usuarios} = this.state;
        return(
            <>
                <CustomHeader drawerNavigation={this.state.navigation}/>
                <ShowUsuario navigation={this.props.navigation}/>
                <SafeAreaView style={FlexStyle.makeFlex(1)}>
                <ScrollView
                    contentContainerStyle={FlexStyle.makeFlex(1)}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={() => this.buscaPage()}
                        />
                    }
                >
                    <View stle={[MarginStyle.makeMargin(10,10,10,10)]}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>#</DataTable.Title>
                                <DataTable.Title>Nome</DataTable.Title>
                                <DataTable.Title style={PositionStyle.centralizadoXY}>Data Nascimento</DataTable.Title>
                                <DataTable.Title style={PositionStyle.centralizadoXY}>Ações</DataTable.Title>
                            </DataTable.Header>
                            {this.renderRows()}
                            <DataTable.Pagination
                                page={pagination.page}
                                numberOfPages={AppUtil.NUMBER_OF_PAGES(pagination.totalElements, pagination.size)}
                                onPageChange={page => {
                                    this.setState({pagination: pagination.setField('page', page)})
                                    this.buscaPage();
                                }}

                                label={`${(pagination.page * pagination.size) + 1}-${(pagination.page * pagination.size) + pagination.size} de ${pagination.totalElements?pagination.totalElements: 0}`}
                            />
                        </DataTable>
                    </View>
                </ScrollView>
            </SafeAreaView>
            </>
        );
    }

    renderRows() {
        let {usuarios} = this.state;
        return (!usuarios || (usuarios.length === 0))
            ? (
                <DataTable.Row key={1}>
                    <DataTable.Cell>Nenhum dado encontrado!</DataTable.Cell>
                </DataTable.Row>
            )
            : usuarios.map(
                usuario => (
                    <DataTable.Row key={usuario.id}>
                        <DataTable.Cell>{usuario.id}</DataTable.Cell>
                        <DataTable.Cell>{usuario.nome}</DataTable.Cell>
                        <DataTable.Cell>{AppUtil.FORMATA_DATA(new Date(usuario.dataNascimento))}</DataTable.Cell>
                        <DataTable.Cell style={PositionStyle.centralizadoXY}>
                            <Button transparent onPress={() => this.props.dipatchUpdateUsuario(usuario)}>
                                <Icon name='eye' style={{color: ColorConstants.VERDE_AGUA}}/>
                            </Button>
                        </DataTable.Cell>
                    </DataTable.Row>
                )
            );
    }

    updatePagination(field, value){
        this.setState({
            pagination: this.state.pagination.setField(field, value),
        });
    }
    setLoading(loading){
        this.setState({isLoading: loading});
    }
}

const myMapDispatchToProps ={
    dipatchUpdateUsuario: updateUsuario,
};
const mapStateToProps = state => {
    const {usuario} = state;
    return {usuario};
}
export default connect(mapStateToProps, myMapDispatchToProps)(UsuarioListPage);
